import { toPascalCase } from "../utils/casingUtils.js";
import {
  getResponseMapping,
  getRequestModelMapping,
  serializeRequestValue,
  deserializeResponseValue
} from "./helpers/operationHelpers.js";
import { ModularCodeModel, Property, Type } from "./modularCodeModel.js";
import {
  FunctionDeclarationStructure,
  SourceFile,
  StructureKind
} from "ts-morph";
import {
  Imports as RuntimeImports,
  addImportToSpecifier,
  addImportsToFiles,
  clearImportSets
} from "@azure-tools/rlc-common";
import { UsageFlags } from "@typespec/compiler";

/**
 * This function creates serialize and deserialize utils for special unions and that are used in the operation.
 */
export function buildSerializeUtils(model: ModularCodeModel) {
  const serializeUtilFiles = [];
  for (const serializeType of ["serialize", "deserialize"]) {
    const usageCondition =
      serializeType === "serialize" ? UsageFlags.Input : UsageFlags.Output;
    const specialUnions = model.types.filter(
      (t) =>
        !isSpecialExcludeUnion(t) &&
        isSpecialUnion(t) &&
        (t.usage ?? 0) & usageCondition
    );
    if (specialUnions.length === 0) {
      continue;
    }
    clearImportSets(model.runtimeImports);
    const utilsFile = model.project.createSourceFile(
      `${model.modularOptions.sourceRoot}/utils/${serializeType}Util.ts`
    );

    specialUnions.forEach((su) => {
      let types = su.types;
      if (su.type === "list") {
        types = su.elementType?.types;
      }
      const unionDeserializeTypes = types?.filter((et) => {
        return isSpecialUnionVariant(et);
      });
      unionDeserializeTypes?.forEach((et) => {
        if (serializeType === "serialize") {
          getTypePredictFunction(
            utilsFile,
            et,
            serializeType,
            getTypeUnionName(su, false, model.runtimeImports, serializeType)
          );
          getTypeSerializeFunction(
            utilsFile,
            et,
            serializeType,
            model.runtimeImports
          );
        } else {
          getTypePredictFunction(
            utilsFile,
            et,
            serializeType,
            getTypeUnionName(su, true, model.runtimeImports, serializeType)
          );
          getTypeDeserializeFunction(
            utilsFile,
            et,
            serializeType,
            model.runtimeImports
          );
        }
      });
      const deserializeFunctionName = getDeserializeFunctionName(
        su,
        serializeType,
        model.runtimeImports
      );
      if (serializeType === "serialize") {
        deserializeUnionTypesFunction(
          utilsFile,
          unionDeserializeTypes ?? [],
          deserializeFunctionName,
          serializeType,
          getTypeUnionName(su, false, model.runtimeImports, serializeType),
          getTypeUnionName(su, true, model.runtimeImports, serializeType)
        );
      } else {
        deserializeUnionTypesFunction(
          utilsFile,
          unionDeserializeTypes ?? [],
          deserializeFunctionName,
          serializeType,
          getTypeUnionName(su, true, model.runtimeImports, serializeType),
          getTypeUnionName(su, false, model.runtimeImports, serializeType)
        );
      }
    });
    addImportsToFiles(model.runtimeImports, utilsFile, {
      rlcIndex: "../rest/index.js",
      modularModel: "../models/model.js"
    });
    serializeUtilFiles.push(utilsFile);
  }
  return serializeUtilFiles;
}

