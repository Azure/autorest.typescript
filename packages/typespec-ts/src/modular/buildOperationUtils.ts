import { toPascalCase } from "../utils/casingUtils.js";
import { importSettings } from "../utils/importUtils.js";
import { getResponseMapping } from "./helpers/operationHelpers.js";
import { ModularCodeModel, Property, Type } from "./modularCodeModel.js";
import {
  FunctionDeclarationStructure,
  SourceFile,
  StructureKind
} from "ts-morph";
import { Imports as RuntimeImports } from "@azure-tools/rlc-common";
import { UsageFlags } from "@typespec/compiler";

/**
 * This function creates a file under /api for each operation group.
 * If there is no operation group in the TypeSpec program, we create a single
 * file called operations.ts where all operations are generated.
 */
export function buildOperationUtils(model: ModularCodeModel) {
  const serializeUtilFiles = [];
  for (const serializeType of ["serialize", "deserialize"]) {
    const usageCondition =
      serializeType === "serialize" ? UsageFlags.Input : UsageFlags.Output;
    const specialUnions = model.types.filter(
      (t) => isSpecialUnion(t) && (t.usage ?? 0) & usageCondition
    );
    if (specialUnions.length === 0) {
      continue;
    }
    const utilsFile = model.project.createSourceFile(
      `${model.modularOptions.sourceRoot}/utils/${serializeType}Util.ts`
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
          utilsFile,
          et,
          getTypeUnionName(su, true, importSet)
        );
        getTypeDeserializeFunction(
          utilsFile,
          et,
          serializeType,
          importSet,
          model.runtimeImports
        );
      });
      const deserializeFUnctionName = getDeserializeFunctionName(
        su,
        serializeType,
        importSet
      );
      deserializeUnionTypesFunction(
        utilsFile,
        unionDeserializeTypes ?? [],
        deserializeFUnctionName,
        serializeType,
        getTypeUnionName(su, true, importSet),
        getTypeUnionName(su, false, importSet)
      );
    });
    importSettings(importSet, utilsFile);
    serializeUtilFiles.push(utilsFile);
  }
  return serializeUtilFiles;
}

export function getDeserializeFunctionName(
  type: Type,
  serializeType: string,
  importSet?: Map<string, Set<string>>
) {
  const typeUnionNames = getTypeUnionName(type, false, importSet);
  const deserializeFunctionName = `${serializeType}${toPascalCase(
    formalizeTypeUnionName(typeUnionNames ?? "")
  )}Union`;
  return deserializeFunctionName;
}

function formalizeTypeUnionName(typeUnionName: string) {
  return typeUnionName
    .replace(/\[\]/g, "Array")
    .replace(/ /g, "")
    .replace(/\|/g, "And");
}

export function isSpecialUnionVariant(t: Type): boolean {
  if (
    t.type === "datetime" ||
    t.type === "byte-array" ||
    (t.type === "model" &&
      t.properties?.some(
        (p) => p.clientName !== p.restApiName || isSpecialUnionVariant(p.type)
      )) ||
    (t.type === "list" && t.elementType && isSpecialUnionVariant(t.elementType))
  ) {
    return true;
  }
  return false;
}

function isSpecialUnion(t: Type): boolean {
  return (
    t.type === "combined" && (t.types?.some(isSpecialUnionVariant) ?? false)
  );
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
      return t.name
        ? t.name + (fromRest ? "Output" : "")
        : getMappedType(t.type, fromRest);
    })
    .join(" | ");
}

function getMappedType(modularType: string, fromRest?: boolean) {
  switch (modularType) {
    case "datetime":
      return fromRest ? "string" : "Date";
    case "byte-array":
      return fromRest ? "string" : "Uint8Array";
    default:
      return modularType;
  }
}

