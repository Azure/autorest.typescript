import { Parameter, Property, SchemaContext } from "@autorest/codemodel";
import { PropertySignatureStructure, StructureKind } from "ts-morph";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { getElementType, getFormatDocs } from "./schemaHelpers";

/**
 * Builds a Typescript property or parameter signature
 * @param property - Property or parameter to get the Typescript signature for
 * @param importedModels - Set to track the models that need to be imported
 * @returns a PropertySignatureStructure for the property.
 */
export function getPropertySignature(
  property: Property | Parameter,
  schemaUsage: SchemaContext[],
  importedModels = new Set<string>()
): PropertySignatureStructure {
  const propertyLangMetadata = getLanguageMetadata(property.language);
  const propertyName = `"${propertyLangMetadata.serializedName ??
    (property as Property).serializedName}"`;

  if (!propertyName) {
    throw new Error(
      `Couldn't find name for property ${JSON.stringify(propertyLangMetadata)}`
    );
  }

  const description = getDocs(property);
  const type = getElementType(property.schema, schemaUsage, importedModels);
  return {
    name: propertyName,
    ...(description && { docs: [{ description }] }),
    hasQuestionToken: !property.required,
    type,
    kind: StructureKind.PropertySignature
  };
}

export function getDocs(property: Property | Parameter) {
  const { description } = getLanguageMetadata(property.language);
  const docs: string[] = [];

  if (description) {
    docs.push(description);
  }

  const formatDocs = getFormatDocs(property.schema);

  if (formatDocs) {
    docs.push(formatDocs);
  }

  return docs.join("\n\n");
}
