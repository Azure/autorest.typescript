import { toPascalCase } from "../utils/casingUtils.js";
import { getResponseMapping } from "./helpers/operationHelpers.js";
import { ModularCodeModel, Type } from "./modularCodeModel.js";
import { Project } from "ts-morph";

/**
 * This function creates a file under /api for each operation group.
 * If there is no operation group in the TypeSpec program, we create a single
 * file called operations.ts where all operations are generated.
 */
export function buildOperationUtils(
  model: ModularCodeModel,
  project: Project,
  srcPath: string = "src",
  subfolder: string = ""
) {
  const apiUtilsFile = project.createSourceFile(
    `${srcPath}/src/${
      subfolder && subfolder !== "" ? subfolder + "/" : ""
    }api/utils.ts`
  );
  const importSet = new Map<string, Set<string>>();
  const specialUnions = model.types.filter(
    (t) => t.type === "combined" && isSpecialUnionVariant(t)
  );
  specialUnions.forEach((su) => {
    su.elementType?.types?.forEach((et) => {
      apiUtilsFile.addStatements(
        getTypePredictFunction(et, getTypeUnionName(et))
      );
      apiUtilsFile.addStatements(getTypeDeserializeFunction(et, importSet));
    });
    const deserializeFUnctionName = getDeserializeFunctionName(su);
    apiUtilsFile.addStatements(
      deserializeUnionTypesFunction(
        specialUnions,
        deserializeFUnctionName,
        getTypeUnionName(su)
      )
    );
  });
}

export function getDeserializeFunctionName(type: Type) {
  const typeUnionNames = getTypeUnionName(type);
  const deserializeFunctionName = `deserialize${toPascalCase(
    typeUnionNames?.replace(/\[\]| /g, "").replace(/\|/g, "And") ?? ""
  )}Union`;
  return deserializeFunctionName;
}

function isSpecialUnionVariant(t: Type) {
  return (
    t.type === "datetime" ||
    t.type === "byte-array" ||
    (t.type === "model" &&
      t.properties?.some((p) => p.clientName !== p.restApiName)) ||
    (t.type === "list" &&
      t.elementType?.type === "model" &&
      t.elementType?.properties?.some((p) => p.clientName !== p.restApiName))
  );
}

function getTypeUnionName(type: Type) {
  return type.types
    ?.map((t) => {
      if (t.type === "list" && t.elementType?.type === "model") {
        return t.elementType.name + "[]";
      }
      return t.name;
    })
    .join(" | ");
}

function getTypeDeserializeFunction(
  type: Type,
  importSet: Map<string, Set<string>>
) {
  const statements: string[] = [];
  if (type.type === "model" && type.name) {
    statements.push(
      `function deserialize${toPascalCase(type.name)}(obj: ${type.name}): ${
        type.name
      } {`
    );
    if (type.properties) {
      statements.push(
        `return {${getResponseMapping(type.properties, "obj", importSet)}};`
      );
    } else {
      statements.push(`return {};`);
    }
    statements.push(`}`);
  } else if (
    type.type === "list" &&
    type.elementType?.type === "model" &&
    type.elementType.name
  ) {
    statements.push(
      `function deserialize${toPascalCase(type.elementType.name)}Array(obj: ${
        type.elementType.name
      }[]): ${type.elementType.name}[] {`
    );
    statements.push(
      `return (obj || []).map(item => { return {${getResponseMapping(
        type.elementType.properties ?? [],
        "item",
        importSet
      )}}})`
    );
    statements.push(`}`);
  } else if (type.type === "datetime") {
    statements.push(
      `function deserialize${toPascalCase(type.name ?? "datetime")}(obj: ${
        type.name
      }): Date {`
    );
    statements.push(`return new Date(obj);`);
    statements.push(`}`);
  } else if (type.type === "byte-array") {
    statements.push(
      `function deserialize${toPascalCase(type.name ?? "byte-array")}(obj: ${
        type.name
      }): Uint8Array {`
    );
    statements.push(`return obj;`);
    statements.push(`}`);
  }
  return statements.join("\n");
}

function deserializeUnionTypesFunction(
  unionDeserializeTypes: Type[],
  deserializeFunctionName: string,
  typeUnionNames: string | undefined
) {
  const statements = [
    `function ${deserializeFunctionName}(obj: ${typeUnionNames}): ${typeUnionNames} {`
  ];
  for (const type of unionDeserializeTypes) {
    const functionName = toPascalCase(
      type.name ?? type.elementType?.name ?? ""
    );
    statements.push(
      `if (is${functionName}(obj)) { return deserialize${functionName}(obj); }`
    );
  }
  statements.push("return obj;");
  statements.push("}");
  return statements.join("\n");
}

function getTypePredictFunction(
  type: Type,
  typeUnionNames: string | undefined
): string {
  if (typeUnionNames === undefined) {
    return "";
  }
  const statements: string[] = [];
  if (type.type === "model" && type.name) {
    statements.push(
      `function is${toPascalCase(type.name)}(obj: ${typeUnionNames}): obj is ${
        type.name
      } {`
    );
    if (type.properties) {
      statements.push(
        `return ${type.properties
          .map((p) => {
            return `(obj as ${type.name}).${p.restApiName} !== undefined`;
          })
          .join(" && ")};`
      );
    } else {
      statements.push(`return true;`);
    }
    statements.push(`}`);
  } else if (
    type.type === "list" &&
    type.elementType?.type === "model" &&
    type.elementType.name
  ) {
    statements.push(
      `function is${toPascalCase(
        type.elementType.name
      )}(obj: ${typeUnionNames}): obj is ${type.elementType.name}[] {`
    );
    if (type.elementType?.type === "model") {
      if (
        type.elementType.properties &&
        type.elementType.properties.length > 0
      ) {
        statements.push("if (obj.length > 0) {");
        statements.push(
          `return (${type.elementType.properties
            ?.map((p) => {
              return `(obj as ${type.elementType?.name})[0].${p.restApiName} !== undefined`;
            })
            .join(" && ")});`
        );
        statements.push("}");
        statements.push("return false;");
      } else {
        statements.push(`return true;`);
      }
      statements.push(`}`);
    }
  }
  return statements.join("\n");
}
