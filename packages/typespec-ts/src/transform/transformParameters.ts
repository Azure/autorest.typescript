// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Imports,
  ObjectSchema,
  OperationParameter,
  ParameterBodyMetadata,
  ParameterMetadata,
  Schema,
  SchemaContext
} from "@azure-tools/rlc-common";
import { ignoreDiagnostics, Program, Type } from "@typespec/compiler";
import {
  getHttpOperation,
  HttpOperation,
  HttpOperationParameter,
  HttpOperationParameters
} from "@typespec/http";
import {
  getImportedModelName,
  getTypeName,
  getSchemaForType,
  getFormattedPropertyDoc,
  getBodyType,
  predictDefaultValue,
  enrichBinaryTypeInBody,
  getSerializeTypeName
} from "../utils/modelUtils.js";

import {
  getOperationGroupName,
  getOperationName,
  getSpecialSerializeInfo,
  isBinaryPayload
} from "../utils/operationUtil.js";
import {
  SdkClient,
  listOperationGroups,
  listOperationsInOperationGroup,
  isApiVersion
} from "@azure-tools/typespec-client-generator-core";
import { SdkContext } from "../utils/interfaces.js";

export function transformToParameterTypes(
  importDetails: Imports,
  client: SdkClient,
  dpgContext: SdkContext
): OperationParameter[] {
  const program = dpgContext.program;
  const rlcParameters: OperationParameter[] = [];
  const outputImportedSet = new Set<string>();
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const route = ignoreDiagnostics(getHttpOperation(program, clientOp));
    // ignore overload base operation
    if (route.overloads && route.overloads?.length > 0) {
      continue;
    }
    transformToParameterTypesForRoute(program, route);
  }
  const operationGroups = listOperationGroups(dpgContext, client, true);
  for (const operationGroup of operationGroups) {
    const operations = listOperationsInOperationGroup(
      dpgContext,
      operationGroup
    );
    for (const op of operations) {
      const route = ignoreDiagnostics(getHttpOperation(program, op));
      // ignore overload base operation
      if (route.overloads && route.overloads?.length > 0) {
        continue;
      }
      transformToParameterTypesForRoute(program, route);
    }
  }

  if (outputImportedSet.size > 0) {
    importDetails.parameter.importsSet = outputImportedSet;
  }
  function transformToParameterTypesForRoute(
    program: Program,
    route: HttpOperation
  ) {
    const parameters = route.parameters;
    const rlcParameter: OperationParameter = {
      operationGroup: getOperationGroupName(dpgContext, route),
      operationName: getOperationName(program, route.operation),
      parameters: []
    };
    // transform query param
    const queryParams = transformQueryParameters(
      dpgContext,
      parameters,
      outputImportedSet
    );
    // transform path param
    const pathParams = transformPathParameters();
    // transform header param including content-type
    const headerParams = transformHeaderParameters(
      dpgContext,
      parameters,
      outputImportedSet
    );
    // transform body
    const bodyType = getBodyType(program, route);
    let bodyParameter = undefined;
    if (bodyType) {
      bodyParameter = transformBodyParameters(
        dpgContext,
        parameters,
        headerParams,
        outputImportedSet,
        bodyType
      );
    }
    rlcParameter.parameters.push({
      parameters: [...queryParams, ...pathParams, ...headerParams],
      body: bodyParameter
    });
    rlcParameters.push(rlcParameter);
  }
  return rlcParameters;
}

