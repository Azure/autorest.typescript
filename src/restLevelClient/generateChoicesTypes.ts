import { CodeModel } from "@autorest/codemodel";
import { StructureKind, TypeAliasDeclarationStructure } from "ts-morph";

export function buildChoicesTypeAliases(
  model: CodeModel
): TypeAliasDeclarationStructure[] {
  // Join choices and sealedChoices. In Rest Clients we'll be handling all as sealed choices
  // if users need to use a different value they can cast. Depending on user feedback we can
  // revisit how we model extensibleEnums (choice)
  const choiceSchemas = [
    ...(model.schemas.choices ?? []),
    ...(model.schemas.sealedChoices ?? [])
  ];

  const choiceAliases: TypeAliasDeclarationStructure[] = [];

  for (const choice of choiceSchemas) {
    choiceAliases.push({
      kind: StructureKind.TypeAlias,
      name: choice.language.default.name,
      isExported: true,
      type: choice.choices.map(choice => `"${choice.value}"`).join(" | ")
    });
  }

  return choiceAliases;
}
