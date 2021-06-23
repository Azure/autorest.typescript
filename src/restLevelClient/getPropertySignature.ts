import { Parameter, Property } from "@autorest/codemodel";
import { PropertySignatureStructure, StructureKind } from "ts-morph";
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
  const propertyName = `"${property.language.default.serializedName ||
    property.language.default.name}"`;
  const description = property.language.default.description;
  const type = getElementType(property.schema, importedModels);
  return {
    name: propertyName,
    ...(description && { docs: [{ description }] }),
    hasQuestionToken: !property.required,
    type,
    kind: StructureKind.PropertySignature
  };
}
