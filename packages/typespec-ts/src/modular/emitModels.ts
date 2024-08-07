import { addImportsToFiles, getImportSpecifier } from "@azure-tools/rlc-common";
import * as path from "path";
import {
  InterfaceDeclarationStructure,
  OptionalKind,
  SourceFile,
  TypeAliasDeclarationStructure
} from "ts-morph";
import { buildOperationOptions } from "./buildOperations.js";
import { getDocsFromDescription } from "./helpers/docsHelpers.js";
import { getModularModelFilePath } from "./helpers/namingHelpers.js";
import { getType } from "./helpers/typeHelpers.js";
import {
  Client,
  ModularCodeModel,
  Type as ModularType
} from "./modularCodeModel.js";
import { buildModelSerializer } from "./serialization/buildSerializerFunction.js";
import { toCamelCase } from "../utils/casingUtils.js";
import { addImportBySymbol } from "../utils/importHelper.js";

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

function isAnonymousModel(t: ModularType) {
  return t.type === "model" && t.name === "";
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

// ====== TYPE EXTRACTION ======

function extractModels(codeModel: ModularCodeModel): ModularType[] {
  const models = codeModel.types.filter(
    (t) =>
      ((t.type === "model" || t.type === "enum") &&
        !isAzureCoreErrorSdkType(t) &&
        !isAzureCoreLroSdkType(t) &&
        !isAnonymousModel(t)) ||
      isModelWithAdditionalProperties(t)
  );

  for (const model of codeModel.types) {
    if (model.type === "combined") {
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
// ====== TYPE BUILDERS ======
function buildEnumModel(
  model: ModularType
): OptionalKind<TypeAliasDeclarationStructure> {
  const valueType = model.valueType?.type === "string" ? "string" : "number";
  return {
    name: model.name!,
    isExported: true,
    docs: [...getDocsFromDescription(model.description)],
    type: buildEnumType()
  };

  function buildEnumType() {
    return model.isFixed || !model.isNonExhaustive
      ? getEnumValues(" | ")
      : valueType;
  }

  function getEnumValues(separator: string = ", ") {
    const splitWord = valueType === "string" ? `"` : ``;
    return (model.values ?? [])
      .map((v) => `${splitWord}${v.value}${splitWord}`)
      .join(separator);
  }
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

// ====== MAIN FUNCTIONS ======
/**
 * This function creates the file containing all the models defined in TypeSpec
 */
export function buildModels(
  subClient: Client,
  codeModel: ModularCodeModel
): SourceFile | undefined {
  // We are generating both models and enums here
  const coreClientTypes = new Set<string>();
  const coreLroTypes = new Set<string>();
  // filter out the models/enums that are anonymous
  const models = extractModels(codeModel).filter((m) => !!m.name);
  const aliases = extractAliases(codeModel);
  // Skip to generate models.ts if there is no any models
  if (models.length === 0 && aliases.length === 0) {
    return;
  }
  const modelsFile = codeModel.project.createSourceFile(
    getModularModelFilePath(codeModel, subClient)
  );
  for (const model of models) {
    if (model.type === "enum") {
      if (modelsFile.getTypeAlias(model.name!)) {
        // If the enum is already defined, we don't need to do anything
        continue;
      }
      const enumAlias = buildEnumModel(model);

      if (model.isNonExhaustive && model.name) {
        modelsFile.addEnum({
          name: `Known${model.name}`,
          isExported: true,
          members:
            model.values?.map((v) => ({
              name: v.value,
              value: v.value,
              docs: [v.value]
            })) ?? [],
          docs: [
            `Known values of {@link ${model.name}} that the service accepts.`
          ]
        });
        const description = getExtensibleEnumDescription(model);
        if (description) {
          enumAlias.docs = [description];
        }
      }
      modelsFile.addTypeAlias(enumAlias);
    } else {
      const modelInterface = buildModelInterface(model, {
        coreClientTypes,
        coreLroTypes
      });

      model.parents?.forEach((p) =>
        modelInterface.extends.push(p.alias ?? getType(p, p.format).name)
      );
      if (isModelWithAdditionalProperties(model)) {
        addExtendedDictInfo(
          model,
          modelInterface,
          codeModel.modularOptions.compatibilityMode
        );
      }

      if (!modelsFile.getInterface(modelInterface.name)) {
        modelsFile.addInterface(modelInterface);
      }

      // Generate a serializer function next to each model
      const serializerFunction = buildModelSerializer(
        model,
        codeModel.runtimeImports
      );

      if (
        serializerFunction &&
        !modelsFile.getFunction(toCamelCase(modelInterface.name + "Serializer"))
      ) {
        modelsFile.addStatements(serializerFunction);
      }
      addImportBySymbol("serializeRecord", modelsFile);
      modelsFile.fixUnusedIdentifiers();
    }
  }

  const projectRootFromModels = codeModel.clients.length > 1 ? "../.." : "../";
  addImportsToFiles(codeModel.runtimeImports, modelsFile, {
    serializerHelpers: path.posix.join(
      projectRootFromModels,
      "helpers",
      "serializerHelpers.js"
    )
  });

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

  if (coreLroTypes.size > 0) {
    modelsFile.addImportDeclarations([
      {
        moduleSpecifier: getImportSpecifier(
          "azureCoreLro",
          codeModel.runtimeImports
        ),
        namedImports: Array.from(coreLroTypes).map((t) =>
          t === "CoreOperationStatus"
            ? "OperationStatus as CoreOperationStatus"
            : t
        )
      }
    ]);
  }

  aliases.forEach((alias) => {
    modelsFile.addTypeAlias(buildModelTypeAlias(alias));
    if (!models.includes(alias)) {
      // Generate a serializer function next to each model
      const serializerFunction = buildModelSerializer(
        alias,
        codeModel.runtimeImports
      );
      if (serializerFunction) {
        modelsFile.addStatements(serializerFunction);
      }
    }
  });
  return modelsFile;
}

function getExtensibleEnumDescription(model: ModularType): string | undefined {
  if (!(model.isNonExhaustive && model.name && model.values)) {
    return;
  }
  const valueDescriptions = model.values
    .map((v) => `**${v.value}**${v.description ? `: ${v.description}` : ""}`)
    .join(` \\\n`)
    // Escape the character / to make sure we don't incorrectly announce a comment blocks /** */
    .replace(/^\//g, "\\/")
    .replace(/([^\\])(\/)/g, "$1\\/");
  const enumLink = `{@link Known${model.name}} can be used interchangeably with ${model.name},\n this enum contains the known values that the service supports.`;

  return [
    `${model.description} \\`,
    enumLink,
    `### Known values supported by the service`,
    valueDescriptions
  ].join(" \n");
}

function addExtendedDictInfo(
  model: ModularType,
  modelInterface: InterfaceStructure,
  compatibilityMode: boolean = false
) {
  if (
    (model.properties &&
      model.properties.length > 0 &&
      model.elementType &&
      model.properties?.every((p) => {
        return getType(model.elementType!)?.name.includes(getType(p.type).name);
      })) ||
    (model.properties?.length === 0 && model.elementType)
  ) {
    modelInterface.extends.push(
      `Record<string, ${getType(model.elementType!).name ?? "any"}>`
    );
  } else if (compatibilityMode) {
    modelInterface.extends.push(`Record<string, any>`);
  } else {
    modelInterface.properties?.push({
      name: "additionalProperties",
      docs: ["Additional properties"],
      hasQuestionToken: true,
      isReadonly: false,
      type: `Record<string, ${getType(model.elementType!).name ?? "any"}>`
    });
  }
}

export function buildModelTypeAlias(model: ModularType) {
  return {
    name: model.name!,
    isExported: true,
    docs: ["Alias for " + model.name],
    type: model.aliasType!
  };
}

export function buildModelsOptions(
  client: Client,
  codeModel: ModularCodeModel
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

  modelOptionsFile.fixMissingImports(
    {},
    {
      importModuleSpecifierPreference: "shortest",
      importModuleSpecifierEnding: "js"
    }
  );
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
