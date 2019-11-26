import {
  OperationSpec,
  Serializer,
  HttpMethods,
  OperationResponse
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
import { getLanguageMetadata, getTypeForSchema } from "./transforms";
import { normalizeName, NameType } from "./utils/nameUtils";
import {
  OperationGroupDetails,
  OperationDetails,
  OperationResponseDetails,
  OperationRequestDetails,
  OperationRequestParameterDetails
} from "./models/operationDetails";

export function transformOperationSpec(operation: Operation): OperationSpec {
  // Extract protocol information
  const httpInfo = extractHttpDetails(operation.request);
  const serializer = new Serializer();
  const operationDetails = transformOperation(operation);

  return {
    ...httpInfo,
    responses: extractResponses(operation.responses, operation.exceptions),
    requestBody: extractRequest(operationDetails) as any,
    serializer
  };
}

export function extractHttpDetails({ protocol }: Request) {
  if (!protocol.http) {
    throw new Error("operation doesn't contain a definition for HTTP protocol");
  }
  const { path, method } = protocol.http;

  return {
    path: path.replace("{$host}/", ""),
    httpMethod: method.toUpperCase() as HttpMethods
  };
}

export type OperationResponses = { [responseCode: string]: OperationResponse };
export function extractResponses(
  responses?: Array<SchemaResponse | Response>,
  exceptions: Array<SchemaResponse | Response> = []
): OperationResponses {
  if (!responses || !responses.length) {
    return {};
  }
  const schemaResponses = extractSchemaResponses(responses);
  const defaultResponse = extractSchemaResponses(exceptions);

  return {
    ...schemaResponses,
    ...defaultResponse
  };
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

export function extractSchemaResponses(
  responses: Array<Response | SchemaResponse>
) {
  return responses.reduce(
    (result: OperationResponses, response: SchemaResponse | Response) => {
      if (!response.protocol.http) {
        return result;
      }

      const statusCodes = response.protocol.http.statusCodes;

      if (!statusCodes || !statusCodes.length) {
        return result;
      }

      const statusCode = statusCodes[0];
      result[statusCode] = {};
      const schemaResponse = response as any;
      if (schemaResponse.schema) {
        result[statusCode] = {
          bodyMapper: getBodyMapperFromSchema(schemaResponse.schema)
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
  if ((response as any).schema) {
    const schemaResponse = response as SchemaResponse;
    modelType = getTypeForSchema(schemaResponse.schema).typeName;
  }

  if (response.protocol.http) {
    return {
      statusCodes: response.protocol.http.statusCodes,
      mediaType: response.protocol.http.knownMediaType,
      modelType
    };
  } else {
    throw new Error("Operation does not specify HTTP response details.");
  }
}

export function transformOperation(operation: Operation): OperationDetails {
  const metadata = getLanguageMetadata(operation.language);
  operation.responses;
  return {
    name: normalizeName(metadata.name, NameType.Property),
    apiVersions: operation.apiVersions
      ? operation.apiVersions.map(v => v.version)
      : [],
    description: metadata.description,
    request: transformOperationRequest(operation.request),
    responses: []
  };
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
