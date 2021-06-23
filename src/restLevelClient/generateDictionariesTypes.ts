import { CodeModel } from "@autorest/codemodel";
import { StructureKind, TypeAliasDeclarationStructure } from "ts-morph";
import { getElementType } from "./schemaHelpers";

/**
 * Builds the Typescript type alias declarations to model Dictionaries
 */
export function buildDictionariesTypeAlias(
  model: CodeModel
): TypeAliasDeclarationStructure[] {
  const existingDictionaries = new Set<string>();
  const dictionaries = model.schemas.dictionaries ?? [];
  const dictionaryAliases: TypeAliasDeclarationStructure[] = [];

  for (const dictionary of dictionaries) {
    // We are handling Dictionaries as parents in additional Properties
    let elementType = getElementType(dictionary.elementType);

    const type = `Record<string, ${elementType}>`;
    const typeAlias: TypeAliasDeclarationStructure = {
      kind: StructureKind.TypeAlias,
      name: dictionary.language.default.name,
      isExported: true,
      type
    };

    if (!existingDictionaries.has(JSON.stringify(typeAlias))) {
      dictionaryAliases.push(typeAlias);
      existingDictionaries.add(JSON.stringify(typeAlias));
    }
  }

  return dictionaryAliases;
}
