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
  isApiVersion
} from "@azure-tools/typespec-client-generator-core";
import { NoTarget, Type, isVoidType } from "@typespec/compiler";
import {
  getBodyType,
  getCollectionFormat,
  getFormattedPropertyDoc,
  getImportedModelName,
  getSchemaForType,
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
import { getParameterSerializationInfo } from "../utils/parameterUtils.js";
import { reportDiagnostic } from "../lib.js";
import { listOperationsUnderRLCClient } from "../utils/clientUtils.js";

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
  for (const op of listOperationsUnderRLCClient(client)) {
    const route = getHttpOperationWithCache(dpgContext, op);
    // ignore overload base operation
    if (route.overloads && route.overloads?.length > 0) {
      continue;
    }
    transformToParameterTypesForRoute(route);
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
    // TODO: support cookie parameters, https://github.com/Azure/autorest.typescript/issues/2898
    transformCookieParameters(dpgContext, parameters);
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
    needRef: false
  }) as Schema;
  const name = getParameterName(parameter.name);
  let description =
    getFormattedPropertyDoc(program, parameter.param, schema) ?? "";
  const format = getCollectionFormat(dpgContext, parameter as any);
  if (isArrayType(schema) && format) {
    const serializeInfo = getSpecialSerializeInfo(
      dpgContext,
      parameter.type,
      format
    );
    if (serializeInfo.hasMultiCollection || serializeInfo.hasCsvCollection) {
      description += `${description ? "\n" : ""}This parameter could be formatted as ${serializeInfo.collectionInfo.join(
        ", "
      )} collection string, we provide ${serializeInfo.descriptions.join(
        ", "
      )} from serializeHelper.ts to help${
        serializeInfo.hasMultiCollection
          ? ", you will probably need to set skipUrlEncoding as true when sending the request"
          : ""
      }.`;
    }
    if (format === "tsv") {
      description += `${description ? "\n" : ""}This parameter could be formatted as tsv collection string.`;
    }
  }

  getImportedModelName(schema, schemaContext)?.forEach(
    importedModels.add,
    importedModels
  );
  const serializationType = getParameterSerializationInfo(
    dpgContext,
    parameter,
    schema,
    options.operationGroupName,
    options.operationName
  );
  return {
    type: paramType,
    name,
    param: {
      name,
      type: serializationType.typeName,
      typeName: serializationType.typeName,
      required: !parameter.param.optional,
      description,
      wrapperType: serializationType.wrapperType
    }
  };
}

function getParameterName(name: string) {
  if (name && name.toLowerCase() === "content-type") {
    return "contentType";
  }
  return `"${name}"`;
}

function transformCookieParameters(
  dpgContext: SdkContext,
  parameters: HttpOperationParameters
) {
  // TODO: support cookie parameters, https://github.com/Azure/autorest.typescript/issues/2898
  parameters.parameters
    .filter((p) => p.type === "cookie")
    .forEach((p) => {
      reportDiagnostic(dpgContext.program, {
        code: "parameter-type-not-supported",
        format: {
          paramName: p.name,
          paramType: p.type
        },
        target: NoTarget
      });
    });
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
        isApiVersion(dpgContext, p.param) &&
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
    parameters.body && inputBodyType ? inputBodyType : parameters.body?.type;
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
  const description = parameters.body?.property
    ? getFormattedPropertyDoc(
        dpgContext.program,
        parameters.body.property,
        bodySchema
      )
    : "";
  return description ? [description] : [];
}
