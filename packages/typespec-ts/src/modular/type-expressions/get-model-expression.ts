import {
  EmitTypeOptions,
  getTypeExpression,
  normalizeModelPropertyName
} from "./get-type-expression.js";

import { SdkModelType } from "@azure-tools/typespec-client-generator-core";
import { refkey } from "../../framework/refkey.js";
import { resolveReference } from "../../framework/reference.js";
import { shouldEmitInline } from "./utils.js";
import { useContext } from "../../contextManager.js";
import { SdkContext } from "../../utils/interfaces.js";

/**
 * Detects if a model represents an HttpPart wrapper that should be unwrapped for response contexts
 */
function isHttpPartModel(model: SdkModelType): boolean {
  // HttpPart models typically have names like "HttpPart", "HttpPart1", etc.
  // and are empty models (no properties) generated for multipart response bodies
  return model.name.match(/^HttpPart\d*$/) !== null && model.properties.length === 0;
}

/**
 * Gets the unwrapped type for HttpPart models based on naming patterns and context
 */
function getHttpPartInnerType(model: SdkModelType): string {
  if (model.name === "HttpPart") {
    // First HttpPart typically represents string content
    return "string";
  } else if (model.name.match(/^HttpPart\d+$/)) {
    // Subsequent HttpParts typically represent byte arrays for file content
    return "Uint8Array";
  }
  return "any"; // Fallback
}

export interface ModelExpressionOptions extends EmitTypeOptions {
  skipPolymorphicUnion?: boolean;
}

export function getModelExpression(
  context: SdkContext,
  type: SdkModelType,
  options: ModelExpressionOptions = {}
): string {
  // Handle HttpPart models by unwrapping to their inner types
  if (isHttpPartModel(type)) {
    return getHttpPartInnerType(type);
  }

  const externalModel = getExternalModel(type);
  if (externalModel) {
    return resolveReference(externalModel);
  }

  if (shouldEmitInline(type, options)) {
    // generate Record<string, any> for empty anonymous object
    if (type.properties.length === 0) {
      return "Record<string, any>";
    }
    return `{
      ${type.properties
        .map(
          (p) =>
            `${normalizeModelPropertyName(context, p)}${p.optional ? "?" : ""}: ${getTypeExpression(context, p.type)}`
        )
        .join(",\n")}
    }`;
  } else {
    if (!options.skipPolymorphicUnion && type.discriminatedSubtypes) {
      return resolveReference(refkey(type, "polymorphicType"));
    } else {
      return resolveReference(type);
    }
  }
}

const externalModels: Record<string, string> = {
  "Azure.Core.Foundations.Error": "ErrorModel"
};

export function getExternalModel(type: SdkModelType) {
  const commonName = externalModels[type.crossLanguageDefinitionId];

  if (!commonName) {
    return undefined;
  }

  const externalDependencies = useContext("dependencies");
  return externalDependencies[commonName];
}
