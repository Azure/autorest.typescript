import {
  CodeModel, Operation, Parameter, ParameterLocation, Property, SchemaContext,
  Request as M4OperationRequest
} from "@autorest/codemodel";
import { ImportKind, OperationParameter, ParameterBodyMetadata, ParameterBodySchema, ParameterMetadata, ParameterMetadatas, Schema } from "@azure-tools/rlc-codegen";
import { getLanguageMetadata } from "../../utils/languageHelpers";
import { NameType, normalizeName } from "../../utils/nameUtils";
import { getDocs } from "../getPropertySignature";
import { getOperationParameters } from "../helpers/operationHelpers";
import { getElementType, primitiveSchemaToType } from "../schemaHelpers";

export function transformParameterTypes(model: CodeModel, importDetails: Map<ImportKind, Set<string>>) {
  const rlcParameters: OperationParameter[] = [];
  let importedModels = new Set<string>();
  const operations = getAllOperations(model);
  for (const operation of operations) {
    const operationName = normalizeName(
      getLanguageMetadata(operation.language).name,
      NameType.Interface
    );
    const rlcParameter: OperationParameter = {
      operationName,
      parameters: []
    };
    const requestCount = operation?.requests?.length ?? 0;
    for (let i = 0; i < requestCount; i++) {
      const parameters = getOperationParameters(operation, i);
      const request = operation.requests ? operation.requests[i] : undefined;
      // transform query param
      const queryParams = transformQueryParameters(
        parameters,
        importedModels);
      // transform path param
      const pathParams = transformPathParameters(
        parameters,
        model,
        importedModels
      )
      // transform header param
      const headerParams = transformHeaderParameters(
        parameters,
        importedModels);
      // transform content type param
      const contentTypeParam = transformContentTypeParameter(
        request
      );
      // transform body
      const bodyParameter = transformBodyParameters(
        parameters,
        importedModels
      );
      rlcParameter.parameters.push({
        parameters: [...queryParams, ...pathParams, ...headerParams, ...contentTypeParam],
        body: bodyParameter
      });
    }
    rlcParameters.push(rlcParameter);
  }
  if (importedModels.size > 0) {
    importDetails.set(ImportKind.ParameterInput, importedModels);
  }
  return rlcParameters;
}

function transformQueryParameters(
  parameters: Parameter[],
  importedModels: Set<string>,
): ParameterMetadata[] {
  const queryParameters = parameters.filter(
    p => p.protocol.http?.in === "query"
  );
  return (queryParameters || []).map(qp =>
    getParameterMetadata("query", qp, importedModels)
  );
}

function transformPathParameters(
  parameters: Parameter[],
  model: CodeModel,
  importedModels: Set<string>,
): ParameterMetadata[] {
  const pathParameters = parameters.filter(
    p => p.protocol.http?.in === ParameterLocation.Uri && model.globalParameters?.indexOf(p) === -1
  );

  return (pathParameters || []).map(qp =>
    getParameterMetadata("path", qp, importedModels, true)
  );
}

function transformHeaderParameters(
  parameters: Parameter[],
  importedModels: Set<string>,
): ParameterMetadata[] {
  const headerParameters = parameters.filter(
    p => p.protocol.http?.in === "header"
  );
  return (headerParameters || []).map(qp =>
    getParameterMetadata("header", qp, importedModels, true)
  );
}

function transformContentTypeParameter(
  request: M4OperationRequest | undefined
): [ParameterMetadata] | [] {
  if (!request) {
    return [];
  }
  const mediaTypes: string[] = request.protocol.http?.mediaTypes ?? [];
  if (!mediaTypes.length) {
    return [];
  }

  return [{
    type: "header",
    name: "contentType",
    param: {
      name: "contentType",
      type: mediaTypes.map(mt => `"${mt}"`).join(" | "),
      description: "Request content type",
      required: false
    }
  }];
}

function transformBodyParameters(
  parameters: Parameter[],
  importedModels: Set<string>,
): ParameterBodyMetadata | undefined {
  const bodyParameters = parameters.filter(p => p.protocol.http?.in === "body");
  if (!bodyParameters.length) {
    return undefined;
  }
  const isPartialBody = bodyParameters.some(p => p.isPartialBody);
  const rlcBodyParam: ParameterBodyMetadata = {
    isPartialBody,
  };
  if (isPartialBody) {
    rlcBodyParam.body = bodyParameters.map(bp =>
      getParamterSchema(bp, importedModels)
    );
  } else {
    rlcBodyParam.body = [
      getParamterSchema(bodyParameters[0], importedModels)
    ]
  }

  return rlcBodyParam;
}

function getParameterMetadata(
  paramType: "query" | "path" | "header",
  parameter: Property | Parameter,
  importedModels = new Set<string>(),
  isPrimitiveSchema = false) {
  const schema: Schema = getParamterSchema(parameter, importedModels, isPrimitiveSchema);
  return {
    type: paramType,
    name: schema.name,
    param: schema
  };;
}

function getParamterSchema(
  parameter: Property | Parameter,
  importedModels = new Set<string>(),
  isPrimitiveSchema = false
): Schema {
  const propertyLangMetadata = getLanguageMetadata(parameter.language);
  const propertyName = `"${propertyLangMetadata.serializedName ??
    (parameter as Property).serializedName}"`;

  if (!propertyName) {
    throw new Error(
      `Couldn't find name for property ${JSON.stringify(propertyLangMetadata)}`
    );
  }

  const description = getDocs(parameter);
  let type;
  if (isPrimitiveSchema) {
    type = primitiveSchemaToType(parameter.schema, [
      SchemaContext.Input,
      SchemaContext.Exception
    ]);
  } else {
    type = getElementType(parameter.schema, [SchemaContext.Input], importedModels);
  }

  return {
    name: propertyName,
    type,
    description,
    required: parameter.required
  };
}

/**
 * Flattens all operations from operationGroups
 */
function getAllOperations(model: CodeModel): Operation[] {
  const operations: Operation[] = [];
  for (const operationGroup of model.operationGroups) {
    operations.push(...operationGroup.operations);
  }

  return operations;
}