import { CadlObject, CadlObjectProperty } from "../interfaces";
import { generateDecorators } from "../utils/decorators";
import { generateDocs } from "../utils/docs";

export function generateObject(cadlObject: CadlObject) {
  const definitions: string[] = [];
  const doc = generateDocs(cadlObject);
  definitions.push(doc);
  const decorators = generateDecorators(cadlObject.decorators);
  decorators && definitions.push(decorators);

  if (cadlObject.parents.length > 0) {
    const parent = cadlObject.parents[0];
    cadlObject.parents.length > 1 &&
      definitions.push(
        `// FIXME: (multiple-inheritance) Multiple inheritance is not supported in CADL, so this type will only inherit from one parent.
       // please review the generated model to write a valid object hierarchy.`
      );
    definitions.push(`model ${cadlObject.name} extends ${parent} {`);
  } else {
    definitions.push(`model ${cadlObject.name} {`);
  }

  for (const property of cadlObject.properties) {
    const propertyDoc = generateDocs(property);
    propertyDoc && definitions.push(propertyDoc);
    const decorators = generateDecorators(property.decorators);
    decorators && definitions.push(decorators);

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
