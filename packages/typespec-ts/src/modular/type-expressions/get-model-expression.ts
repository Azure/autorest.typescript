import {
  EmitTypeOptions,
  getTypeExpression,
  normalizeModelPropertyName
} from "./get-type-expression.js";

import {
  SdkModelPropertyType,
  SdkModelType,
  SdkServiceResponseHeader
} from "@azure-tools/typespec-client-generator-core";
import { refkey } from "../../framework/refkey.js";
import { resolveReference } from "../../framework/reference.js";
import { shouldEmitInline } from "./utils.js";
import { useContext } from "../../contextManager.js";
import { SdkContext } from "../../utils/interfaces.js";
import { MultipartHelpers } from "../static-helpers-metadata.js";

export interface ModelExpressionOptions extends EmitTypeOptions {
  skipPolymorphicUnion?: boolean;
}

export function getModelExpression(
  context: SdkContext,
  type: SdkModelType,
  options: ModelExpressionOptions = {}
): string {
  const externalModel = getExternalModel(type);
  if (externalModel) {
    return resolveReference(externalModel);
  }

  if (shouldEmitInline(type, options)) {
    return emitInlineModel(context, type.properties);
  } else {
    if (!options.skipPolymorphicUnion && type.discriminatedSubtypes) {
      return resolveReference(refkey(type, "polymorphicType"));
    } else {
      return resolveReference(type);
    }
  }
}

const externalModels: Record<string, string> = {
  "Azure.Core.Foundations.Error": "ErrorModel",
  "Azure.Core.Foundations.ErrorResponse": "AzureCoreErrorResponse"
};

export function emitInlineModel(
  context: SdkContext,
  properties: (SdkModelPropertyType | SdkServiceResponseHeader)[]
): string {
  // generate Record<string, any> for empty anonymous object
  if (properties.length === 0) {
    return "Record<string, any>";
  }
  return `{
      ${properties
        .map(
          (p) =>
            `${normalizeModelPropertyName(context, p)}${p.optional ? "?" : ""}: ${getPropertyTypeExpression(context, p)}`
        )
        .join(",\n")}
    }`;
}

function getPropertyTypeExpression(
  context: SdkContext,
  property: SdkModelPropertyType | SdkServiceResponseHeader
): string {
  if (
    property.kind === "property" &&
    property.serializationOptions.multipart?.isFilePart
  ) {
    return getMultipartFileTypeExpression(context, property);
  }
  return getTypeExpression(context, property.type);
}

export function getMultipartFileTypeExpression(
  context: SdkContext,
  property: SdkModelPropertyType
): string {
  const multipartOptions = property.serializationOptions.multipart;

  const isContentTypeOptional =
    multipartOptions?.contentType === undefined ||
    multipartOptions.contentType.optional ||
    multipartOptions.defaultContentTypes.length > 0;
  const isFilenameOptional =
    multipartOptions?.filename === undefined ||
    multipartOptions.filename.optional;

  const contentTypeType = multipartOptions?.contentType
    ? getTypeExpression(context, multipartOptions.contentType.type)
    : "string";
  const filenameType = multipartOptions?.filename
    ? getTypeExpression(context, multipartOptions.filename.type)
    : "string";

  let typeExpression = "{";
  typeExpression += `contents: ${resolveReference(MultipartHelpers.FileContents)};`;
  typeExpression += `contentType${isContentTypeOptional ? "?" : ""}: ${contentTypeType};`;
  typeExpression += `filename${isFilenameOptional ? "?" : ""}: ${filenameType};`;
  typeExpression += "}";

  if (isContentTypeOptional && isFilenameOptional) {
    typeExpression = `(${resolveReference(MultipartHelpers.FileContents)}) | ${typeExpression}`;
  } else {
    typeExpression = `File | ${typeExpression}`;
  }

  if (property.type.kind === "array") {
    typeExpression = `Array<${typeExpression}>`;
  }

  return typeExpression;
}

export function getExternalModel(type: SdkModelType) {
  const commonName = externalModels[type.crossLanguageDefinitionId];

  if (!commonName) {
    return undefined;
  }

  const externalDependencies = useContext("dependencies");
  return externalDependencies[commonName];
}
