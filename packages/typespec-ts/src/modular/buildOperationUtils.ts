import { toPascalCase } from "../utils/casingUtils.js";
import { importSettings } from "../utils/importUtils.js";
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
  modularSourcesDir: string
) {
  const specialUnions = model.types.filter(
    (t) =>
      (t.type === "combined" && isSpecialUnion(t)) ||
      (t.type === "list" &&
        t.elementType?.type === "combined" &&
        isSpecialUnion(t.elementType))
  );
  if (specialUnions.length === 0) {
    return;
  }
  const apiUtilsFile = project.createSourceFile(
    `${modularSourcesDir}/utils/deserializeUtil.ts`
  );
  const importSet = new Map<string, Set<string>>();

  specialUnions.forEach((su) => {
    let types = su.types;
    if (su.type === "list") {
      types = su.elementType?.types;
    }
    const unionDeserializeTypes = types?.filter((et) => {
      return isSpecialUnionVariant(et);
    });
    unionDeserializeTypes?.forEach((et) => {
      apiUtilsFile.addStatements(
        getTypePredictFunction(et, getTypeUnionName(su, true, importSet))
      );
      apiUtilsFile.addStatements(getTypeDeserializeFunction(et, importSet));
    });
    const deserializeFUnctionName = getDeserializeFunctionName(su, importSet);
    apiUtilsFile.addStatements(
      deserializeUnionTypesFunction(
        unionDeserializeTypes ?? [],
        deserializeFUnctionName,
        getTypeUnionName(su, true, importSet),
        getTypeUnionName(su, false, importSet)
      )
    );
  });
  importSettings(importSet, apiUtilsFile);
}

export function getDeserializeFunctionName(
  type: Type,
  importSet?: Map<string, Set<string>>
) {
  const typeUnionNames = getTypeUnionName(type, false, importSet);
  const deserializeFunctionName = `deserialize${toPascalCase(
    typeUnionNames
      ?.replace(/\[\]/g, "Array")
      .replace(/ /g, "")
      .replace(/\|/g, "And") ?? ""
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

function isSpecialUnion(t: Type) {
  return t.type === "combined" && t.types?.some(isSpecialUnionVariant);
}

function addImportSet(
  importSet: Map<string, Set<string>>,
  sourceFile: string,
  importName: string
) {
  const set = importSet.get(sourceFile);
  if (!set) {
    importSet.set(sourceFile, new Set<string>().add(importName));
  } else {
    set.add(importName);
  }
}

function getTypeUnionName(
  type: Type,
  fromRest: boolean,
  importSet?: Map<string, Set<string>>
) {
  const types = type.types;
  if (type.type === "list") {
    types === type.elementType?.types;
  }
  return types
    ?.map((t) => {
      if (t.type === "list" && t.elementType?.type === "model") {
        if (fromRest && t.elementType.name && importSet) {
          addImportSet(
            importSet,
            "../rest/index.js",
            t.elementType.name + "Output"
          );
        } else if (t.elementType.name && importSet) {
          addImportSet(importSet, "../models/models.js", t.elementType.name);
        }
        return t.elementType.name + (fromRest ? "Output" : "") + "[]";
      }
      if (fromRest && t.name && importSet) {
        addImportSet(importSet, "../rest/index.js", t.name + "Output");
      } else if (t.name && importSet) {
        addImportSet(importSet, "../models/models.js", t.name);
      }
      return t.name + (fromRest ? "Output" : "");
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
      }Output[]): ${type.elementType.name}[] {`
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
  typeUnionNamesOutput: string | undefined,
  typeUnionNames: string | undefined
) {
  const statements = [
    `export function ${deserializeFunctionName}(obj: ${typeUnionNamesOutput}): ${typeUnionNames} {`
  ];
  for (const type of unionDeserializeTypes) {
    const functionName = toPascalCase(
      type.name ??
        (type.elementType?.name ? type.elementType.name + "Array" : "")
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
      )}Array(obj: ${typeUnionNames}): obj is ${
        type.elementType.name
      }Output[] {`
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
              return `(obj as ${type.elementType?.name}Output[])[0].${p.restApiName} !== undefined`;
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
