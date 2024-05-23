import {
  addImportsToFiles,
  addImportToSpecifier,
  Imports as RuntimeImports
} from "@azure-tools/rlc-common";
import {
  getAllModels,
  SdkType,
  SdkUnionType,
  UsageFlags as TCGCUsageFlags
} from "@azure-tools/typespec-client-generator-core";
import { isDefined } from "@azure/core-util";
import { UsageFlags } from "@typespec/compiler";
import * as path from "path";
import { FunctionDeclarationStructure, OptionalKind } from "ts-morph";
import { toCamelCase, toPascalCase } from "../../utils/casingUtils.js";
import { SdkContext } from "../../utils/interfaces.js";
import {
  getModularModelFilePath,
  getRLCIndexFilePath
} from "../helpers/namingHelpers.js";
import { Client, ModularCodeModel } from "../modularCodeModel.js";
import {
  serializeEnumFunctionBody,
  serializeModelPropertiesInline,
  serializeType,
  serializeUnionInline
} from "./serializers.js";
import { getUsage, SerializeFunctionType, SerializerMap } from "./util.js";

export function buildSerializers(
  dpgContext: SdkContext,
  codeModel: ModularCodeModel,
  client: Client
): SerializerMap {
  const unions = codeModel.types
    .filter((type) => type.type === "combined" && isDefined(type.tcgcType))
    .map((type) => type.tcgcType as SdkUnionType);
  const serializers = createSerializerMetadata(dpgContext, unions);
  const entries = Object.entries(serializers).map(
    ([modularTypeName, meta]) => ({
      ...meta,
      modularTypeName
    })
  );

  const functions = entries
    .flatMap(({ deserializerFunctionName, serializerFunctionName, type }) => [
      serializerFunctionName
        ? createSerializerFunctionStructure(
            dpgContext,
            UsageFlags.Input,
            serializers,
            type,
            codeModel.runtimeImports
          )
        : undefined,
      deserializerFunctionName
        ? createSerializerFunctionStructure(
            dpgContext,
            UsageFlags.Output,
            serializers,
            type,
            codeModel.runtimeImports
          )
        : undefined
    ])
    .filter(isDefined);

  if (!functions.length) {
    return {};
  }

  const utilFilePath = path.join(
    ...[
      codeModel.modularOptions.sourceRoot,
      client.subfolder,
      "utils",
      "serializeUtil.ts"
    ].filter(isDefined)
  );
  const sourceFile = codeModel.project.createSourceFile(utilFilePath);

  sourceFile.addFunctions(functions);

  entries.forEach(({ modularTypeName, rlcTypeAlias, rlcTypeName }) => {
    addImportToSpecifier(
      "modularModel",
      codeModel.runtimeImports,
      modularTypeName
    );
    if (rlcTypeName) {
      addImportToSpecifier(
        "rlcIndex",
        codeModel.runtimeImports,
        rlcTypeAlias ? `${rlcTypeName} as ${rlcTypeAlias}` : rlcTypeName
      );
    }
  });

  addImportsToFiles(codeModel.runtimeImports, sourceFile, {
    modularModel: path.relative(
      path.dirname(utilFilePath),
      getModularModelFilePath(codeModel, client, "js")
    ),
    rlcIndex: path.relative(
      path.dirname(utilFilePath),
      getRLCIndexFilePath(dpgContext, client, "js")
    )
  });

  return serializers;
}

