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
  ChoiceSchema
} from "@azure-tools/codemodel";
import { getLanguageMetadata } from "./transforms";
import { normalizeName, NameType } from "./utils/nameUtils";

export function transformOperationSpec(operation: Operation): OperationSpec {
  // Extract protocol information
  const httpInfo = extractHttpDetails(operation.request);
  const serializer = new Serializer();

  return {
    ...httpInfo,
    responses: extractResponses(operation.responses, operation.exceptions),
    serializer
  };
}

export function extractHttpDetails({ protocol }: Request) {
  if (!protocol.http) {
    throw new Error("operation doesn't contain a definition for HTTP protocol");
  }
  const { path, method } = protocol.http;

  return {
    path,
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
