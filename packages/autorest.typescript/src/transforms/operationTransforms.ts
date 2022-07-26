// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HttpMethods, Mapper, OperationSpec } from "@azure/core-http";
import {
  Operation,
  Request,
  SchemaResponse,
  Response,
  Schema,
  SchemaType,
  ChoiceSchema,
  OperationGroup,
  ParameterLocation,
  ConstantSchema,
  CodeModel,
  ObjectSchema
} from "@autorest/codemodel";
import {
  normalizeName,
  NameType,
  getOperationFullName
} from "../utils/nameUtils";
import {
  OperationGroupDetails,
  OperationDetails,
  OperationResponseDetails,
  OperationRequestDetails,
  OperationSpecDetails,
  OperationSpecResponses,
  OperationResponseMappers,
  OperationResponseTypes
} from "../models/operationDetails";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { getTypeForSchema, isSchemaResponse } from "../utils/schemaHelpers";
import { getMapperTypeFromSchema, transformMapper } from "./mapperTransforms";
import { ParameterDetails } from "../models/parameterDetails";
import { PropertyKind, TypeDetails } from "../models/modelDetails";
import { KnownMediaType } from "@azure-tools/codegen";
import { headersToSchema } from "../utils/headersToSchema";
import { extractPaginationDetails } from "../utils/extractPaginationDetails";
import { isEmpty, isEqual } from "lodash";
import { getAutorestOptions } from "../autorestSession";

/**
 * SWAGGER doesn't require to define all possible response codes
 * for the polling operations, since we need to send operation specs
 * to coreHttp we'll inject possible response codes. The stub responses
 * will be a clone of the first success response defined
 */
function injectMissingResponses(
  responses: OperationResponseDetails[]
): OperationResponseDetails[] {
  const acceptedResponses = ["200", "201", "202", "204"];

  // Use an already defined accepted response as base;
  const baseResponse = acceptedResponses.reduce((acc, status) => {
    if (!isEmpty(acc)) {
      return acc;
    }

    const response = responses.find(r => r.statusCodes.includes(status));
    if (response) {
      acc = response;
    }

    return acc;
  }, {} as OperationResponseDetails);

  // Clone the bas response with the accepted response codes
  const enhancedResponses = acceptedResponses.reduce<
    OperationResponseDetails[]
  >((acc, status) => {
    let current = responses.find(r => r.statusCodes.includes(status));

    if (!current) {
      current = { ...baseResponse, statusCodes: [status] };
    }

    return [...acc, current];
  }, []);

  // Keep the non success responses originally defined
  const otherResponses = responses.filter(
    r => !acceptedResponses.some(ar => isEqual([ar], r.statusCodes))
  );

  return [...enhancedResponses, ...otherResponses];
}

export function transformOperationSpec(
  operationDetails: OperationDetails,
  parameters: ParameterDetails[]
): OperationSpecDetails[] {
  const operationName = normalizeName(
    operationDetails.name,
    NameType.Operation,
    true /** shouldGuard */
  );

  // Extract protocol information
  const operationFullName = operationDetails.fullName;

  const operationSpecDetails: OperationSpecDetails[] = [];

  const hasMultipleRequests = operationDetails.requests.length > 1;
  for (const request of operationDetails.requests) {
    const isXML = operationDetails.mediaTypes.has(KnownMediaType.Xml);
    const httpInfo = extractHttpDetails(request);
    const {
      requestBody,
      formDataParameters,
      queryParameters,
      urlParameters,
      headerParameters
    } = getGroupedParameters(parameters, operationFullName, request.mediaType);

    const name = hasMultipleRequests
      ? `${operationName}$${request.mediaType}OperationSpec`
      : `${operationName}OperationSpec`;
    operationSpecDetails.push({
      ...httpInfo,
      responses: extractSpecResponses(operationDetails),
      requestBody,
      formDataParameters,
      ...(queryParameters && queryParameters.length && { queryParameters }),
      ...(urlParameters && urlParameters.length && { urlParameters }),
      ...(headerParameters && headerParameters.length && { headerParameters }),
      ...(isXML && { isXML }),
      name
    });
  }

  return operationSpecDetails;
}