function getTypeDeserializeFunction(
  sourceFile: SourceFile,
  type: Type,
  serializeType: string,
  importSet: Map<string, Set<string>>,
  runtimeImports: RuntimeImports
) {
  const statements: string[] = [];

  if (type.type === "model" && type.name) {
    const functionStatement: FunctionDeclarationStructure = {
      kind: StructureKind.Function,
      docs: [`${serializeType} function for ${type.name}`],
      name: `${serializeType}${toPascalCase(type.name)}`,
      parameters: [{ name: "obj", type: `${type.name}Output` }],
      returnType: type.name
    };
    if (type.properties) {
      statements.push(
        `return {${getResponseMapping(
          type.properties,
          "obj",
          importSet,
          runtimeImports
        )}};`
      );
    } else {
      statements.push(`return {};`);
    }
    functionStatement.statements = statements.join("\n");
    if (!hasDuplicateFunction(sourceFile, functionStatement)) {
      if (
        sourceFile
          .getFunctions()
          .some((f) => f.getName() === functionStatement.name)
      ) {
        addOverload(sourceFile, type.name + "Output", functionStatement);
      } else {
        sourceFile.addFunction(functionStatement);
      }
    }
  } else if (
    type.type === "list" &&
    type.elementType?.type === "model" &&
    type.elementType.name
  ) {
    const functionStatement: FunctionDeclarationStructure = {
      kind: StructureKind.Function,
      docs: [`${serializeType} function for ${type.elementType.name} array`],
      name: `${serializeType}${toPascalCase(type.elementType.name)}Array`,
      parameters: [{ name: "obj", type: type.elementType.name + "Output[]" }],
      returnType: type.elementType.name + "[]"
    };
    statements.push(
      `return (obj || []).map(item => { return {${getResponseMapping(
        type.elementType.properties ?? [],
        "item",
        importSet,
        runtimeImports
      )}}})`
    );
    functionStatement.statements = statements.join("\n");
    if (!hasDuplicateFunction(sourceFile, functionStatement)) {
      if (
        sourceFile
          .getFunctions()
          .some((f) => f.getName() === functionStatement.name)
      ) {
        addOverload(
          sourceFile,
          type.elementType.name ?? "Output[]",
          functionStatement
        );
      } else {
        sourceFile.addFunction(functionStatement);
      }
    }
  } else if (type.type === "datetime") {
    const functionStatement: FunctionDeclarationStructure = {
      kind: StructureKind.Function,
      docs: [`${serializeType} function for ${type.type}`],
      name: `${serializeType}${toPascalCase("datetime")}`,
      parameters: [{ name: "obj", type: "string" }],
      returnType: "Date"
    };
    statements.push(`return new Date(obj);`);
    functionStatement.statements = statements.join("\n");
    if (!hasDuplicateFunction(sourceFile, functionStatement)) {
      if (
        sourceFile
          .getFunctions()
          .some((f) => f.getName() === functionStatement.name)
      ) {
        addOverload(sourceFile, type.name ?? "", functionStatement);
      } else {
        sourceFile.addFunction(functionStatement);
      }
    }
  } else if (type.type === "byte-array") {
    const functionStatement: FunctionDeclarationStructure = {
      kind: StructureKind.Function,
      docs: [`${serializeType} function for ${type.type}`],
      name: `${serializeType}${toPascalCase(type.name ?? "byte-array")}`,
      parameters: [{ name: "obj", type: "string" }],
      returnType: "Uint8Array"
    };
    statements.push(`return stringToUint8Array(obj);`);
    addImportSet(importSet, "@azure-rest/core-util", "stringToUint8Array");
    functionStatement.statements = statements.join("\n");
    if (!hasDuplicateFunction(sourceFile, functionStatement)) {
      if (
        sourceFile
          .getFunctions()
          .some((f) => f.getName() === functionStatement.name)
      ) {
        addOverload(sourceFile, type.name ?? "", functionStatement);
      } else {
        sourceFile.addFunction(functionStatement);
      }
    }
  }
}

