import { SourceFile } from "ts-morph";
import { getType } from "./helpers/typeHelpers.js";
import { Client, ModularCodeModel, Type } from "./modularCodeModel.js";
import * as path from "path";
import { getDocsFromDescription } from "./helpers/docsHelpers.js";
import { buildOperationOptions } from "./buildOperations.js";
import { getImportSpecifier } from "@azure-tools/rlc-common";
import {
  InterfaceStructure,
  isAzureCoreErrorSdkType,
  getCoreClientErrorType,
  extractModels,
  buildEnumModel
} from "./helpers/modelUtils.js";

/**
 * Extracts all the aliases from the code model
 * 1. alias from polymorphic base model, where we need to use typescript union to combine all the sub models
 * 2. alias from unions, where we also need to use typescript union to combine all the union variants
 */
export function extractAliases(codeModel: ModularCodeModel): Type[] {
  const models = codeModel.types.filter(
    (t) =>
      (t.type === "model" || t.type === "combined") && t.alias && t.aliasType
  );
  return models;
}

export function buildModelInterface(
  model: Type,
  cache: { coreClientTypes: Set<string> }
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
        propertyTypeName = isAzureCoreErrorSdkType(p.type)
          ? getCoreClientErrorType(propertyTypeName, cache.coreClientTypes)
          : propertyTypeName;
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

// ====== MAIN FUNCTIONS ======
/**
 * This function creates the file containing all the models defined in TypeSpec
 */
export function buildModels(
  codeModel: ModularCodeModel,
  subClient: Client
): SourceFile | undefined {
  // We are generating both models and enums here
  const coreClientTypes = new Set<string>();
  // filter out the models/enums that are anonymous
  const models = extractModels(codeModel).filter((m) => !!m.name);
  const aliases = extractAliases(codeModel);
  // Skip to generate models.ts if there is no any models
  if (models.length === 0 && aliases.length === 0) {
    return;
  }
  const srcPath = codeModel.modularOptions.sourceRoot;
  const modelsFile = codeModel.project.createSourceFile(
    path.join(`${srcPath}/`, subClient.subfolder ?? "", `models/models.ts`)
  );

  const modelMap = new Map<Type, InterfaceStructure>();

  for (const model of models) {
    if (model.type === "enum") {
      if (modelsFile.getTypeAlias(model.name!)) {
        // If the enum is already defined, we don't need to do anything
        continue;
      }
      const enumAlias = buildEnumModel(model);
      modelsFile.addTypeAlias(enumAlias);
    } else {
      const modelInterface = buildModelInterface(model, { coreClientTypes });
      model.type === "model"
        ? model.parents?.forEach((p) =>
            modelInterface.extends.push(p.alias ?? getType(p, p.format).name)
          )
        : undefined;
      modelsFile.addInterface(modelInterface);
      modelMap.set(model, modelInterface);
    }
  }

  if (coreClientTypes.size > 0) {
    modelsFile.addImportDeclarations([
      {
        moduleSpecifier: getImportSpecifier(
          "restClient",
          codeModel.runtimeImports
        ),
        namedImports: Array.from(coreClientTypes)
      }
    ]);
  }

  aliases.forEach((alias) => {
    modelsFile.addTypeAlias(buildModelTypeAlias(alias));
  });
  return modelsFile;
}

export function buildModelTypeAlias(model: Type) {
  return {
    name: model.name!,
    isExported: true,
    docs: ["Alias for " + model.name],
    type: model.aliasType!
  };
}

export function buildModelsOptions(
  codeModel: ModularCodeModel,
  client: Client
) {
  const modelOptionsFile = codeModel.project.createSourceFile(
    path.join(
      codeModel.modularOptions.sourceRoot,
      client.subfolder ?? "",
      `models/options.ts`
    ),
    undefined,
    {
      overwrite: true
    }
  );
  for (const operationGroup of client.operationGroups) {
    operationGroup.operations.forEach((o) => {
      buildOperationOptions(o, modelOptionsFile);
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

  modelOptionsFile.fixMissingImports();
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
