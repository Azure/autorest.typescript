import { toPascalCase } from "../utils/casingUtils.js";
import { importSettings } from "../utils/importUtils.js";
import { getResponseMapping } from "./helpers/operationHelpers.js";
import { ModularCodeModel, Type } from "./modularCodeModel.js";
import {
  FunctionDeclarationStructure,
  OptionalKind,
  Project,
  SourceFile
} from "ts-morph";

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
      getTypePredictFunction(
        apiUtilsFile,
        et,
        getTypeUnionName(su, true, importSet)
      );
      getTypeDeserializeFunction(apiUtilsFile, et, importSet);
    });
    const deserializeFUnctionName = getDeserializeFunctionName(su, importSet);
    deserializeUnionTypesFunction(
      apiUtilsFile,
      unionDeserializeTypes ?? [],
      deserializeFUnctionName,
      getTypeUnionName(su, true, importSet),
      getTypeUnionName(su, false, importSet)
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
  sourceFile: SourceFile,
  type: Type,
  importSet: Map<string, Set<string>>
) {
  const statements: string[] = [];

  if (type.type === "model" && type.name) {
    const functionStatement: OptionalKind<FunctionDeclarationStructure> = {
      docs: [`deserialize function for ${type.name}`],
      name: `deserialize${toPascalCase(type.name)}`,
      parameters: [{ name: "obj", type: type.name }],
      returnType: type.name
    };
    if (type.properties) {
      statements.push(
        `return {${getResponseMapping(type.properties, "obj", importSet)}};`
      );
    } else {
      statements.push(`return {};`);
    }
    functionStatement.statements = statements.join("\n");
    sourceFile.addFunction(functionStatement);
  } else if (
    type.type === "list" &&
    type.elementType?.type === "model" &&
    type.elementType.name
  ) {
    const functionStatement: OptionalKind<FunctionDeclarationStructure> = {
      docs: [`deserialize function for ${type.elementType.name} array`],
      name: `deserialize${toPascalCase(type.elementType.name)}Array`,
      parameters: [{ name: "obj", type: type.elementType.name + "Output[]" }],
      returnType: type.elementType.name + "[]"
    };
    statements.push(
      `return (obj || []).map(item => { return {${getResponseMapping(
        type.elementType.properties ?? [],
        "item",
        importSet
      )}}})`
    );
    functionStatement.statements = statements.join("\n");
    sourceFile.addFunction(functionStatement);
  } else if (type.type === "datetime") {
    const functionStatement: OptionalKind<FunctionDeclarationStructure> = {
      docs: [`deserialize function for ${type.name}`],
      name: `deserialize${toPascalCase(type.name ?? "datetime")}`,
      parameters: [{ name: "obj", type: type.name }],
      returnType: "Date"
    };
    statements.push(`return new Date(obj);`);
    functionStatement.statements = statements.join("\n");
    sourceFile.addFunction(functionStatement);
  } else if (type.type === "byte-array") {
    const functionStatement: OptionalKind<FunctionDeclarationStructure> = {
      docs: [`deserialize function for ${type.name}`],
      name: `deserialize${toPascalCase(type.name ?? "byte-array")}`,
      parameters: [{ name: "obj", type: type.name }],
      returnType: "Uint8Array"
    };
    statements.push(`return obj;`);
    functionStatement.statements = statements.join("\n");
    sourceFile.addFunction(functionStatement);
  }
}

function deserializeUnionTypesFunction(
  sourceFile: SourceFile,
  unionDeserializeTypes: Type[],
  deserializeFunctionName: string,
  typeUnionNamesOutput: string | undefined,
  typeUnionNames: string | undefined
) {
  const functionStatement: OptionalKind<FunctionDeclarationStructure> = {
    docs: [`deserialize function for ${typeUnionNamesOutput}`],
    name: deserializeFunctionName,
    parameters: [{ name: "obj", type: typeUnionNamesOutput }],
    returnType: typeUnionNames,
    isExported: true
  };
  const statements: string[] = [];
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
  functionStatement.statements = statements.join("\n");
  sourceFile.addFunction(functionStatement);
}

function getTypePredictFunction(
  sourceFile: SourceFile,
  type: Type,
  typeUnionNames: string | undefined
): void {
  if (typeUnionNames === undefined) {
    return;
  }

  const statements: string[] = [];
  if (type.type === "model" && type.name) {
    const functionStatement: OptionalKind<FunctionDeclarationStructure> = {
      docs: [`type predict function fpr ${type.name}`],
      name: `is${toPascalCase(typeUnionNames)}`,
      parameters: [{ name: "obj", type: typeUnionNames }],
      returnType: `obj is ${type.name}`
    };
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
    functionStatement.statements = statements.join("\n");
    sourceFile.addFunction(functionStatement);
  } else if (
    type.type === "list" &&
    type.elementType?.type === "model" &&
    type.elementType.name
  ) {
    const functionStatement: OptionalKind<FunctionDeclarationStructure> = {
      docs: [`type predict function fpr ${type.elementType.name}Output array`],
      name: `is${toPascalCase(type.elementType.name)}Array`,
      parameters: [{ name: "obj", type: typeUnionNames }],
      returnType: `obj is ${type.elementType.name}Output[]`
    };
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
      functionStatement.statements = statements;
    }
    sourceFile.addFunction(functionStatement);
  }
}
