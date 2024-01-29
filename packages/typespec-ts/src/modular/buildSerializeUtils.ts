import { toPascalCase } from "../utils/casingUtils.js";
import {
  getResponseMapping,
  getRequestModelMapping,
  serializeRequestValue,
  deserializeResponseValue,
  getAllAncestors
} from "./helpers/operationHelpers.js";
import { ModularCodeModel, Type } from "./modularCodeModel.js";
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
      (t) => isSpecialHandledUnion(t) && (t.usage ?? 0) & usageCondition
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
          // getTypePredictFunction(
          //   utilsFile,
          //   et,
          //   serializeType,
          //   getTypeUnionName(su, false, model.runtimeImports, serializeType)
          // );
          getTypeSerializeFunction(
            utilsFile,
            et,
            serializeType,
            model.runtimeImports
          );
        } else {
          // getTypePredictFunction(
          //   utilsFile,
          //   et,
          //   serializeType,
          //   getTypeUnionName(su, true, model.runtimeImports, serializeType)
          // );
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
          getTypeUnionName(su, true, model.runtimeImports, serializeType),
          su.discriminator,
          su.isPolymorphicBaseModel
        );
      } else {
        deserializeUnionTypesFunction(
          utilsFile,
          unionDeserializeTypes ?? [],
          deserializeFunctionName,
          serializeType,
          getTypeUnionName(su, true, model.runtimeImports, serializeType),
          getTypeUnionName(su, false, model.runtimeImports, serializeType),
          su.discriminator,
          su.isPolymorphicBaseModel
        );
      }
    });
    addImportsToFiles(model.runtimeImports, utilsFile, {
      rlcIndex: "../rest/index.js",
      modularModel: "../models/models.js"
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
  )}`;
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
const specialVariantMap = new Map<Type, boolean>();
export function isSpecialUnionVariant(
  t: Type,
  variantStack: Type[] = []
): boolean {
  if (variantStack.length <= 0) {
    variantStack.push(t);
  }
  const ancestors = getAllAncestors(t);
  if (specialVariantMap.has(t)) {
    variantStack.pop();
    return specialVariantMap.get(t) ?? false;
  }

  if (
    t.type === "datetime" ||
    t.type === "byte-array" ||
    (t.type === "model" &&
      t.properties
        ?.filter((p) => {
          return !(
            variantStack.includes(p.type) ||
            ancestors.includes(p.type) ||
            (p.type.type === "list" &&
              p.type.elementType &&
              (variantStack.includes(p.type.elementType) ||
                ancestors.includes(p.type.elementType)))
          );
        })
        ?.some(
          (p) =>
            p.clientName !== p.restApiName ||
            isSpecialUnionVariant(p.type, [...variantStack, p.type])
        )) ||
    isPolymorphicUnion(t) ||
    (t.type === "list" &&
      t.elementType &&
      !variantStack.includes(t.elementType) &&
      !ancestors.includes(t.elementType) &&
      isSpecialUnionVariant(t.elementType, [...variantStack, t.elementType])) ||
    (t.type === "combined" &&
      t.types
        ?.filter((p) => {
          return !(variantStack.includes(p) || ancestors.includes(p));
        })
        ?.some((p) => {
          return isSpecialUnionVariant(p, [...variantStack, p]);
        }))
  ) {
    specialVariantMap.set(t, true);
    variantStack.pop();
    return true;
  }
  variantStack.pop();
  specialVariantMap.set(t, false);
  return false;
}

export function isNormalUnion(t: Type): boolean {
  return (
    t.type === "combined" &&
    !(
      t.types?.some((p) => {
        return isSpecialUnionVariant(p);
      }) ?? false
    )
  );
}

export function isDiscriminatedUnion(t: Type): boolean {
  return (
    t.type === "combined" &&
    (t.discriminator ? true : false) &&
    (t.types?.some((p) => {
      return isSpecialUnionVariant(p);
    }) ??
      false)
  );
}

export function isSpecialHandledUnion(t: Type): boolean {
  return isDiscriminatedUnion(t) || isPolymorphicUnion(t);
}

const polymorphicUnionMap = new Map<Type, boolean>();
export function isPolymorphicUnion(t: Type): boolean {
  if (polymorphicUnionMap.has(t)) {
    return polymorphicUnionMap.get(t) ?? false;
  }
  const ancestors = getAllAncestors(t);
  if (
    t.type === "model" &&
    t.isPolymorphicBaseModel &&
    t.types
      ?.filter((p) => {
        return !ancestors.includes(p);
      })
      ?.some((p) => {
        return isSpecialUnionVariant(p);
      })
  ) {
    polymorphicUnionMap.set(t, true);
    return true;
  }
  polymorphicUnionMap.set(t, false);
  return false;
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
  if (type.name) {
    const typeName =
      (fromRest && type.alias ? type.alias : type.name) +
      (fromRest ? (serializeType === "serialize" ? "Rest" : "Output") : "");
    if (fromRest && runtimeImports) {
      addImportToSpecifier(
        "rlcIndex",
        runtimeImports,
        (type.alias ?? type.name) +
          (serializeType === "serialize"
            ? " as " + (type.alias ?? type.name) + "Rest"
            : "Output")
      );
    } else if (runtimeImports) {
      addImportToSpecifier("modularModel", runtimeImports, type.name);
    }
    return typeName;
  }
  return types
    ?.map((t) => {
      if (t.type === "list" && t.elementType?.type === "model") {
        if (fromRest && t.elementType.name && runtimeImports) {
          addImportToSpecifier(
            "rlcIndex",
            runtimeImports,
            (t.elementType.alias ?? t.elementType.name) +
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
          (t.elementType.alias ?? t.elementType.name) +
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
          (t.alias ?? t.name) +
            (serializeType === "serialize"
              ? " as " + (t.alias ?? t.name) + "Rest"
              : "Output")
        );
      } else if (t.name && runtimeImports) {
        addImportToSpecifier("modularModel", runtimeImports, t.name);
      }
      return t.name
        ? (fromRest && t.alias ? t.alias : t.name) +
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

  if (isSpecialHandledUnion(type)) {
    return;
  }
  if (type.type === "model" && type.name) {
    addImportToSpecifier("rlcIndex", runtimeImports, `${type.name}Output`);
    addImportToSpecifier("modularModel", runtimeImports, type.name);
    const functionStatement: FunctionDeclarationStructure = {
      kind: StructureKind.Function,
      docs: [`${serializeType} function for ${type.name}`],
      name: `${serializeType}${toPascalCase(type.name)}`,
      parameters: [{ name: "obj", type: `${type.name}Output` }],
      returnType: type.name
    };
    if (type.properties) {
      statements.push(
        `return {${getResponseMapping(type, "obj", runtimeImports)}};`
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
    addImportToSpecifier(
      "rlcIndex",
      runtimeImports,
      `${type.elementType.name}Output`
    );
    addImportToSpecifier("modularModel", runtimeImports, type.elementType.name);
    const functionStatement: FunctionDeclarationStructure = {
      kind: StructureKind.Function,
      docs: [`${serializeType} function for ${type.elementType.name} array`],
      name: `${serializeType}${toPascalCase(type.elementType.name)}Array`,
      parameters: [{ name: "obj", type: type.elementType.name + "Output[]" }],
      returnType: type.elementType.name + "[]"
    };
    statements.push(
      `return (obj || []).map(item => { return {${getResponseMapping(
        type.elementType,
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
        [type],
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
  if (isSpecialHandledUnion(type)) {
    return;
  }
  if (type.type === "model" && type.name) {
    const typeName = type.name + "Rest";
    addImportToSpecifier(
      "rlcIndex",
      runtimeImports,
      `${type.name} as ${typeName}`
    );
    addImportToSpecifier("modularModel", runtimeImports, type.name);
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
    addImportToSpecifier(
      "rlcIndex",
      runtimeImports,
      `${type.elementType.name} as ${typeName}`
    );
    addImportToSpecifier("modularModel", runtimeImports, type.elementType.name);
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
  typeUnionNames: string | undefined,
  discriminator?: string,
  isPolymorphicBaseModel?: boolean
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
  statements.push(`switch (obj.${discriminator}) {`);
  for (const type of unionDeserializeTypes) {
    const functionName = toPascalCase(
      type.name ??
        (type.elementType?.name
          ? type.elementType.name + "Array"
          : getMappedType(type.type) +
            (serializeType === "deserialize" ? "Rest" : ""))
    );
    statements.push(
      `case "${
        type.discriminatorValue
      }": return ${serializeType}${functionName}(obj${
        isPolymorphicBaseModel
          ? " as " + (type.name ?? type.elementType?.name + "[]")
          : ""
      }); `
    );
  }
  statements.push("default: return obj; }");
  functionStatement.statements = statements.join("\n");
  if (!hasDuplicateFunction(sourceFile, functionStatement)) {
    sourceFile.addFunction(functionStatement);
  }
}