function addOverload(
  sourceFile: SourceFile,
  typeName: string,
  functionStatement: FunctionDeclarationStructure
) {
  const existFunction = sourceFile.getFunction(functionStatement.name ?? "");
  if (existFunction && existFunction.getOverloads().length === 0) {
    existFunction.addOverload({
      kind: StructureKind.FunctionOverload,
      parameters: existFunction.getParameters().map((p) => {
        return {
          name: p.getName(),
          type: p.getTypeNode()?.getText()
        };
      }),
      returnType: existFunction.getReturnTypeNode()?.getText(),
      docs: existFunction.getJsDocs().map((d) => {
        return { description: d.getInnerText() };
      })
    });
  }
  existFunction?.addOverload({
    kind: StructureKind.FunctionOverload,
    parameters: [
      {
        name: "obj",
        type: typeName
      }
    ],
    docs: functionStatement.docs,
    returnType: functionStatement.returnType
  });
  const implementationParameter = sourceFile
    .getFunction(functionStatement.name ?? "")
    ?.getParameters();
  if (implementationParameter && implementationParameter.length > 0) {
    const oldTypes = implementationParameter[0]
      ?.getTypeNode()
      ?.getText()
      .split(" | ");
    const newTypes = typeName.split(" | ").concat(oldTypes ?? []);
    const newTypeSet = new Set(newTypes);
    implementationParameter[0]?.setType(Array.from(newTypeSet).join(" | "));
  }
}

function hasDuplicateFunction(
  sourceFile: SourceFile,
  functionStatement: FunctionDeclarationStructure
) {
  return sourceFile.getFunctions().some((f) => {
    const paramTypes = f.getParameters().map((param) => {
      return param.getName() + param.getType().getText();
    });
    const funcParamTypes = functionStatement.parameters?.map((param) => {
      return param.name + param.type;
    });
    return (
      f.getName() === functionStatement.name &&
      paramTypes.join().includes(funcParamTypes?.join() ?? "")
    );
  });
}

function deserializeUnionTypesFunction(
  sourceFile: SourceFile,
  unionDeserializeTypes: Type[],
  deserializeFunctionName: string,
  serializeType: string,
  typeUnionNamesOutput: string | undefined,
  typeUnionNames: string | undefined
) {
  const functionStatement: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    docs: [`${serializeType} function for ${typeUnionNamesOutput}`],
    name: deserializeFunctionName,
    parameters: [{ name: "obj", type: typeUnionNamesOutput }],
    returnType: typeUnionNames,
    isExported: true
  };
  const statements: string[] = [];
  for (const type of unionDeserializeTypes) {
    const functionName = toPascalCase(
      type.name ??
        (type.elementType?.name ? type.elementType.name + "Array" : type.type)
    );
    statements.push(
      `if (is${functionName}(obj)) { return ${serializeType}${functionName}(obj); }`
    );
  }
  statements.push("return obj;");
  functionStatement.statements = statements.join("\n");
  if (!hasDuplicateFunction(sourceFile, functionStatement)) {
    sourceFile.addFunction(functionStatement);
  }
}

