import {
  SdkArrayType,
  SdkDictionaryType,
  SdkNullableType,
  SdkType
} from "@azure-tools/typespec-client-generator-core";
import { Project, SourceFile } from "ts-morph";
import type { TSCodeModel } from "../codemodel/index.js";
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
  for (const type of emitQueue) {
    if (!isGenerableType(type)) {
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

function isGenerableType(
  type: SdkType
): type is SdkArrayType | SdkDictionaryType | SdkNullableType | SdkType {
  return (
    type.kind === "model" ||
    type.kind === "enum" ||
    type.kind === "union" ||
    type.kind === "dict" ||
    type.kind === "array" ||
    type.kind === "nullable"
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
