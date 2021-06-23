import { Parameter, Property } from "@autorest/codemodel";
import { PropertySignatureStructure, StructureKind } from "ts-morph";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { getElementType } from "./schemaHelpers";

/**
 * Builds a Typescript property or parameter signature
 * @param property - Property or parameter to get the Typescript signature for
 * @param importedModels - Set to track the models that need to be imported
 * @returns a PropertySignatureStructure for the property.
 */
export function getPropertySignature(
  property: Property | Parameter,
  importedModels = new Set<string>()
): PropertySignatureStructure {
  const propertyLangMetadata = getLanguageMetadata(property.language);
  const propertyName = `"${propertyLangMetadata.serializedName ||
    propertyLangMetadata.name}"`;
  const description = propertyLangMetadata.description;
  const type = getElementType(property.schema, importedModels);
  return {
    name: propertyName,
    ...(description && { docs: [{ description }] }),
    hasQuestionToken: !property.required,
    type,
    kind: StructureKind.PropertySignature
  };
}