export function extractHttpDetails({
  path,
  method
}: OperationRequestDetails): {
  path: string;
  httpMethod: HttpMethods;
} {
  return {
    path,
    httpMethod: method.toUpperCase() as HttpMethods
  };
}

export function extractSpecResponses({
  name,
  responses,
  isLro
}: OperationDetails): OperationSpecResponses {
  if (!responses || !responses.length) {
    throw new Error(`The operation ${name} contains no responses`);
  }

  let enhancedResponses = responses;

  if (isLro) {
    enhancedResponses = injectMissingResponses(responses);
  }

  return extractSchemaResponses(enhancedResponses);
}

export interface SpecType {
  name: string;
  allowedValues?: string[];
  reference?: string;
  constantProps?: ConstantProps;
}

interface ConstantProps {
  isConstant: true;
  defaultValue: any;
}

export function getSpecType(responseSchema: Schema, expand = false): SpecType {
  let typeName: string = "";
  let allowedValues: any[] | undefined = undefined;
  let reference: string | undefined = undefined;
  let constantProps: ConstantProps | undefined;
  switch (responseSchema.type) {
    case SchemaType.ByteArray:
      typeName = "Base64Url";
      break;
    case SchemaType.Constant:
      const constantSchema = responseSchema as ConstantSchema;
      typeName = getSpecType(constantSchema.valueType).name;
      constantProps = expand
        ? {
          isConstant: true,
          defaultValue: constantSchema.value.value
        }
        : undefined;
      break;
    case SchemaType.String:
      typeName = "String";
      break;
    case SchemaType.Choice:
    case SchemaType.SealedChoice:
      const choiceSchema = responseSchema as ChoiceSchema;
      typeName = "Enum";
      allowedValues = choiceSchema.choices.map(choice => choice.value);
      break;
    case SchemaType.Object:
      const name = getLanguageMetadata(responseSchema.language).name;
      reference = `Mappers.${normalizeName(
        name,
        NameType.Class,
        true /** shouldGuard */
      )}`;
      break;
    default:
      typeName = getMapperTypeFromSchema(responseSchema.type);
      break;
  }

  let result = {
    name: typeName as any,
    reference
  };

  return {
    ...result,
    ...(!!allowedValues && { allowedValues }),
    ...(!!constantProps && { constantProps })
  };
}

export function extractSchemaResponses(responses: OperationResponseDetails[]) {
  return responses.reduce(
    (
      result: OperationSpecResponses,
      { statusCodes, mappers }: OperationResponseDetails
    ) => {
      if (!statusCodes || !statusCodes.length) {
        return result;
      }

      const statusCode = statusCodes[0];
      result[statusCode] = mappers;
      return result;
    },
    {}
  );
}

export function transformOperationRequest(
  request: Request
): OperationRequestDetails {
  if (!request.protocol.http) {
    throw new Error("Operation does not specify HTTP request details.");
  }
  return {
    path: request.protocol.http.path,
    method: request.protocol.http.method,
    mediaType: request.protocol.http.knownMediaType,
    parameters: request.parameters
  };
}

/**
 * Build OperationResponseDetails by extracting body and header information
 * from the response
 */
export function transformOperationResponse(
  response: SchemaResponse | Response,
  operationFullName: string,
  paginationItemName?: string
): OperationResponseDetails {
  const httpInfo = response.protocol.http;

  if (!httpInfo) {
    throw new Error("Operation does not specify HTTP response details.");
  }

  const isDefault = httpInfo.statusCodes.indexOf("default") > -1;
  const isError =
    isDefault ||
    (!!response.extensions && !!response.extensions["x-ms-error-response"]);

  // Transform Headers to am ObjectSchema to represent headers as an object
  const headersSchema = headersToSchema(
    httpInfo.headers,
    operationFullName,
    isError
  );
  const mediaType = httpInfo.knownMediaType;

  const mappers: OperationResponseMappers = {
    bodyMapper: isSchemaResponse(response)
      ? getMapperForSchema(response.schema, mediaType)
      : undefined,
    headersMapper: headersSchema
      ? getMapperForSchema(headersSchema, mediaType)
      : undefined,
    isError: !isDefault && isError
  };

  if (mediaType === KnownMediaType.Binary && !mappers.bodyMapper) {
    mappers.bodyMapper = {
      type: {
        name: "Stream"
      },
      serializedName: "parsedResponse"
    };
  }
  const { useCoreV2 } = getAutorestOptions();

  const types: OperationResponseTypes = {
    bodyType: isSchemaResponse(response)
      ? getTypeForSchema(response.schema, false, useCoreV2)
      : undefined,
    headersType: headersSchema ? getTypeForSchema(headersSchema, false, useCoreV2) : undefined,
    pagingValueType: isError
      ? undefined
      : getPagingItemType(response, paginationItemName)
  };

  return {
    statusCodes: httpInfo.statusCodes,
    mediaType: httpInfo.knownMediaType,
    mappers,
    types,
    isError: isError
  };
}

