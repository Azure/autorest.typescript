import { CadlObject, CadlObjectProperty } from "../interfaces";
import { generateDocs } from "../utils/docs";

export function generateObject(cadlObject: CadlObject) {
  const definitions: string[] = [];
  const doc = generateDocs(cadlObject);
  definitions.push(doc);
  cadlObject.discriminator &&
    definitions.push(`@discriminator("${cadlObject.discriminator}")`);
  definitions.push(`model ${cadlObject.name} {`);

  if (cadlObject.parents.length > 0) {
    for (const parent of cadlObject.parents) {
      definitions.push(`...${parent},`);
    }
  }

  for (const property of cadlObject.properties) {
    const propertyDoc = generateDocs(property);
    propertyDoc && definitions.push(propertyDoc);
    definitions.push(
      `  "${property.name}"${getOptionalOperator(property)}: ${property.type};`
    );
  }
  definitions.push("}");

  return definitions.join("\n");
}

function getOptionalOperator(property: CadlObjectProperty) {
  return property.isOptional ? "?" : "";
}