export function getDeserializeFunctionName(
  type: Type,
  serializeType: string,
  runtimeImports?: RuntimeImports
) {
  const typeUnionNames = getTypeUnionName(
    type,
    false,
    runtimeImports,
    serializeType
  );
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

/**
 *
 * In general, we have two kinds of basic special union variants.
 * 1. datetime type
 * 2. bytes type
 * If we consider model type, we have the following three type.
 * 3. model with property of datetime type.
 * 4. model with property of binary array type.
 * 5. model that has different property name between rest layer and modular layer.
 * 6. nested model i.e. model with property that is a model with one of the above three conditions.
 * If we consider array type, with all the above 6 types as the element types.
 */
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

/**
 * to exclude union type that
 * 1. contains special union variant and also has dict in the unions. as we can not know how to correctly generate the serialize/deserialize function.
 * 2. contains unions of datetime/byte-array and string. as they both serialize to string. we can not tell if we should deserialize to datetime/byte-array.
 * 3. contains unions of datetime and byte-array. as they both serialize to string. we can not tell if we should deserialize to datetime or byte-array.
 */
export function isSpecialExcludeUnion(t: Type): boolean {
  if (isSpecialUnion(t)) {
    return true;
  }
  return false;
}

export function isNormalUnion(t: Type): boolean {
  return (
    t.type === "combined" && !(t.types?.some(isSpecialUnionVariant) ?? false)
  );
}

export function isSpecialUnion(t: Type): boolean {
  return (
    t.type === "combined" && (t.types?.some(isSpecialUnionVariant) ?? false)
  );
}

export function isDiscriminatedUnion(t: Type): boolean {
  return (
    t.type === "combined" &&
    (t.discriminator ? true : false) &&
    (t.types?.some(isSpecialUnionVariant) ?? false)
  );
}

function getTypeUnionName(
  type: Type,
  fromRest: boolean,
  runtimeImports?: RuntimeImports,
  serializeType?: string
) {
  const types = type.types;
  if (type.type === "list") {
    types === type.elementType?.types;
  }
  return types
    ?.map((t) => {
      if (t.type === "list" && t.elementType?.type === "model") {
        if (fromRest && t.elementType.name && runtimeImports) {
          addImportToSpecifier(
            "rlcIndex",
            runtimeImports,
            t.elementType.name +
              (serializeType === "serialize"
                ? " as " + t.elementType.name + "Rest"
                : "Output")
          );
        } else if (t.elementType.name && runtimeImports) {
          addImportToSpecifier(
            "modularModel",
            runtimeImports,
            t.elementType.name
          );
        }
        return (
          t.elementType.name +
          (fromRest
            ? serializeType === "serialize"
              ? "Rest"
              : "Output"
            : "") +
          "[]"
        );
      }
      if (fromRest && t.name && runtimeImports) {
        addImportToSpecifier(
          "rlcIndex",
          runtimeImports,
          t.name +
            (serializeType === "serialize"
              ? " as " + t.name + "Rest"
              : "Output")
        );
      } else if (t.name && runtimeImports) {
        addImportToSpecifier("modularModel", runtimeImports, t.name);
      }
      return t.name
        ? t.name +
            (fromRest
              ? serializeType === "serialize"
                ? "Rest"
                : "Output"
              : "")
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
      name: `${serializeType}${toPascalCase(
        getMappedType(type.type) +
          (serializeType === "deserialize" ? "Rest" : "")
      )}`,
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
      name: `${serializeType}${toPascalCase(
        getMappedType(type.name ?? "byte-array") +
          (serializeType === "deserialize" ? "Rest" : "")
      )}`,
      parameters: [{ name: "obj", type: "string" }],
      returnType: "Uint8Array"
    };
    statements.push(
      `return ${deserializeResponseValue(
        type,
        "obj",
        runtimeImports,
        true,
        type.format ?? "base64"
      )}`
    );
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

function getTypeSerializeFunction(
  sourceFile: SourceFile,
  type: Type,
  serializeType: string,
  runtimeImports: RuntimeImports
) {
  const statements: string[] = [];

  if (type.type === "model" && type.name) {
    const typeName = type.name + "Rest";
    const functionStatement: FunctionDeclarationStructure = {
      kind: StructureKind.Function,
      docs: [`${serializeType} function for ${type.name}`],
      name: `${serializeType}${toPascalCase(type.name)}`,
      parameters: [{ name: "obj", type: `${type.name}` }],
      returnType: typeName
    };
    if (type.properties) {
      statements.push(
        `return {${getRequestModelMapping(type, "obj", runtimeImports).join(
          ", "
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
        addOverload(sourceFile, typeName, functionStatement);
      } else {
        sourceFile.addFunction(functionStatement);
      }
    }
  } else if (
    type.type === "list" &&
    type.elementType?.type === "model" &&
    type.elementType.name
  ) {
    const typeName = type.elementType.name + "Rest";
    const functionStatement: FunctionDeclarationStructure = {
      kind: StructureKind.Function,
      docs: [`${serializeType} function for ${type.elementType.name} array`],
      name: `${serializeType}${toPascalCase(type.elementType.name)}Array`,
      parameters: [{ name: "obj", type: type.elementType.name + "[]" }],
      returnType: `${typeName}[]`
    };
    statements.push(
      `return (obj || []).map(item => { return {${getRequestModelMapping(
        type.elementType,
        "item",
        runtimeImports
      ).join(", ")}}})`
    );
    functionStatement.statements = statements.join("\n");
    if (!hasDuplicateFunction(sourceFile, functionStatement)) {
      if (
        sourceFile
          .getFunctions()
          .some((f) => f.getName() === functionStatement.name)
      ) {
        addOverload(sourceFile, `${typeName}[]`, functionStatement);
      } else {
        sourceFile.addFunction(functionStatement);
      }
    }
  } else if (type.type === "datetime") {
    const functionStatement: FunctionDeclarationStructure = {
      kind: StructureKind.Function,
      docs: [`${serializeType} function for ${type.type}`],
      name: `${serializeType}${toPascalCase(
        getMappedType(type.type) +
          (serializeType === "deserialize" ? "Rest" : "")
      )}`,
      parameters: [{ name: "obj", type: "Date" }],
      returnType: "string"
    };
    statements.push(
      `return ${serializeRequestValue(type, "obj", runtimeImports, true)}`
    );
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
      name: `${serializeType}${toPascalCase(
        getMappedType(type.type) +
          (serializeType === "deserialize" ? "Rest" : "")
      )}`,
      parameters: [{ name: "obj", type: "Uint8Array" }],
      returnType: "string"
    };
    statements.push(
      `return ${serializeRequestValue(type, "obj", runtimeImports, true)}`
    );
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
        (type.elementType?.name
          ? type.elementType.name + "Array"
          : getMappedType(type.type) +
            (serializeType === "deserialize" ? "Rest" : ""))
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
  serializeType: string,
  typeUnionNames: string | undefined
) {
  if (typeUnionNames === undefined) {
    return;
  }
  const statements: string[] = [];
  const fromRest = serializeType === "deserialize";
  const functionStatement: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    docs: [
      `type predict function for ${getMappedType(
        type.type,
        fromRest
      )} from ${typeUnionNames}`
    ],
    name: `is${toPascalCase(
      formalizeTypeUnionName(
        getMappedType(type.type) + (fromRest ? "Rest" : "")
      )
    )}`,
    parameters: [{ name: "obj", type: typeUnionNames }],
    returnType: `obj is ${getMappedType(type.type, fromRest)}`
  };
  if (!fromRest) {
    statements.push(
      `if (obj instanceof ${getMappedType(
        type.type,
        fromRest
      )}) { return true;}`
    );
  } else {
    statements.push(
      `if (typeof obj === "${getMappedType(
        type.type,
        fromRest
      )}") { return true;}`
    );
  }
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
  serializeType: string,
  typeUnionNames: string | undefined
): void {
  if (typeUnionNames === undefined) {
    return;
  }

  const statements: string[] = [];
  if (type.type === "datetime" || type.type === "byte-array") {
    getTypePredictFunctionForBasicType(
      sourceFile,
      type,
      serializeType,
      typeUnionNames
    );
  } else if (type.type === "model" && type.name) {
    const typeName =
      type.name + (serializeType === "serialize" ? "" : "Output");
    const functionStatement: FunctionDeclarationStructure = {
      kind: StructureKind.Function,
      docs: [`type predict function for ${typeName} from ${typeUnionNames}`],
      name: `is${toPascalCase(formalizeTypeUnionName(type.name))}`,
      parameters: [{ name: "obj", type: typeUnionNames }],
      returnType: `obj is ${typeName}`
    };
    const typeProperties = getAllProperties(type);
    if (typeProperties.length > 0) {
      statements.push(
        `return ${buildTypePredictCondition(
          type,
          `(obj as ${typeName})`,
          serializeType
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
    const typeName =
      type.elementType.name + (serializeType === "serialize" ? "" : "Output");
    const functionStatement: FunctionDeclarationStructure = {
      kind: StructureKind.Function,
      docs: [
        `type predict function for ${typeName} array from ${typeUnionNames}`
      ],
      name: `is${toPascalCase(
        formalizeTypeUnionName(type.elementType.name + "Array")
      )}`,
      parameters: [{ name: "obj", type: typeUnionNames }],
      returnType: `obj is ${typeName}[]`
    };
    if (type.elementType?.type === "model") {
      const properties = getAllProperties(type.elementType);
      if (properties && properties.length > 0) {
        statements.push("if (Array.isArray(obj) && obj.length > 0) {");
        statements.push(
          `return ${buildTypePredictCondition(
            type.elementType,
            `(obj as ${typeName}[])[0]`,
            serializeType
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

function buildTypePredictCondition(
  type: Type,
  prefix: string,
  serializeType: string
): string {
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
        if (serializeType === "serialize") {
          condition.push(
            buildTypePredictCondition(
              p.type,
              `${prefix}.${p.clientName}`,
              serializeType
            )
          );
        } else {
          condition.push(
            buildTypePredictCondition(
              p.type,
              `${prefix}.${p.restApiName}`,
              serializeType
            )
          );
        }
      }
      const result = [];
      if (serializeType === "serialize") {
        result.push(`${prefix}.${p.clientName} !== undefined`);
      } else {
        result.push(`${prefix}.${p.restApiName} !== undefined`);
      }
      result.push(...condition);
      return result.join(" && ");
    })
    .join(" && ");
}