/**
 * This function extracts the type of the value property in the response of a pageable operation
 */
function getPagingItemType(
  response: SchemaResponse | Response,
  paginationItemName?: string
): TypeDetails | undefined {
  if (isSchemaResponse(response)) {
    if (paginationItemName) {
      const paginationValueType = (response.schema as ObjectSchema).properties?.find(
        p => {
          const name = getLanguageMetadata(p.language).name;
          return (
            name === paginationItemName ||
            p.serializedName === paginationItemName
          );
        }
      );

      if (!paginationValueType) {
        throw new Error(
          "x-ms-pageable itemName is was not found in the result definition"
        );
      }
      return getTypeForSchema(paginationValueType.schema);
    }
  }

  return undefined;
}

export async function transformOperation(
  operation: Operation,
  operationGroup: OperationGroup,
  clientName: string
): Promise<OperationDetails> {
  const metadata = getLanguageMetadata(operation.language);
  const pagination = extractPaginationDetails(operation);
  const name = normalizeName(
    metadata.name,
    NameType.Operation,
    true /** shouldGuard */
  );
  const operationFullName = getOperationFullName(
    operationGroup,
    operation,
    clientName
  );
  const responsesAndErrors = [
    ...(operation.responses || []),
    ...(operation.exceptions || [])
  ];
  const normalizedOperationGroupName = normalizeName(
    getOperationGroupName(operationGroup, clientName),
    NameType.Interface
  );
  const normalizedOperationName = normalizeName(
    metadata.name,
    NameType.Interface,
    true /** shouldGuard */
  );

  const typeName =
    normalizedOperationGroupName === clientName
      ? `${normalizedOperationName}`
      : `${normalizedOperationGroupName}${normalizedOperationName}`;

  const typeDetails: TypeDetails = {
    typeName,
    kind: PropertyKind.Composite,
    usedModels: [typeName]
  };

  const isLro: boolean = Boolean(
    operation.extensions && operation.extensions["x-ms-long-running-operation"]
  );
  const lroOptions =
    operation.extensions &&
    operation.extensions["x-ms-long-running-operation-options"];

  const codeModelRequests = operation.requests;
  if (codeModelRequests === undefined || !codeModelRequests.length) {
    throw new Error(
      `No request object was found for operation: ${operationFullName}`
    );
  }

  const pagingValueProperty = metadata.paging?.itemName;

  const requests = codeModelRequests.map(transformOperationRequest);
  let responses = responsesAndErrors.map(response =>
    transformOperationResponse(response, operationFullName, pagingValueProperty)
  );
  const hasMultipleResponses = responses.filter(r => !r.isError).length > 1;

  // If this is an Lro operation only consider the first success response,
  // this is because Lro operations swagger defines initial and final operation
  // responses in the same operation.
  if (isLro && hasMultipleResponses) {
    const errorResponses = responses.filter(r => r.isError);
    responses = [responses[0], ...errorResponses];
  }

  const mediaTypes = await getOperationMediaTypes(requests, responses);

  return {
    name,
    typeDetails,
    fullName: operationFullName,
    apiVersions: operation.apiVersions
      ? operation.apiVersions.map(v => v.version)
      : [],
    description: metadata.description,
    parameters: operation.parameters || [],
    requests,
    responses,
    mediaTypes,
    pagination,
    isLro,
    lroOptions
  };
}

