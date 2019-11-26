import {
  OperationSpec,
  Serializer,
  HttpMethods,
  OperationResponse,
  Mapper
} from "@azure/core-http";
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
  Parameter
} from "@azure-tools/codemodel";
import { normalizeName, NameType } from "./utils/nameUtils";
import {
  OperationGroupDetails,
  OperationDetails,
  OperationResponseDetails,
  OperationRequestDetails,
  OperationRequestParameterDetails
} from "./models/operationDetails";
import { getLanguageMetadata } from "./utils/languageHelpers";
import { getTypeForSchema } from "./utils/schemaHelpers";

export function transformOperationSpec(
  operationDetails: OperationDetails
): OperationSpec {
  // Extract protocol information
  const httpInfo = extractHttpDetails(operationDetails.request);
  const serializer = new Serializer();
  return {
    ...httpInfo,
    responses: extractResponses(operationDetails.responses),
    requestBody: extractRequest(operationDetails) as any,
    serializer
  };
}

export function extractHttpDetails({ path, method }: OperationRequestDetails) {
  return {
    path: path.replace("{$host}/", ""),
    httpMethod: method.toUpperCase() as HttpMethods
  };
}

export type OperationResponses = { [responseCode: string]: OperationResponse };
export function extractResponses(
  responses?: OperationResponseDetails[]
): OperationResponses {
  if (!responses || !responses.length) {
    return {};
  }
  const schemaResponses = extractSchemaResponses(responses);

  return schemaResponses;
}

export function extractRequest(operationDetails: OperationDetails) {
  const parameters = (operationDetails.request.parameters || []).filter(
    p => p.location === ParameterLocation.Body
  );

  if (parameters.length < 1) {
    return undefined;
  }

  return {
    parameterPath: parameters.map(p => p.name)[0],
    mapper: parameters[0].mapper
  };
}

export interface SpecType {
  name: any;
  allowedValues?: any[];
}

export function getSpecType(responseSchema: Schema): any {
  let typeName: string;
  let allowedValues: any[] | undefined = undefined;
  switch (responseSchema.type) {
    case SchemaType.ByteArray:
      typeName = "Base64Url";
      break;
    case SchemaType.String:
    case SchemaType.Constant:
      typeName = "String";
      break;
    case SchemaType.Choice:
      const choiceSchema = responseSchema as ChoiceSchema;
      typeName = "Enum";
      allowedValues = choiceSchema.choices.map(choice => choice.value);
      break;
    case SchemaType.Object:
      const name = getLanguageMetadata(responseSchema.language).name;
      return `Mappers.${normalizeName(name, NameType.Class)}`;
    default:
      throw new Error(`Unsupported Spec Type ${responseSchema.type}`);
  }

  let result = {
    name: typeName
  };

  return !!allowedValues ? { ...result, allowedValues } : result;
}

export function extractBasicResponses(
  responses: Array<Response | SchemaResponse>
) {
  return (responses as any[]).filter((r: SchemaResponse) => !r.schema);
}

export function extractSchemaResponses(responses: OperationResponseDetails[]) {
  return responses.reduce(
    (result: OperationResponses, response: OperationResponseDetails) => {
      const statusCodes = response.statusCodes;

      if (!statusCodes || !statusCodes.length) {
        return result;
      }

      const statusCode = statusCodes[0];
      result[statusCode] = {};
      if (response.bodyMapper) {
        result[statusCode] = {
          bodyMapper: response.bodyMapper as any
        };
      }
      return result;
    },
    {}
  );
}

function getBodyMapperFromSchema(responseSchema: Schema) {
  const responseType = getSpecType(responseSchema);
  return !responseType.name
    ? responseType
    : {
        type: responseType
      };
}

/**
 * Operation Details
 */

export function transformOperationRequestParameter(
  parameter: Parameter
): OperationRequestParameterDetails {
  const metadata = getLanguageMetadata(parameter.language);
  return {
    name: metadata.name,
    description: metadata.description,
    modelType: getTypeForSchema(parameter.schema).typeName,
    required: parameter.required,
    location: parameter.protocol.http
      ? parameter.protocol.http.in
      : ParameterLocation.Body,
    mapper: getBodyMapperFromSchema(parameter.schema)
  };
}

export function transformOperationRequest(
  request: Request
): OperationRequestDetails {
  if (request.protocol.http) {
    return {
      path: request.protocol.http.path.replace("{$host}/", ""),
      method: request.protocol.http.method,
      parameters: request.parameters
        ? request.parameters.map(transformOperationRequestParameter)
        : undefined
    };
  } else {
    throw new Error("Operation does not specify HTTP request details.");
  }
}

export function transformOperationResponse(
  response: Response
): OperationResponseDetails {
  let modelType: string | undefined = undefined;
  let bodyMapper: Mapper | string | undefined = undefined;
  if ((response as any).schema) {
    const schemaResponse = response as SchemaResponse;
    modelType = getTypeForSchema(schemaResponse.schema).typeName;
    bodyMapper = getBodyMapperFromSchema(schemaResponse.schema);
  }

  if (response.protocol.http) {
    return {
      statusCodes: response.protocol.http.statusCodes,
      mediaType: response.protocol.http.knownMediaType,
      modelType,
      bodyMapper
    };
  } else {
    throw new Error("Operation does not specify HTTP response details.");
  }
}

export function transformOperation(operation: Operation): OperationDetails {
  const metadata = getLanguageMetadata(operation.language);
  return {
    name: normalizeName(metadata.name, NameType.Property),
    apiVersions: operation.apiVersions
      ? operation.apiVersions.map(v => v.version)
      : [],
    description: metadata.description,
    request: transformOperationRequest(operation.request),
    responses: mergeResponsesAndExceptions(operation)
  };
}

function mergeResponsesAndExceptions(operation: Operation) {
  let responses: OperationResponseDetails[] = [];

  if (operation.responses) {
    responses = [
      ...(responses || []),
      ...operation.responses.map(transformOperationResponse)
    ];
  }

  if (operation.exceptions) {
    responses = [
      ...(responses || []),
      ...operation.exceptions.map(transformOperationResponse)
    ];
  }

  return responses;
}

export function transformOperationGroup(
  operationGroup: OperationGroup
): OperationGroupDetails {
  const metadata = getLanguageMetadata(operationGroup.language);
  return {
    name: normalizeName(metadata.name, NameType.Property),
    key: operationGroup.$key,
    operations: operationGroup.operations.map(transformOperation)
  };
}
