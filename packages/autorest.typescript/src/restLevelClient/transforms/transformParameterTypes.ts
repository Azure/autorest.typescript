// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CodeModel,
  Operation,
  Parameter,
  ParameterLocation,
  Property,
  SchemaContext,
  ObjectSchema as M4ObjectSchema,
  Request as M4OperationRequest
} from "@autorest/codemodel";
import {
  ObjectSchema,
  OperationParameter,
  ParameterBodyMetadata,
  ParameterMetadata,
  Schema,
  Imports as InnerImports
} from "@azure-tools/rlc-common";
import { transformObject } from "./transformSchemas";
import { getLanguageMetadata } from "../../utils/languageHelpers";
import { NameType, normalizeName } from "../../utils/nameUtils";
import { getDocs } from "../getPropertySignature";
import { getOperationParameters } from "../helpers/operationHelpers";
import { getElementType, primitiveSchemaToType } from "../schemaHelpers";

export function transformParameterTypes(
  model: CodeModel,
  importDetails: InnerImports
) {
  const rlcParameters: OperationParameter[] = [];
  let importedModels = new Set<string>();
  const operations = getAllOperations(model);
  for (const operation of operations) {
    // Please note the operationName already has operationGroup as prefix
    const operationName = normalizeName(
      getLanguageMetadata(operation.language).name,
      NameType.Interface
    );
    const rlcParameter: OperationParameter = {
      operationGroup: "",
      operationName,
      parameters: []
    };
    const requestCount = operation?.requests?.length ?? 0;
    for (let i = 0; i < requestCount; i++) {
      const parameters = getOperationParameters(operation, i);
      const request = operation.requests ? operation.requests[i] : undefined;
      // transform query param
      const queryParams = transformQueryParameters(parameters, importedModels);
      // transform path param
      const pathParams = transformPathParameters(
        parameters,
        model,
        importedModels
      );
      // transform header param
      const headerParams = transformHeaderParameters(
        parameters,
        importedModels
      );
      // transform content type param
      const contentTypeParam = transformContentTypeParameter(request);
      // transform body
      const bodyParameter = transformBodyParameters(
        parameters,
        importedModels,
        contentTypeParam
      );
      rlcParameter.parameters.push({
        parameters: [
          ...queryParams,
          ...pathParams,
          ...headerParams,
          ...contentTypeParam
        ],
        body: bodyParameter
      });
    }
    rlcParameters.push(rlcParameter);
  }
  importDetails.parameter.importsSet = importedModels;
  return rlcParameters;
}

function transformQueryParameters(
  parameters: Parameter[],
  importedModels: Set<string>
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
  importedModels: Set<string>
): ParameterMetadata[] {
  const pathParameters = parameters.filter(
    p =>
      p.protocol.http?.in === ParameterLocation.Uri &&
      model.globalParameters?.indexOf(p) === -1
  );

  return (pathParameters || []).map(qp =>
    getParameterMetadata("path", qp, importedModels, true)
  );
}

function transformHeaderParameters(
  parameters: Parameter[],
  importedModels: Set<string>
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

  return [
    {
      type: "header",
      name: "contentType",
      param: {
        name: "contentType",
        type: mediaTypes.map(mt => `"${mt}"`).join(" | "),
        description: "Request content type",
        required: false
      }
    }
  ];
}

function transformBodyParameters(
  parameters: Parameter[],
  importedModels: Set<string>,
  contentTypeParam: ParameterMetadata[]
): ParameterBodyMetadata | undefined {
  const bodyParameters = parameters.filter(p => p.protocol.http?.in === "body");
  if (!bodyParameters.length) {
    return undefined;
  }
  const isPartialBody = bodyParameters.some(p => p.isPartialBody);
  const rlcBodyParam: ParameterBodyMetadata = {
    isPartialBody
  };
  if (isPartialBody) {
    rlcBodyParam.body = bodyParameters.map(bp =>
      getParameterSchema(bp, importedModels, false, contentTypeParam)
    );
  } else {
    rlcBodyParam.body = [
      getParameterSchema(
        bodyParameters[0],
        importedModels,
        false,
        contentTypeParam
      )
    ];
  }

  return rlcBodyParam;
}