export function transformOperationGroups(
  codeModel: CodeModel
): Promise<OperationGroupDetails[]> {
  const clientName = getLanguageMetadata(codeModel.language).name;
  return Promise.all(
    codeModel.operationGroups.map(operationGroup =>
      transformOperationGroup(operationGroup, clientName)
    )
  );
}

function getOperationGroupName(
  operationGroup: OperationGroup,
  clientName: string = ""
) {
  const { name } = getLanguageMetadata(operationGroup.language);

  return normalizeName(name || clientName, NameType.OperationGroup);
}

export async function transformOperationGroup(
  operationGroup: OperationGroup,
  clientName: string
): Promise<OperationGroupDetails> {
  const metadata = getLanguageMetadata(operationGroup.language);
  const isTopLevel = !metadata.name;
  const operationGroupClassName = getOperationGroupName(
    operationGroup,
    clientName
  );

  const operations = await Promise.all(
    operationGroup.operations.map(operation =>
      transformOperation(operation, operationGroup, clientName)
    )
  );
  const mediaTypes = getOperationGroupMediaTypes(operations);

  return {
    name: operationGroupClassName,
    key: operationGroup.$key,
    originalKey: operationGroup.$key,
    operations,
    isTopLevel,
    mediaTypes
  };
}

function getOperationGroupMediaTypes(operationDetails: OperationDetails[]) {
  return operationDetails.reduce((acc, op) => {
    return new Set<KnownMediaType>([...acc, ...op.mediaTypes]);
  }, new Set<KnownMediaType>());
}

async function getOperationMediaTypes(
  requests: OperationRequestDetails[],
  responses: OperationResponseDetails[]
) {
  const mediaTypes = new Set<KnownMediaType>();

  requests.forEach(r => r.mediaType && mediaTypes.add(r.mediaType));
  responses.forEach(r => r.mediaType && mediaTypes.add(r.mediaType));

  return mediaTypes;
}

function getGroupedParameters(
  parameters: ParameterDetails[],
  operationFullname: string,
  mediaType?: KnownMediaType
): {
  formDataParameters?: any;
  requestBody?: any;
  queryParameters: any;
  urlParameters: any;
  headerParameters: any;
  cookie: any;
} {
  const operationParams = parameters.filter(p => {
    // Ensure parameters are specific to the operation.
    const matchesOperation =
      p.operationsIn && p.operationsIn[operationFullname];
    // Consider the media type as a match if none was provided, or they actually match.
    // This is important when an operation supports multiple media types.
    const matchesMediaType =
      !mediaType || !p.targetMediaType || p.targetMediaType === mediaType;
    return Boolean(matchesOperation && matchesMediaType);
  });
  const hasFormDataParameters =
    mediaType &&
    (mediaType == KnownMediaType.Multipart || mediaType == KnownMediaType.Form);

  // Extract parameters that are located in the operation body
  const bodyParams = operationParams.filter(
    p => p.location === ParameterLocation.Body
  );

  let requestBody:
    | ParameterDetails
    | ParameterDetails[]
    | undefined = bodyParams;

  // If we have an empty array make the request boyd undefined
  if (bodyParams.length === 0) {
    requestBody = undefined;
  }

  // Flatten the bodyParams array if it only contains a single parameter
  if (bodyParams.length === 1) {
    requestBody = bodyParams[0];
  }

  return {
    ...(hasFormDataParameters
      ? {
        formDataParameters: operationParams.filter(
          p => p.location === ParameterLocation.Body
        )
      }
      : {
        requestBody
      }),
    queryParameters: operationParams.filter(
      p => p.location === ParameterLocation.Query
    ),
    urlParameters: operationParams.filter(
      p =>
        p.location === ParameterLocation.Path ||
        p.location === ParameterLocation.Uri
    ),
    headerParameters: operationParams.filter(
      p => p.location === ParameterLocation.Header
    ),
    cookie: operationParams.filter(p => p.location === ParameterLocation.Cookie)
  };
}

function getMapperForSchema(
  responseSchema: Schema,
  mediaType?: KnownMediaType,
  expand = false
): Mapper | string {
  const responseType = getSpecType(responseSchema, expand);
  const { reference } = responseType;
  return (
    reference ||
    transformMapper({
      schema: responseSchema,
      options: { hasXmlMetadata: mediaType === KnownMediaType.Xml }
    })
  );
}
