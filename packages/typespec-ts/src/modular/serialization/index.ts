import {
  ImportType,
  addImportToSpecifier,
  addImportsToFiles
} from "@azure-tools/rlc-common";
import { isDefined } from "@azure/core-util";
import { UsageFlags } from "@typespec/compiler";
import _ from "lodash";
import * as path from "path";
import { FunctionDeclarationStructure, OptionalKind } from "ts-morph";
import { toCamelCase, toPascalCase } from "../../utils/casingUtils.js";
import { ModularCodeModel, Type } from "../modularCodeModel.js";
import { serializeModelInline, serializeType } from "./serializers.js";
import {
  Imports,
  SerializerMap,
  getModularTypeId,
  hasSerializeFunction
} from "./util.js";

export function buildSerializers(
  codeModel: ModularCodeModel
): SerializerMap | undefined {
  const serializers = createSerializerMetadata(codeModel);
  const entries = Object.entries(serializers).map(
    ([modularTypeName, meta]) => ({ ...meta, modularTypeName })
  );

  const [functions, imports] = entries
    .flatMap(({ deserializerFunctionName, serializerFunctionName, type }) => [
      serializerFunctionName
        ? createSerializerFunctionStructure(UsageFlags.Input, serializers, type)
        : undefined,
      deserializerFunctionName
        ? createSerializerFunctionStructure(
            UsageFlags.Output,
            serializers,
            type
          )
        : undefined
    ])
    .filter(isDefined)
    .reduce<[OptionalKind<FunctionDeclarationStructure>[], Imports]>(
      ([functions, imports], { functionDecl, imports: functionImports }) => {
        functions.push(functionDecl);
        imports.push(...(functionImports ?? []));
        return [functions, imports];
      },
      [[], []]
    );

  if (!functions.length) {
    return;
  }

  const sourceFile = codeModel.project.createSourceFile(
    path.join(
      `${codeModel.modularOptions.sourceRoot}/`,
      `util/serializeUtil.ts`
    )
  );

  sourceFile.addFunctions(functions);

  entries.forEach(({ modularTypeName, rlcTypeAlias, rlcTypeName }) => {
    addImportToSpecifier(
      "modularModel",
      codeModel.runtimeImports,
      modularTypeName
    );
    addImportToSpecifier(
      "rlcIndex",
      codeModel.runtimeImports,
      `${rlcTypeName} as ${rlcTypeAlias}`
    );
  });

  const importMap = imports.reduce<Partial<Record<ImportType, string[]>>>(
    (acc, { importType, name }) => {
      if (importType === "serializers") {
        return acc;
      }
      const names = acc[importType] ?? [];
      if (!names.includes(name)) names.push(name);
      acc[importType] = names;
      return acc;
    },
    {}
  );
  const importTypes = Object.keys(importMap) as ImportType[];
  importTypes.forEach((importType) => {
    const names = importMap[importType]!;
    names.forEach((name) =>
      addImportToSpecifier(importType, codeModel.runtimeImports, name)
    );
  });

  addImportsToFiles(codeModel.runtimeImports, sourceFile, {
    rlcIndex: "../rest/index.js",
    modularModel: "../models/models.js"
  });

  return serializers;
}

function createSerializerMetadata(codeModel: ModularCodeModel): SerializerMap {
  const { namedModularTypes, usage } = getNamedTypesByUsage(codeModel.types);

  const typesWithSerializers = namedModularTypes.filter(hasSerializeFunction);

  const serializers = Object.fromEntries(
    typesWithSerializers.map((type) => {
      const modularTypeName = getModularTypeId(type);
      if (!type.rlcType || !modularTypeName) {
        throw Error(
          JSON.stringify({ rlcType: type.rlcType, name: modularTypeName })
        );
      }

      const rlcTypeAlias = toPascalCase(`Rest ${modularTypeName}`);
      const [serializerFunctionName, deserializerFunctionName] = (
        [UsageFlags.Input, UsageFlags.Output] as const
      ).map((functionType) =>
        usage.get(type)?.has(functionType)
          ? toCamelCase(
              `${
                functionType === UsageFlags.Input ? "serialize" : "deserialize"
              } ${modularTypeName}`
            )
          : undefined
      );

      return [
        modularTypeName,
        {
          rlcTypeName: type.rlcType,
          rlcTypeAlias,
          type,
          serializerFunctionName,
          deserializerFunctionName
        }
      ] as const;
    })
  );

  return serializers;
}

function getNamedTypesByUsage(types: Type[]): {
  namedModularTypes: Type[];
  usage: WeakMap<Type, Set<UsageFlags>>;
} {
  const namedModularTypes: Record<string, Type> = {};
  const usage = new WeakMap<Type, Set<UsageFlags>>();

  const stacks = types.reduce<[Type[], Type[]]>(
    ([inputStack, outputStack], type) => {
      const name = type.name;
      if (!name) {
        return [inputStack, outputStack];
      }

      const usageStacks = [
        type.usage && type.usage & UsageFlags.Input ? inputStack : undefined,
        type.usage && type.usage & UsageFlags.Output ? outputStack : undefined
      ].filter(isDefined);

      usageStacks.forEach((stack) => stack.push(type));
      return [inputStack, outputStack];
    },
    [[], []]
  );

  _(stacks)
    .zip([UsageFlags.Input, UsageFlags.Output] as const)
    .forEach(([stack, functionType]) => {
      while (stack!.length) {
        const type = stack!.pop()!;
        const name = type.name;
        if (!name) {
          continue;
        }
        namedModularTypes[name] = type;

        const typeUsage = usage.get(type) ?? new Set();
        typeUsage.add(functionType!);
        usage.set(type, typeUsage);
      }
    });

  return { usage, namedModularTypes: Object.values(namedModularTypes) };
}

function createSerializerFunctionStructure(
  functionType: UsageFlags,
  serializerMap: SerializerMap,
  type: Type
): {
  functionDecl: OptionalKind<FunctionDeclarationStructure>;
  imports?: Imports;
} {
  const modularTypeName = getModularTypeId(type) ?? "FIXMYNAME";
  const serializerMetadata = serializerMap[modularTypeName];

  const functionName =
    functionType === UsageFlags.Input
      ? serializerMetadata?.serializerFunctionName ?? "FIXMYNAME"
      : serializerMetadata?.deserializerFunctionName ?? "FIXMYNAME";

  const paramName = "o";
  const types = [
    modularTypeName,
    serializerMetadata?.rlcTypeAlias ?? "FIXMYNAME"
  ];
  const [paramType, returnType] =
    functionType === UsageFlags.Input ? types : types.reverse();
  const parameters = [{ name: paramName, type: paramType }];
  const { expr: serializerBody, imports } =
    type.type === "model"
      ? serializeModelInline(functionType, serializerMap, type, paramName)
      : serializeType(functionType, serializerMap, type, paramName);
  const statements = [`return ${serializerBody};`];

  const functionDecl: OptionalKind<FunctionDeclarationStructure> = {
    isExported: true,
    name: functionName,
    parameters,
    returnType,
    statements
  };
  return { functionDecl, imports };
}
