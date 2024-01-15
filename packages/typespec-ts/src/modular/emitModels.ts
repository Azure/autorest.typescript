import {
  InterfaceDeclarationStructure,
  OptionalKind,
  SourceFile,
  TypeAliasDeclarationStructure
} from "ts-morph";
import { getType } from "./helpers/typeHelpers.js";
import { Client, ModularCodeModel, Type } from "./modularCodeModel.js";
import * as path from "path";
import { getDocsFromDescription } from "./helpers/docsHelpers.js";
import { buildOperationOptions } from "./buildOperations.js";
import { getImportSpecifier } from "@azure-tools/rlc-common";

// ====== UTILITIES ======

function isAzureCoreErrorSdkType(t: Type) {
  return (
    t.name &&
    ["error", "errormodel", "innererror", "errorresponse"].includes(
      t.name.toLowerCase()
    ) &&
    t.isCoreErrorType === true
  );
}

function getCoreClientErrorType(name: string, coreClientTypes: Set<string>) {
  const coreClientType: string = name === "Error" ? "ErrorModel" : name;
  coreClientTypes.add(coreClientType);
  return coreClientType;
}

// ====== TYPE EXTRACTION ======

function extractModels(codeModel: ModularCodeModel): Type[] {
  const models = codeModel.types.filter(
    (t) =>
      (t.type === "model" || t.type === "enum") &&
      !isAzureCoreErrorSdkType(t) &&
      !(t.type == "model" && t.name === "")
  );

  for (const model of codeModel.types) {
    if (model.type === "combined" && model.nullable) {
      for (const unionModel of model.types ?? []) {
        if (unionModel.type === "model") {
          models.push(unionModel);
        }
      }
    }
  }
  return models;
}

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
// ====== TYPE BUILDERS ======
function buildEnumModel(
  model: Type
): OptionalKind<TypeAliasDeclarationStructure> {
  return {
    name: model.name!,
    isExported: true,
    docs: [
      ...getDocsFromDescription(model.description),
      // If it is a fixed enum we don't need to list the known values in the docs as the
      // output will be a literal union which is self documenting
      model.isFixed
        ? ""
        : // When we generate an "extensible" enum, the type will be "string" so we list the known values
          // in the docs for user reference.
          (model.values ?? []).map((v) => `"${v.value}"`).join(", ")
    ],
    type: model.isFixed
      ? (model.values ?? []).map((v) => `"${v.value}"`).join(" | ")
      : "string"
  };
}

type InterfaceStructure = OptionalKind<InterfaceDeclarationStructure> & {
  extends: string[];
};

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
  const models = extractModels(codeModel);
  const aliases = extractAliases(codeModel);
  // Skip to generate models.ts if there is no any models
  if (models.length === 0 && aliases.length === 0) {
    return;
  }
  const srcPath = codeModel.modularOptions.sourceRoot;
  const modelsFile = codeModel.project.createSourceFile(
    path.join(`${srcPath}/`, subClient.subfolder ?? "", `models/models.ts`)
  );

  for (const model of models) {
    if (model.type === "enum") {
      if (!model.name || modelsFile.getTypeAlias(model.name!)) {
        // If the enum is already defined, we don't need to do anything
        // If the enum is anonymous, we don't build any type alias for it
        continue;
      }
      const enumAlias = buildEnumModel(model);
      modelsFile.addTypeAlias(enumAlias);
    } else {
      if (!model.name) {
        continue;
      }
      const modelInterface = buildModelInterface(model, { coreClientTypes });
      model.type === "model"
        ? model.parents?.forEach((p) =>
            modelInterface.extends.push(p.alias ?? getType(p, p.format).name)
          )
        : undefined;
      modelsFile.addInterface(modelInterface);
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