function getParameterMetadata(
  dpgContext: SdkContext,
  paramType: "query" | "path" | "header",
  parameter: HttpOperationParameter,
  importedModels: Set<string>
): ParameterMetadata {
  const program = dpgContext.program;
  const schemaContext = [SchemaContext.Exception, SchemaContext.Input];
  const schema = getSchemaForType(
    dpgContext,
    parameter.param.type,
    schemaContext,
    false,
    parameter.param
  ) as Schema;
  let type = getTypeName(schema, schemaContext);
  const name = getParameterName(parameter.name);
  let description =
    getFormattedPropertyDoc(program, parameter.param, schema) ?? "";
  if (
    type === "string[]" ||
    type === "Array<string>" ||
    type === "number[]" ||
    type === "Array<number>"
  ) {
    const serializeInfo = getSpecialSerializeInfo(
      parameter.type,
      (parameter as any).format
    );
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
  type =
    paramType !== "query" && type !== "string"
      ? getSerializeTypeName(dpgContext.program, schema, schemaContext)
      : type;
  getImportedModelName(schema, schemaContext)?.forEach(
    importedModels.add,
    importedModels
  );
  return {
    type: paramType,
    name,
    param: {
      name,
      type,
      required: !parameter.param.optional,
      description
    }
  };
}

function getParameterName(name: string) {
  if (name && name.toLowerCase() === "content-type") {
    return "contentType";
  }
  return `"${name}"`;
}

function transformQueryParameters(
  dpgContext: SdkContext,
  parameters: HttpOperationParameters,
  importModels: Set<string> = new Set<string>()
): ParameterMetadata[] {
  const queryParameters = parameters.parameters.filter(
    (p) =>
      p.type === "query" &&
      !(isApiVersion(dpgContext, p) && predictDefaultValue(dpgContext, p.param))
  );
  if (!queryParameters.length) {
    return [];
  }
  return queryParameters.map((qp) =>
    getParameterMetadata(dpgContext, "query", qp, importModels)
  );
}

/**
 * Only support to take the global path parameter as path parameter
 * @returns
 */
function transformPathParameters() {
  // TODO
  // issue tracked https://github.com/Azure/autorest.typescript/issues/1521
  return [];
}

function transformHeaderParameters(
  dpgContext: SdkContext,
  parameters: HttpOperationParameters,
  importedModels: Set<string>
): ParameterMetadata[] {
  const headerParameters = parameters.parameters.filter(
    (p) => p.type === "header"
  );
  if (!headerParameters.length) {
    return [];
  }
  return headerParameters.map((qp) =>
    getParameterMetadata(dpgContext, "header", qp, importedModels)
  );
}

function transformBodyParameters(
  dpgContext: SdkContext,
  parameters: HttpOperationParameters,
  headers: ParameterMetadata[],
  importedModels: Set<string>,
  inputBodyType?: Type
): ParameterBodyMetadata | undefined {
  const bodyType =
    (parameters.bodyType ?? parameters.bodyParameter?.type) && inputBodyType
      ? inputBodyType
      : parameters.bodyType ?? parameters.bodyParameter?.type;
  if (!bodyType) {
    return;
  }
  const { hasBinaryContent } = getBodyDetail(dpgContext, bodyType, headers);

  return transformNormalBody(
    dpgContext,
    bodyType,
    parameters,
    importedModels,
    headers,
    hasBinaryContent
  );
}

function transformNormalBody(
  dpgContext: SdkContext,
  bodyType: Type,
  parameters: HttpOperationParameters,
  importedModels: Set<string>,
  headers: ParameterMetadata[],
  hasBinaryContent: boolean
) {
  const descriptions = extractDescriptionsFromBody(
    dpgContext,
    bodyType,
    parameters
  );
  if (hasBinaryContent) {
    descriptions.push("Value may contain any sequence of octets");
  }
  const type = extractNameFromTypeSpecType(
    dpgContext,
    bodyType,
    [SchemaContext.Input],
    importedModels,
    headers
  );
  let schema = getSchemaForType(dpgContext, bodyType);
  let overrideType = undefined;
  if (hasBinaryContent) {
    schema = enrichBinaryTypeInBody(schema);
    overrideType = schema.typeName;
  }
  return {
    isPartialBody: false,
    body: [
      {
        properties: schema.properties,
        typeName: schema.name,
        name: "body",
        type: overrideType ?? type,
        required: parameters?.bodyParameter?.optional === false,
        description: descriptions.join("\n\n"),
        oriSchema: schema
      }
    ]
  };
}

function getBodyDetail(
  dpgContext: SdkContext,
  bodyType: Type,
  headers: ParameterMetadata[]
) {
  const contentTypes: string[] = headers
    .filter((h) => h.name === "contentType")
    .map((h) => {
      return getTypeName(h.param, [SchemaContext.Input]);
    });
  const hasBinaryContent = contentTypes.some((c) =>
    isBinaryPayload(dpgContext, bodyType, c)
  );
  const hasFormContent = contentTypes.includes(`"multipart/form-data"`);
  return { hasBinaryContent, hasFormContent };
}

function extractNameFromTypeSpecType(
  dpgContext: SdkContext,
  type: Type,
  schemaUsage: SchemaContext[],
  importedModels: Set<string>,
  headers?: ParameterMetadata[]
) {
  const bodySchema = getSchemaForType(dpgContext, type, [
    SchemaContext.Input,
    SchemaContext.Exception
  ]) as Schema;
  const importedNames = getImportedModelName(bodySchema, schemaUsage) ?? [];
  importedNames.forEach(importedModels.add, importedModels);

  let typeName = getTypeName(bodySchema, schemaUsage);
  const contentTypes = headers
    ?.filter((h) => h.name === "contentType")
    .map((h) => h.param.type);
  const hasMergeAndPatchType =
    contentTypes &&
    contentTypes.length === 1 &&
    contentTypes[0]?.includes("application/merge-patch+json");
  if (hasMergeAndPatchType && (bodySchema as ObjectSchema).properties) {
    typeName = `${typeName}ResourceMergeAndPatch`;
  }
  return typeName;
}

function extractDescriptionsFromBody(
  dpgContext: SdkContext,
  bodyType: Type,
  parameters: HttpOperationParameters
) {
  const description =
    parameters.bodyParameter &&
    getFormattedPropertyDoc(
      dpgContext.program,
      parameters.bodyParameter,
      getSchemaForType(dpgContext, bodyType, [
        SchemaContext.Input,
        SchemaContext.Exception
      ])
    );
  return description ? [description] : [];
}
