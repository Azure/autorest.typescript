// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ApiVersionInfo,
  Imports,
  ObjectSchema,
  OperationParameter,
  ParameterBodyMetadata,
  ParameterMetadata,
  Schema,
  SchemaContext
} from "@azure-tools/rlc-common";
import {
  HttpOperation,
  HttpOperationParameter,
  HttpOperationParameters
} from "@typespec/http";
import {
  KnownMediaType,
  extractMediaTypes,
  hasMediaType,
  isMediaTypeJsonMergePatch
} from "../utils/mediaTypes.js";
import {
  SdkClient,
  getHttpOperationWithCache,
  isApiVersion,
  listOperationGroups,
  listOperationsInOperationGroup
} from "@azure-tools/typespec-client-generator-core";
import { Type, isVoidType } from "@typespec/compiler";
import {
  getBodyType,
  getFormattedPropertyDoc,
  getImportedModelName,
  getSchemaForType,
  getSerializeTypeName,
  getTypeName,
  isArrayType,
  isBodyRequired
} from "../utils/modelUtils.js";
import {
  getOperationGroupName,
  getOperationName,
  getSpecialSerializeInfo
} from "../utils/operationUtil.js";
import { SdkContext } from "../utils/interfaces.js";
import { getParameterWrapperInfo } from "../utils/parameterUtils.js";

interface ParameterTransformationOptions {
  apiVersionInfo?: ApiVersionInfo;
  operationGroupName?: string;
  operationName?: string;
  importModels?: Set<string>;
}