function getParameterMetadata(
  paramType: "query" | "path" | "header",
  parameter: Property | Parameter,
  importedModels = new Set<string>(),
  isPrimitiveSchema = false
) {
  const schema: Schema = getParameterSchema(
    parameter,
    importedModels,
    isPrimitiveSchema
  );
  return {
    type: paramType,
    name: schema.name,
    param: schema
  };
}

function getParameterSchema(
  parameter: Property | Parameter,
  importedModels = new Set<string>(),
  isPrimitiveSchema = false,
  contentTypeParam: ParameterMetadata[] = []
): ObjectSchema {
  const propertyLangMetadata = getLanguageMetadata(parameter.language);
  const propertyName = `"${propertyLangMetadata.serializedName ??
    (parameter as Property).serializedName}"`;

  if (!propertyName) {
    throw new Error(
      `Couldn't find name for property ${JSON.stringify(propertyLangMetadata)}`
    );
  }

  let description = getDocs(parameter);
  let type;
  if (isPrimitiveSchema) {
    type = primitiveSchemaToType(parameter.schema, [
      SchemaContext.Input,
      SchemaContext.Exception
    ]);
  } else {
    type = getElementType(
      parameter.schema,
      [SchemaContext.Input],
      importedModels
    );
  }
  if (
    contentTypeParam.length === 1 &&
    contentTypeParam[0].param.type.includes("application/merge-patch+json")
  ) {
    const schema = transformObject(parameter.schema as M4ObjectSchema);
    type = `${type}ResourceMergeAndPatch`;

    return {
      name: propertyName,
      type,
      description,
      required: parameter.required,
      properties: schema.properties,
      typeName: schema.name
    };
  }
  if (type === "Array<string>" || type === "Array<number>") {
    const serializeInfo = getSpecialSerializeInfo(parameter);
    if (
      serializeInfo.hasMultiCollection ||
      serializeInfo.hasPipeCollection ||
      serializeInfo.hasSsvCollection ||
      serializeInfo.hasTsvCollection ||
      serializeInfo.hasCsvCollection
    ) {
      type = "string";
      description += ` This parameter needs to be formatted as ${serializeInfo.collectionInfo.join(
        ", "
      )} collection, we provide ${serializeInfo.descriptions.join(
        ", "
      )} from serializeHelper.ts to help${
        serializeInfo.hasMultiCollection
          ? ", you will probably need to set skipUrlEncoding as true when sending the request"
          : ""
      }`;
    }
  }
  return {
    name: propertyName,
    type,
    description,
    required: parameter.required
  };
}

export function getSpecialSerializeInfo(parameter: Parameter) {
  let hasMultiCollection = false;
  let hasPipeCollection = false;
  let hasSsvCollection = false;
  let hasTsvCollection = false;
  let hasCsvCollection = false;
  const descriptions = [];
  const collectionInfo = [];
  if (
    parameter.protocol.http?.explode === true &&
    parameter.protocol.http?.style === "form"
  ) {
    hasMultiCollection = true;
    descriptions.push("buildMultiCollection");
    collectionInfo.push("multi");
  }
  if (parameter.protocol.http?.style === "spaceDelimited") {
    hasSsvCollection = true;
    descriptions.push("buildSsvCollection");
    collectionInfo.push("ssv");
  }
  if (parameter.protocol.http?.style === "pipeDelimited") {
    hasPipeCollection = true;
    descriptions.push("buildPipeCollection");
    collectionInfo.push("pipe");
  }
  if (parameter.protocol.http?.style === "tabDelimited") {
    hasTsvCollection = true;
    descriptions.push("buildTsvCollection");
    collectionInfo.push("tsv");
  }
  if (parameter.protocol.http?.style === "simple") {
    hasCsvCollection = true;
    descriptions.push("buildCsvCollection");
    collectionInfo.push("csv");
  }
  return {
    hasMultiCollection,
    hasPipeCollection,
    hasSsvCollection,
    hasTsvCollection,
    hasCsvCollection,
    descriptions,
    collectionInfo
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