function getTypePredictFunctionForBasicType(
  sourceFile: SourceFile,
  type: Type,
  typeUnionNames: string | undefined
) {
  if (typeUnionNames === undefined) {
    return;
  }
  const statements: string[] = [];
  const functionStatement: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    docs: [`type predict function for ${type.type} from ${typeUnionNames}`],
    name: `is${toPascalCase(formalizeTypeUnionName(type.type))}`,
    parameters: [{ name: "obj", type: typeUnionNames }],
    returnType: `obj is ${getMappedType(type.type, true)}`
  };
  statements.push(`if (typeof obj === "string") { return true;}`);
  statements.push("return false;");
  functionStatement.statements = statements.join("\n");
  if (!hasDuplicateFunction(sourceFile, functionStatement)) {
    if (
      sourceFile
        .getFunctions()
        .some((f) => f.getName() === functionStatement.name)
    ) {
      addOverload(sourceFile, typeUnionNames, functionStatement);
    } else {
      sourceFile.addFunction(functionStatement);
    }
  }
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
  if (type.type === "datetime" || type.type === "byte-array") {
    getTypePredictFunctionForBasicType(sourceFile, type, typeUnionNames);
  } else if (type.type === "model" && type.name) {
    const functionStatement: FunctionDeclarationStructure = {
      kind: StructureKind.Function,
      docs: [`type predict function for ${type.name} from ${typeUnionNames}`],
      name: `is${toPascalCase(formalizeTypeUnionName(type.name))}`,
      parameters: [{ name: "obj", type: typeUnionNames }],
      returnType: `obj is ${type.name}Output`
    };
    const typeProperties = getAllProperties(type);
    if (typeProperties.length > 0) {
      statements.push(
        `return ${buildTypePredictCondition(
          type,
          `(obj as ${type.name}Output)`
        )};`
      );
    } else {
      statements.push(`return true;`);
    }
    functionStatement.statements = statements.join("\n");
    if (!hasDuplicateFunction(sourceFile, functionStatement)) {
      if (
        sourceFile
          .getFunctions()
          .some((f) => f.getName() === functionStatement.name)
      ) {
        addOverload(sourceFile, typeUnionNames, functionStatement);
      } else {
        sourceFile.addFunction(functionStatement);
      }
    }
  } else if (
    type.type === "list" &&
    type.elementType?.type === "model" &&
    type.elementType.name
  ) {
    const functionStatement: FunctionDeclarationStructure = {
      kind: StructureKind.Function,
      docs: [
        `type predict function for ${type.elementType.name}Output array from ${typeUnionNames}`
      ],
      name: `is${toPascalCase(
        formalizeTypeUnionName(type.elementType.name + "Array")
      )}`,
      parameters: [{ name: "obj", type: typeUnionNames }],
      returnType: `obj is ${type.elementType.name}Output[]`
    };
    if (type.elementType?.type === "model") {
      const properties = getAllProperties(type.elementType);
      if (properties && properties.length > 0) {
        statements.push("if (Array.isArray(obj) && obj.length > 0) {");
        statements.push(
          `return ${buildTypePredictCondition(
            type.elementType,
            `(obj as ${type.elementType?.name}Output[])[0]`
          )};`
        );
        statements.push("}");
        statements.push("return false;");
      } else {
        statements.push(`return true;`);
      }
      functionStatement.statements = statements;
    }
    if (!hasDuplicateFunction(sourceFile, functionStatement)) {
      if (
        sourceFile
          .getFunctions()
          .some((f) => f.getName() === functionStatement.name)
      ) {
        addOverload(sourceFile, typeUnionNames, functionStatement);
      } else {
        sourceFile.addFunction(functionStatement);
      }
    }
  }
}

function getAllProperties(type: Type): Property[] {
  const properties = [];
  type.parents?.forEach((p) => {
    properties.push(...(p.properties ?? []));
  });
  properties.push(...(type.properties ?? []));
  return properties;
}

function buildTypePredictCondition(type: Type, prefix: string): string {
  const typeProperties = getAllProperties(type);
  return typeProperties
    .filter((p) => !p.optional)
    .map((p) => {
      const condition: string[] = [];
      if (p.type.type === "model") {
        const properties = [];
        p.type.parents?.forEach((pp) => {
          properties.push(...(pp.properties ?? []));
        });
        properties.push(...(p.type.properties ?? []));
        condition.push(
          buildTypePredictCondition(p.type, `${prefix}.${p.restApiName}`)
        );
      }
      const result = [`${prefix}.${p.restApiName} !== undefined`];
      result.push(...condition);
      return result.join(" && ");
    })
    .join(" && ");
}