export function transformToParameterTypes(
  client: SdkClient,
  dpgContext: SdkContext,
  importDetails: Imports,
  apiVersionInfo?: ApiVersionInfo
): OperationParameter[] {
  const rlcParameters: OperationParameter[] = [];
  const outputImportedSet = new Set<string>();
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const route = getHttpOperationWithCache(dpgContext, clientOp);
    // ignore overload base operation
    if (route.overloads && route.overloads?.length > 0) {
      continue;
    }
    transformToParameterTypesForRoute(route);
  }
  const operationGroups = listOperationGroups(dpgContext, client, true);
  for (const operationGroup of operationGroups) {
    const operations = listOperationsInOperationGroup(
      dpgContext,
      operationGroup
    );
    for (const op of operations) {
      const route = getHttpOperationWithCache(dpgContext, op);
      // ignore overload base operation
      if (route.overloads && route.overloads?.length > 0) {
        continue;
      }
      transformToParameterTypesForRoute(route);
    }
  }

  if (outputImportedSet.size > 0) {
    importDetails.parameter.importsSet = outputImportedSet;
  }
  function transformToParameterTypesForRoute(route: HttpOperation) {
    const parameters = route.parameters;
    const rlcParameter: OperationParameter = {
      operationGroup: getOperationGroupName(dpgContext, route),
      operationName: getOperationName(dpgContext, route.operation),
      parameters: []
    };
    const options = {
      apiVersionInfo,
      operationGroupName: rlcParameter.operationGroup,
      operationName: rlcParameter.operationName,
      importModels: outputImportedSet
    };
    // transform query param
    const queryParams = transformQueryParameters(
      dpgContext,
      parameters,
      options
    );
    // transform path param
    const pathParams = transformPathParameters(dpgContext, parameters, options);
    // transform header param including content-type
    const headerParams = transformHeaderParameters(
      dpgContext,
      parameters,
      options
    );
    // transform body
    const bodyType = getBodyType(route);
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
  options: ParameterTransformationOptions
): ParameterMetadata {
  const program = dpgContext.program;
  const importedModels = options.importModels ?? new Set<string>();
  const schemaContext = [SchemaContext.Exception, SchemaContext.Input];
  const schema = getSchemaForType(dpgContext, parameter.param.type, {
    usage: schemaContext,
    needRef: false,
    relevantProperty: parameter.param
  }) as Schema;
  let type = getTypeName(schema, schemaContext);
  const name = getParameterName(parameter.name);
  let description =
    getFormattedPropertyDoc(program, parameter.param, schema) ?? "";
  if (isArrayType(schema)) {
    const serializeInfo = getSpecialSerializeInfo(
      dpgContext,
      parameter.type,
      (parameter as any).format
    );
    if (serializeInfo.hasMultiCollection || serializeInfo.hasCsvCollection) {
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
    paramType === "header"
      ? getSerializeTypeName(dpgContext.program, schema, schemaContext)
      : type;
  getImportedModelName(schema, schemaContext)?.forEach(
    importedModels.add,
    importedModels
  );
  const [parameterBuilder, wrapperType] =
    getParameterWrapperInfo(
      dpgContext,
      parameter,
      schema,
      options.operationGroupName,
      options.operationName
    ) ?? [];
  if (wrapperType) {
    type = getTypeName(wrapperType, schemaContext);
    description = `${description} \n\nThis parameter type could be easily prepared with function ${parameterBuilder}.`;
  }
  const pathPosition = paramType === "path" ? "method" : undefined;
  return {
    type: paramType,
    name,
    param: {
      name,
      type,
      typeName: type,
      required: !parameter.param.optional,
      description,
      wrapperType,
      pathPosition
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
  options: ParameterTransformationOptions
): ParameterMetadata[] {
  const queryParameters = parameters.parameters.filter(
    (p) =>
      p.type === "query" &&
      !(
        isApiVersion(dpgContext, p) &&
        options.apiVersionInfo?.definedPosition === "query"
      )
  );
  if (!queryParameters.length) {
    return [];
  }
  return queryParameters.map((qp) =>
    getParameterMetadata(dpgContext, "query", qp, options)
  );
}

/**
 * Only support to take the global path parameter as path parameter
 * @returns
 */
function transformPathParameters(
  dpgContext: SdkContext,
  parameters: HttpOperationParameters,
  options: ParameterTransformationOptions
) {
  // build wrapper path parameters
  const pathParameters = parameters.parameters.filter((p) => p.type === "path");
  if (!pathParameters.length) {
    return [];
  }
  // only need to build path parameters for wrapper type
  const params = pathParameters
    .map((qp) => getParameterMetadata(dpgContext, "path", qp, options))
    .filter((p) => p.param.wrapperType);
  return params;
}

export function transformHeaderParameters(
  dpgContext: SdkContext,
  parameters: HttpOperationParameters,
  options: ParameterTransformationOptions
): ParameterMetadata[] {
  const headerParameters = parameters.parameters.filter(
    (p) => p.type === "header"
  );
  if (!headerParameters.length) {
    return [];
  }
  return headerParameters.map((qp) =>
    getParameterMetadata(dpgContext, "header", qp, options)
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
  if (!bodyType || isVoidType(bodyType)) {
    return;
  }
  return transformRequestBody(
    dpgContext,
    bodyType,
    parameters,
    importedModels,
    headers
  );
}

function transformRequestBody(
  dpgContext: SdkContext,
  bodyType: Type,
  parameters: HttpOperationParameters,
  importedModels: Set<string>,
  headers: ParameterMetadata[]
) {
  const contentTypes = extractMediaTypes(parameters.body?.contentTypes ?? []);
  const schema = getSchemaForType(dpgContext, bodyType, {
    mediaTypes: contentTypes,
    isRequestBody: true,
    usage: [SchemaContext.Input, SchemaContext.Exception]
  });

  const descriptions = getBodyDescriptions(dpgContext, schema, parameters);
  const type = getRequestBodyType(schema, importedModels, headers);

  return {
    isPartialBody: false,
    body: [
      {
        properties: schema.properties,
        typeName: schema.name,
        name: "body",
        type,
        required: isBodyRequired(parameters),
        description: descriptions.join("\n\n"),
        isMultipartBody:
          hasMediaType(KnownMediaType.MultipartFormData, contentTypes) &&
          contentTypes.length === 1,
        oriSchema: schema
      }
    ]
  };
}

function getRequestBodyType(
  bodySchema: Schema,
  importedModels: Set<string>,
  headers?: ParameterMetadata[]
) {
  const schemaUsage = [SchemaContext.Input, SchemaContext.Exception];
  const importedNames = getImportedModelName(bodySchema, schemaUsage) ?? [];
  importedNames.forEach(importedModels.add, importedModels);

  let typeName = getTypeName(bodySchema, schemaUsage);
  const contentTypes = headers
    ?.filter((h) => h.name === "contentType")
    .map((h) => h.param.type);
  const hasMergeAndPatchType = isMediaTypeJsonMergePatch(contentTypes ?? []);
  if (
    hasMergeAndPatchType &&
    Boolean(bodySchema.name) &&
    (bodySchema as ObjectSchema).properties
  ) {
    typeName = `${typeName}ResourceMergeAndPatch`;
  }
  return typeName;
}

function getBodyDescriptions(
  dpgContext: SdkContext,
  bodySchema: Schema,
  parameters: HttpOperationParameters
) {
  const description =
    parameters.bodyParameter &&
    getFormattedPropertyDoc(
      dpgContext.program,
      parameters.bodyParameter,
      bodySchema
    );
  return description ? [description] : [];
}
