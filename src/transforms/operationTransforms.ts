// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HttpMethods, Mapper, MapperType } from "@azure/core-http";
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
  CodeModel
} from "@azure-tools/codemodel";
import { normalizeName, NameType } from "../utils/nameUtils";
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

export function transformOperationSpec(
  operationDetails: OperationDetails,
  parameters: ParameterDetails[]
): OperationSpecDetails {
  // Extract protocol information
  const operationFullName = operationDetails.fullName;
  const isXML = operationDetails.mediaTypes.has(KnownMediaType.Xml);
  const httpInfo = extractHttpDetails(operationDetails.request);
  const {
    requestBody,
    queryParameters,
    urlParameters,
    headerParameters
  } = getGroupedParameters(parameters, operationFullName);

  return {
    ...httpInfo,
    responses: extractSpecResponses(operationDetails),
    requestBody,
    ...(queryParameters && queryParameters.length && { queryParameters }),
    ...(urlParameters && urlParameters.length && { urlParameters }),
    ...(headerParameters && headerParameters.length && { headerParameters }),
    ...(isXML && { isXML })
  };
}

export function extractHttpDetails({ path, method }: OperationRequestDetails) {
  return {
    path,
    httpMethod: method.toUpperCase() as HttpMethods
  };
}

export function extractSpecResponses({
  name,
  responses
}: OperationDetails): OperationSpecResponses {
  if (!responses || !responses.length) {
    throw new Error(`The operation ${name} contains no responses`);
  }

  return extractSchemaResponses(responses);
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
      reference = `Mappers.${normalizeName(name, NameType.Class)}`;
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
    mediaType: request.protocol.http.knownMediaType
  };
}

/**
 * Build OperationResponseDetails by extracting body and header information
 * from the response
 */
export function transformOperationResponse(
  response: SchemaResponse | Response,
  operationFullName: string
): OperationResponseDetails {
  const httpInfo = response.protocol.http;
  const isError =
    !!response.extensions && !!response.extensions["x-ms-error-response"];

  if (!httpInfo) {
    throw new Error("Operation does not specify HTTP response details.");
  }

  // Transform Headers to am ObjectSchema to represent headers as an object
  const headersSchema = headersToSchema(httpInfo.headers, operationFullName);
  const mediaType = httpInfo.knownMediaType;

  const mappers: OperationResponseMappers = {
    bodyMapper: isSchemaResponse(response)
      ? getMapperForSchema(response.schema, mediaType)
      : undefined,
    headersMapper: headersSchema
      ? getMapperForSchema(headersSchema, mediaType)
      : undefined
  };

  const types: OperationResponseTypes = {
    bodyType: isSchemaResponse(response)
      ? getTypeForSchema(response.schema)
      : undefined,
    headersType: headersSchema ? getTypeForSchema(headersSchema) : undefined
  };

  const isDefault = httpInfo.statusCodes.indexOf("default") > -1;

  return {
    statusCodes: httpInfo.statusCodes,
    mediaType: httpInfo.knownMediaType,
    mappers,
    types,
    isError: isDefault || isError
  };
}

export async function transformOperation(
  operation: Operation,
  operationGroupName: string
): Promise<OperationDetails> {
  const metadata = getLanguageMetadata(operation.language);
  const name = normalizeName(metadata.name, NameType.Property);
  const operationFullName = `${operationGroupName}_${name}`;
  const responsesAndErrors = [
    ...(operation.responses || []),
    ...(operation.exceptions || [])
  ];
  const typeDetails: TypeDetails = {
    typeName: `${normalizeName(
      operationGroupName,
      NameType.Interface
    )}${normalizeName(metadata.name, NameType.Interface)}`,
    kind: PropertyKind.Composite
  };

  const request = transformOperationRequest(operation.request);
  const responses = responsesAndErrors.map(response =>
    transformOperationResponse(response, operationFullName)
  );
  const mediaTypes = await getOperationMediaTypes(request, responses);

  return {
    name,
    typeDetails,
    fullName: operationFullName.toLowerCase(),
    apiVersions: operation.apiVersions
      ? operation.apiVersions.map(v => v.version)
      : [],
    description: metadata.description,
    request,
    responses,
    mediaTypes
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

export async function transformOperationGroup(
  operationGroup: OperationGroup,
  clientName: string
): Promise<OperationGroupDetails> {
  const metadata = getLanguageMetadata(operationGroup.language);
  const isTopLevel = !metadata.name;
  const name = normalizeName(metadata.name || clientName, NameType.Property);

  const operations = await Promise.all(
    operationGroup.operations.map(operation =>
      transformOperation(operation, name)
    )
  );
  const mediaTypes = getOperationGroupMediaTypes(operations);

  return {
    name,
    key: operationGroup.$key,
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
  { mediaType }: OperationRequestDetails,
  responses: OperationResponseDetails[]
) {
  const mediaTypes = new Set<KnownMediaType>();
  if (mediaType) {
    mediaTypes.add(mediaType);
  }

  responses.forEach(r => r.mediaType && mediaTypes.add(r.mediaType));

  return mediaTypes;
}

function getGroupedParameters(
  parameters: ParameterDetails[],
  operationFullname: string
) {
  const operationParams = parameters.filter(
    p => p.operationsIn && p.operationsIn.indexOf(operationFullname) > -1
  );
  return {
    requestBody: operationParams.find(
      p => p.location === ParameterLocation.Body
    ),
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
