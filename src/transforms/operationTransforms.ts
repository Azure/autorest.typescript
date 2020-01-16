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
  ConstantSchema
} from "@azure-tools/codemodel";
import { normalizeName, NameType } from "../utils/nameUtils";
import {
  OperationGroupDetails,
  OperationDetails,
  OperationResponseDetails,
  OperationRequestDetails,
  OperationSpecDetails,
  OperationSpecResponses
} from "../models/operationDetails";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { getTypeForSchema } from "../utils/schemaHelpers";
import { getMapperTypeFromSchema } from "./mapperTransforms";
import { ParameterDetails } from "../models/parameterDetails";
import { PropertyTypeDetails, PropertyKind } from "../models/modelDetails";

export function transformOperationSpec(
  operationDetails: OperationDetails,
  parameters: ParameterDetails[]
): OperationSpecDetails {
  // Extract protocol information
  const operationFullName = operationDetails.fullName;
  const httpInfo = extractHttpDetails(operationDetails.request);
  const { requestBody, queryParameters, urlParameters } = getGroupedParameters(
    parameters,
    operationFullName
  );

  return {
    ...httpInfo,
    responses: extractSpecResponses(operationDetails),
    requestBody,
    ...(queryParameters && queryParameters.length && { queryParameters }),
    ...(urlParameters && urlParameters.length && { urlParameters })
  };
}

export function extractHttpDetails({ path, method }: OperationRequestDetails) {
  return {
    // TODO: Revisit how we should handle {$host}
    path: path.replace("{$host}/", ""),
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

  const schemaResponses = extractSchemaResponses(responses);
  return schemaResponses;
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
    (result: OperationSpecResponses, response: OperationResponseDetails) => {
      const statusCodes = response.statusCodes;

      if (!statusCodes || !statusCodes.length) {
        return result;
      }

      const statusCode = statusCodes[0];
      result[statusCode] = {};
      if (response.bodyMapper) {
        result[statusCode] = {
          bodyMapper: response.bodyMapper
        };
      }
      return result;
    },
    {}
  );
}

export function transformOperationRequest(
  request: Request
): OperationRequestDetails {
  if (request.protocol.http) {
    return {
      // TODO: Revisit how we should handle {$host}
      path: request.protocol.http.path.replace("{$host}/", ""),
      method: request.protocol.http.method
    };
  } else {
    throw new Error("Operation does not specify HTTP request details.");
  }
}

export function transformOperationResponse(
  response: Response | SchemaResponse
): OperationResponseDetails {
  let modelTypeName: string | undefined = undefined;
  let responseType: PropertyTypeDetails | undefined = undefined;
  let bodyMapper: Mapper | string | undefined = undefined;

  if ((response as SchemaResponse).schema) {
    const schemaResponse = response as SchemaResponse;
    responseType = getTypeForSchema(schemaResponse.schema);
    bodyMapper = getBodyMapperFromSchema(schemaResponse.schema);
  }

  if (response.protocol.http) {
    return {
      statusCodes: response.protocol.http.statusCodes,
      mediaType: response.protocol.http.knownMediaType,
      modelType: modelTypeName,
      bodyMapper
    };
  } else {
    throw new Error("Operation does not specify HTTP response details.");
  }
}

export function transformOperation(
  operation: Operation,
  operationGroupName: string
): OperationDetails {
  const metadata = getLanguageMetadata(operation.language);
  const name = normalizeName(metadata.name, NameType.Property);
  return {
    name,
    fullName: `${operationGroupName}_${name}`.toLowerCase(),
    apiVersions: operation.apiVersions
      ? operation.apiVersions.map(v => v.version)
      : [],
    description: metadata.description,
    request: transformOperationRequest(operation.request),
    responses: mergeResponsesAndExceptions(operation)
  };
}

export function transformOperationGroup(
  operationGroup: OperationGroup
): OperationGroupDetails {
  const metadata = getLanguageMetadata(operationGroup.language);
  const name = normalizeName(metadata.name, NameType.Property);
  return {
    name,
    key: operationGroup.$key,
    operations: operationGroup.operations.map(operation =>
      transformOperation(operation, name)
    )
  };
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
      p => p.location === ParameterLocation.Path
    ),
    header: operationParams.filter(
      p => p.location === ParameterLocation.Header
    ),
    cookie: operationParams.filter(
      p => p.location === ParameterLocation.Cookie
    ),
    uri: operationParams.filter(p => p.location === ParameterLocation.Uri)
  };
}

function getBodyMapperFromSchema(
  responseSchema: Schema,
  expand = false
): Mapper | string {
  const responseType = getSpecType(responseSchema, expand);
  const { reference, constantProps, ...type } = responseType;
  return (
    reference || {
      type: type as MapperType,
      ...(!!constantProps && constantProps)
    }
  );
}

function mergeResponsesAndExceptions(operation: Operation) {
  let responses: OperationResponseDetails[] = [];

  if (operation.responses) {
    responses = [
      ...responses,
      ...operation.responses.map(transformOperationResponse)
    ];
  }

  if (operation.exceptions) {
    responses = [
      ...responses,
      ...operation.exceptions.map(transformOperationResponse)
    ];
  }

  return responses;
}
