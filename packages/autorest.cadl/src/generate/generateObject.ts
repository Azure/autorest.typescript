import { CadlObject, CadlObjectProperty } from "../interfaces";

export function generateObject(cadlObject: CadlObject) {
  const definitions: string[] = [];
  definitions.push(`@doc("${cadlObject.doc}")`);
  definitions.push(`model ${cadlObject.name} {`);

  for (const property of cadlObject.properties) {
    definitions.push(`@doc("${property.doc}")`);
    definitions.push(
      `  ${property.name}${getOptionalOperator(property)}: ${property.type};`
    );
  }
  definitions.push("}");

  return definitions.join("\n");
}

function getOptionalOperator(property: CadlObjectProperty) {
  return property.isOptional ? "?" : "";
}
