import { SourceFile } from "ts-morph";
import { getType } from "./helpers/typeHelpers.js";
import { Client, ModularCodeModel, Type } from "./modularCodeModel.js";
import * as path from "path";
import { getDocsFromDescription } from "./helpers/docsHelpers.js";
import { buildOperationOptions } from "./buildOperations.js";

/**
 * This function creates the file containing all the models defined in TypeSpec
 */
export function buildModels(
  codeModel: ModularCodeModel,
  subClient: Client
): SourceFile | undefined {
  // We are generating both models and enums here
  const coreClientTypes = new Set<string>();
  const models = codeModel.types.filter(
    (t) =>
      (t.type === "model" || t.type === "enum") && !isAzureCoreErrorSdkType(t)
  );

  // Skip to generate models.ts if there is no any models
  if (models.length === 0) {
    return;
  }
  const srcPath = codeModel.modularOptions.sourceRoot;
  const modelsFile = codeModel.project.createSourceFile(
    path.join(`${srcPath}/`, subClient.subfolder ?? "", `models/models.ts`)
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

  for (const model of models) {
    const properties = model.properties ?? [];
    const typeMetadata = getType(model);
    let typeName = typeMetadata.name;
    if (typeMetadata.modifier === "Array") {
      typeName = `${typeName}[]`;
    }
    if (model.type === "enum") {
      if (modelsFile.getTypeAlias(model.name!)) {
        // If the enum is already defined, we don't need to do anything
        continue;
      }
      modelsFile.addTypeAlias({
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
      });
    } else {
      if (!model.name) {
        throw new Error("Can't generate a model that has no name");
      }
      const modelInterface = {
        name: model.name,
        isExported: true,
        docs: getDocsFromDescription(model.description),
        extends: [] as string[],
        properties: properties.map((p) => {
          const propertyMetadata = getType(p.type);
          let propertyTypeName = propertyMetadata.name;
          if (isAzureCoreErrorSdkType(p.type)) {
            propertyTypeName = isAzureCoreErrorSdkType(p.type)
              ? getCoreClientErrorType(propertyTypeName)
              : propertyTypeName;
          }
          if (propertyMetadata.modifier === "Array") {
            propertyTypeName = `${propertyTypeName}[]`;
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
      model.type === "model"
        ? model.parents?.forEach((p) =>
            modelInterface.extends.push(getType(p).name)
          )
        : undefined;
      modelsFile.addInterface(modelInterface);
    }
  }

  function getCoreClientErrorType(name: string) {
    const coreClientType: string = name === "Error" ? "ErrorModel" : name;
    coreClientTypes.add(coreClientType);
    return coreClientType;
  }

  if (coreClientTypes.size > 0) {
    modelsFile.addImportDeclarations([
      {
        moduleSpecifier: "@azure-rest/core-client",
        namedImports: Array.from(coreClientTypes)
      }
    ]);
  }

  return modelsFile;
}

function isAzureCoreErrorSdkType(t: Type) {
  return (
    t.name &&
    ["error", "errormodel", "innererror", "errorresponse"].includes(
      t.name.toLowerCase()
    ) &&
    t.isCoreErrorType === true
  );
}

export function buildModelsOptions(
  codeModel: ModularCodeModel,
  client: Client
) {
  const modelOptionsFile = codeModel.project.createSourceFile(
    `${codeModel.modularOptions.sourceRoot}/${client.subfolder}/models/options.ts`,
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
      moduleSpecifier: "@azure-rest/core-client",
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
}
