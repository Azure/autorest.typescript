import { Project, SourceFile } from "ts-morph";
import type {
  TSCodeModel,
  TSEnum,
  TSModel,
  TSUnion
} from "../codemodel/index.js";
import type { SdkContext } from "../utils/interfaces.js";
import {
  flattenPropertyModelMap,
  emitQueue
} from "../framework/hooks/sdkTypes.js";
import {
  addSerializationFunctions,
  emitType,
  getModelNamespaces,
  getModelsPath
} from "../modular/emitModels.js";

type ModelDeclaration = TSModel | TSEnum | TSUnion;

/**
 * Emit model, enum, and union files from the code model.
 *
 * Serializers stay on the legacy helpers for now, but file selection and the
 * declaration walk come from the new code model.
 */
export function emitModelFiles(
  project: Project,
  codeModel: TSCodeModel,
  sdkContext: SdkContext
): SourceFile[] {
  const declarations: ModelDeclaration[] = [
    ...codeModel.models,
    ...codeModel.enums,
    ...codeModel.unions
  ];

  for (const declaration of declarations) {
    const sdkType = findSdkType(sdkContext, declaration);
    if (!sdkType) {
      continue;
    }

    const sourceFile = getOrCreateModelsFile(
      project,
      codeModel.settings.sourceRoot,
      declaration.namespace
    );
    emitType(sdkContext, sdkType, sourceFile);
  }

  for (const type of emitQueue) {
    if (
      type.kind !== "array" &&
      type.kind !== "dict" &&
      type.kind !== "nullable"
    ) {
      continue;
    }

    const sourceFile = getOrCreateModelsFile(
      project,
      codeModel.settings.sourceRoot,
      getModelNamespaces(sdkContext, type)
    );
    emitType(sdkContext, type, sourceFile);
  }

  for (const [property] of flattenPropertyModelMap) {
    const sourceFile = getOrCreateModelsFile(
      project,
      codeModel.settings.sourceRoot,
      getModelNamespaces(sdkContext, property.type)
    );
    addSerializationFunctions(sdkContext, property, sourceFile);
  }

  return cleanupEmptyModelFiles(project, codeModel.settings.sourceRoot);
}

function findSdkType(
  sdkContext: SdkContext,
  declaration: ModelDeclaration
):
  | SdkContext["sdkPackage"]["models"][number]
  | SdkContext["sdkPackage"]["enums"][number]
  | SdkContext["sdkPackage"]["unions"][number]
  | undefined {
  const candidates = [
    ...sdkContext.sdkPackage.models,
    ...sdkContext.sdkPackage.enums,
    ...sdkContext.sdkPackage.unions
  ];

  return candidates.find(
    (candidate) =>
      candidate.name === declaration.name &&
      sameNamespace(
        getModelNamespaces(sdkContext, candidate),
        declaration.namespace
      )
  );
}

function sameNamespace(left: string[], right: string[]): boolean {
  return (
    left.length === right.length &&
    left.every((segment, index) => segment === right[index])
  );
}

function getOrCreateModelsFile(
  project: Project,
  sourceRoot: string,
  namespace: string[] = []
): SourceFile {
  const filePath = getModelsPath(sourceRoot, namespace);
  let sourceFile = project.getSourceFile(filePath);
  if (!sourceFile) {
    sourceFile = project.createSourceFile(filePath);
    sourceFile.addStatements(`/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */`);
  }

  return sourceFile;
}

function cleanupEmptyModelFiles(
  project: Project,
  sourceRoot: string
): SourceFile[] {
  const result: SourceFile[] = [];

  for (const modelFile of project.getSourceFiles(
    `${sourceRoot}/models/**/*.ts`
  )) {
    if (
      modelFile.getInterfaces().length === 0 &&
      modelFile.getTypeAliases().length === 0 &&
      modelFile.getEnums().length === 0
    ) {
      project.removeSourceFile(modelFile);
      continue;
    }

    result.push(modelFile);
  }

  return result;
}
