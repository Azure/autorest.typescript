import {
  HttpMethods,
  Mapper,
  MapperType,
  CompositeMapper
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
  Parameter,
  ConstantSchema
} from "@azure-tools/codemodel";
import { normalizeName, NameType } from "../utils/nameUtils";
import {
  OperationGroupDetails,
  OperationDetails,
  OperationResponseDetails,
  OperationRequestDetails,
  OperationRequestParameterDetails,
  OperationSpecDetails,
  OperationSpecResponses,
  OperationSpecRequest
} from "../models/operationDetails";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { getTypeForSchema } from "../utils/schemaHelpers";

export function transformOperationSpec(
  operationDetails: OperationDetails
): OperationSpecDetails {
  // Extract protocol information
  const httpInfo = extractHttpDetails(operationDetails.request);
  return {
    ...httpInfo,
    responses: extractSpecResponses(operationDetails),
    requestBody: extractSpecRequest(operationDetails)
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

export function extractSpecRequest(
  operationDetails: OperationDetails
): OperationSpecRequest | undefined {
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
            defaultValue: constantSchema.value.value || ""
          }
        : undefined;
      break;
    case SchemaType.String:
      typeName = "String";
      break;
    case SchemaType.Choice:
      const choiceSchema = responseSchema as ChoiceSchema;
      typeName = "Enum";
      allowedValues = choiceSchema.choices.map(choice => choice.value);
      break;
    case SchemaType.Object:
      const name = getLanguageMetadata(responseSchema.language).name;
      reference = `Mappers.${normalizeName(name, NameType.Class)}`;
      break;
    default:
      throw new Error(`Unsupported Spec Type ${responseSchema.type}`);
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

export function transformOperationRequestParameter(
  parameter: Parameter
): OperationRequestParameterDetails {
  const metadata = getLanguageMetadata(parameter.language);

  return {
    name: metadata.name,
    description: metadata.description,
    modelType: getTypeForSchema(parameter.schema).typeName,
    required: isParameterRequired(parameter),
    location: parameter.protocol.http
      ? parameter.protocol.http.in
      : ParameterLocation.Body,
    mapper: getBodyMapperFromSchema(parameter.schema, true)
  };
}

function isParameterRequired(parameter: Parameter) {
  const mapper = getBodyMapperFromSchema(
    parameter.schema,
    true
  ) as CompositeMapper;

  // If the parameter contains a default value, it is not required
  return !!mapper.defaultValue ? false : parameter.required;
}

export function transformOperationRequest(
  request: Request
): OperationRequestDetails {
  if (request.protocol.http) {
    return {
      // TODO: Revisit how we should handle {$host}
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
  response: Response | SchemaResponse
): OperationResponseDetails {
  let modelType: string | undefined = undefined;
  let bodyMapper: Mapper | string | undefined = undefined;

  if ((response as SchemaResponse).schema) {
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
