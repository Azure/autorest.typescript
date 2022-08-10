import { CadlEnum } from "../interfaces";

export function generateEnums(cadlEnum: CadlEnum) {
  const definitions: string[] = [];
  const enumDefinition = `
    enum ${cadlEnum.name} {
        ${cadlEnum.members.join(", ")}
    }`;

  definitions.push(enumDefinition);

  if (cadlEnum.isExtensible) {
    const knownValues = `
    @knownValues(${cadlEnum.name}KnownValues)
    model ${cadlEnum.name} is string {}`;

    definitions.push(knownValues);
  }

  return definitions;
}
