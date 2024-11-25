import * as path from "path";

import {
  Client,
  ModularCodeModel,
  Type as ModularType
} from "./modularCodeModel.js";
import { InterfaceDeclarationStructure, OptionalKind } from "ts-morph";

import { buildOperationOptions } from "./buildOperations.js";
import { getDocsFromDescription } from "./helpers/docsHelpers.js";
import { getImportSpecifier } from "@azure-tools/rlc-common";
import { getType } from "./helpers/typeHelpers.js";
import { SdkContext } from "../utils/interfaces.js";
// import { SdkClient, SdkClientType, SdkHttpOperation } from "@azure-tools/typespec-client-generator-core";

// ====== UTILITIES ======

function isAzureCoreErrorSdkType(t: ModularType) {
  return (
    t.name &&
    ["error", "errormodel", "innererror", "errorresponse"].includes(
      t.name.toLowerCase()
    ) &&
    t.coreTypeInfo === "ErrorType"
  );
}

function isAzureCoreLroSdkType(t: ModularType) {
  return (
    t.name &&
    ["operationstate"].includes(t.name.toLowerCase()) &&
    t.coreTypeInfo === "LroType"
  );
}

export function isModelWithAdditionalProperties(t: ModularType) {
  return t.type === "dict" && t.name !== "Record";
}

function getCoreClientErrorType(name: string, coreClientTypes: Set<string>) {
  const coreClientType: string = name === "Error" ? "ErrorModel" : name;
  coreClientTypes.add(coreClientType);
  return coreClientType;
}

function getCoreLroType(name: string, coreLroTypes: Set<string>) {
  const coreLroType = name === "OperationState" ? "CoreOperationStatus" : name;
  coreLroTypes.add(coreLroType);
  return coreLroType;
}

/**
 * Extracts all the aliases from the code model
 * 1. alias from polymorphic base model, where we need to use typescript union to combine all the sub models
 * 2. alias from unions, where we also need to use typescript union to combine all the union variants
 */
export function extractAliases(codeModel: ModularCodeModel): ModularType[] {
  const models = codeModel.types.filter(
    (t) =>
      ((t.type === "model" || t.type === "combined") &&
        t.alias &&
        t.aliasType) ||
      (isModelWithAdditionalProperties(t) && t.alias && t.aliasType)
  );
  return models;
}

type InterfaceStructure = OptionalKind<InterfaceDeclarationStructure> & {
  extends: string[];
};

export function buildModelInterface(
  model: ModularType,
  cache: { coreClientTypes: Set<string>; coreLroTypes: Set<string> }
): InterfaceStructure {
  const modelProperties = model.properties ?? [];
  const modelInterface = {
    name: model.alias ?? model.name ?? "FIXMYNAME",
    isExported: true,
    docs: getDocsFromDescription(model.description),
    extends: [] as string[],
    properties: (modelProperties ?? []).map((p) => {
      const propertyMetadata = getType(p.type, p.format);
      let propertyTypeName = propertyMetadata.name;
      if (isAzureCoreErrorSdkType(p.type)) {
        propertyTypeName = getCoreClientErrorType(
          propertyTypeName,
          cache.coreClientTypes
        );
      }
      if (isAzureCoreLroSdkType(p.type)) {
        propertyTypeName = getCoreLroType(propertyTypeName, cache.coreLroTypes);
      }

      return {
        name: `"${p.clientName}"`,
        docs: getDocsFromDescription(p.description),
        hasQuestionToken: p.optional,
        isReadonly: p.readonly,
        type: propertyTypeName
      };
    })
  };

  return modelInterface;
}

export function buildModelTypeAlias(model: ModularType) {
  return {
    name: model.name!,
    isExported: true,
    docs: ["Alias for " + model.name],
    type: model.aliasType!
  };
}

export function buildApiOptions(
  context: SdkContext,
  client: Client,
  codeModel: ModularCodeModel
) {
  const modelOptionsFile = codeModel.project.createSourceFile(
    path.join(
      codeModel.modularOptions.sourceRoot,
      client.subfolder ?? "",
      `api/options.ts`
    ),
    undefined,
    {
      overwrite: true
    }
  );
  for (const operationGroup of client.operationGroups) {
    operationGroup.operations.forEach((o) => {
      buildOperationOptions(context, o, modelOptionsFile);
    });
  }
  modelOptionsFile.addImportDeclarations([
    {
      moduleSpecifier: getImportSpecifier(
        "restClient",
        codeModel.runtimeImports
      ),
      namedImports: ["OperationOptions"]
    }
  ]);

  modelOptionsFile
    .getImportDeclarations()
    .filter((id) => {
      return (
        id.isModuleSpecifierRelative() &&
        !id.getModuleSpecifierValue().endsWith(".js")
      );
    })
    .map((id) => {
      id.setModuleSpecifier(id.getModuleSpecifierValue() + ".js");
      return id;
    });
  return modelOptionsFile;
}