function createSerializerMetadata(
  dpgContext: SdkContext,
  unions: SdkUnionType[]
): SerializerMap {
  const allModels = getAllModels(dpgContext);
  const typesWithSerializers = [...allModels, ...unions].filter(
    hasSerializeFunction
  );

  const serializers = Object.fromEntries(
    typesWithSerializers.map((type) => {
      // const rlcSchema: Schema = getSchemaForType(dpgContext, type.__raw!, {
      //   needRef: true,
      //   usage: [
      //     SchemaContext.Input,
      //     SchemaContext.Output,
      //     SchemaContext.Exception
      //   ]
      // });

      const rlcTypeName =
        (type as SerializeFunctionType & { usage?: TCGCUsageFlags }).usage &&
        (type as SerializeFunctionType & { usage: TCGCUsageFlags }).usage &
          TCGCUsageFlags.Output
          ? toPascalCase(`${type.name} Output`)
          : (type as SerializeFunctionType & { usage?: TCGCUsageFlags })
                .usage &&
              (type as SerializeFunctionType & { usage: TCGCUsageFlags })
                .usage & TCGCUsageFlags.Input
            ? type.name
            : undefined;
      const rlcTypeAlias = rlcTypeName
        ? toPascalCase(`${type.name} Rest`)
        : undefined;

      const usage = getUsage(dpgContext, type);
      const [serializerFunctionName, deserializerFunctionName] = (
        [UsageFlags.Input, UsageFlags.Output] as const
      ).map((functionType) =>
        functionType & usage
          ? toCamelCase(
              `${
                functionType === UsageFlags.Input ? "serialize" : "deserialize"
              } ${type.name}`
            )
          : undefined
      );

      return [
        type.name,
        {
          rlcTypeName,
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

function createSerializerFunctionStructure(
  dpgContext: SdkContext,
  functionType: UsageFlags,
  serializerMap: SerializerMap,
  type: SerializeFunctionType,
  runtimeImports: RuntimeImports
): OptionalKind<FunctionDeclarationStructure> {
  const modularTypeName = type.name;
  const serializerMetadata = serializerMap[modularTypeName];

  const functionName =
    functionType === UsageFlags.Input
      ? serializerMetadata?.serializerFunctionName ?? "FIXMYNAME"
      : serializerMetadata?.deserializerFunctionName ?? "FIXMYNAME";

  const paramName = "o";
  const types = type.isGeneratedName
    ? ["any", "any"]
    : [modularTypeName, serializerMetadata?.rlcTypeAlias ?? "FIXMYNAME"];
  const [paramType, returnType] =
    functionType === UsageFlags.Input ? types : types.reverse();
  const parameters = [{ name: paramName, type: paramType }];
  const statements = [];
  switch (true) {
    case !hasSerializeFunction(type): {
      statements.push(
        `return ${serializeType({
          dpgContext,
          functionType,
          serializerMap,
          type,
          valueExpr: paramName,
          importCallback: (importType, importedName) =>
            addImportToSpecifier(importType, runtimeImports, importedName)
        })};`
      );
      break;
    }
    case type.kind === "model": {
      statements.push(
        `return ${serializeModelPropertiesInline({
          dpgContext,
          functionType,
          serializerMap,
          type,
          valueExpr: paramName,
          importCallback: (importType, importedName) =>
            addImportToSpecifier(importType, runtimeImports, importedName)
        })}`
      );
      break;
    }
    case type.kind === "union": {
      statements.push(
        `return ${serializeUnionInline({
          dpgContext,
          functionType,
          serializerMap,
          type,
          valueExpr: paramName,
          importCallback: (importType, importedName) =>
            addImportToSpecifier(importType, runtimeImports, importedName)
        })}`
      );
      break;
    }
    case type.kind === "enum": {
      statements.push(
        serializeEnumFunctionBody({
          dpgContext,
          functionType,
          serializerMap,
          type,
          valueExpr: paramName,
          importCallback: (importType, importedName) =>
            addImportToSpecifier(importType, runtimeImports, importedName)
        })
      );
      break;
    }
  }

  const functionDecl: OptionalKind<FunctionDeclarationStructure> = {
    isExported: true,
    name: functionName,
    parameters,
    returnType,
    statements
  };
  return functionDecl;
}

function hasSerializeFunction(type: SdkType): type is SerializeFunctionType {
  const isValidTypeKind =
    type.kind === "enum" || type.kind === "model" || type.kind === "union";
  return Boolean(isValidTypeKind && type.name);
}
