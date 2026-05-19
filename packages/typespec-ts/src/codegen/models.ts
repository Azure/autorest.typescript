import { Project, SourceFile } from "ts-morph";
import type { TSCodeModel } from "../codemodel/index.js";
import type { SdkContext } from "../utils/interfaces.js";
import {
  emitQueue,
  flattenPropertyModelMap
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
 * Serializers stay on the legacy helpers for now, but model selection comes
 * from the filtered IR rather than the global TCGC emit queue.
 */
export function emitModelFiles(
  project: Project,
  codeModel: TSCodeModel,
  sdkContext: SdkContext
): SourceFile[] {
  const rawModelLookup = buildRawTypeLookup(
    sdkContext.sdkPackage.models,
    sdkContext
  );
  const rawEnumLookup = buildRawTypeLookup(
    sdkContext.sdkPackage.enums,
    sdkContext
  );
  const rawUnionLookup = buildRawTypeLookup(
    sdkContext.sdkPackage.unions,
    sdkContext
  );
  const includedModelKeys = new Set<string>();

  for (const model of codeModel.models) {
    const rawModel = rawModelLookup.get(
      getTypeKey(model.name, model.namespace)
    );
    if (!rawModel) {
      continue;
    }

    includedModelKeys.add(getRawTypeKey(rawModel, sdkContext));
    const sourceFile = getOrCreateModelsFile(
      project,
      codeModel.settings.sourceRoot,
      model.namespace
    );
    emitType(sdkContext, rawModel, sourceFile);
  }

  for (const enumType of codeModel.enums) {
    const rawEnum = rawEnumLookup.get(
      getTypeKey(enumType.name, enumType.namespace)
    );
    if (!rawEnum) {
      continue;
    }

    const sourceFile = getOrCreateModelsFile(
      project,
      codeModel.settings.sourceRoot,
      enumType.namespace
    );
    emitType(sdkContext, rawEnum, sourceFile);
  }

  for (const unionType of codeModel.unions) {
    const rawUnion = rawUnionLookup.get(
      getTypeKey(unionType.name, unionType.namespace)
    );
    if (!rawUnion) {
      continue;
    }

    const sourceFile = getOrCreateModelsFile(
      project,
      codeModel.settings.sourceRoot,
      unionType.namespace
    );
    emitType(sdkContext, rawUnion, sourceFile);
  }

  // Strategy A (B8 fix): emit array/dict serializer helpers that the serializer builders
  // still reference via refkey(type, "serializer"/"deserializer"). The legacy emitTypes()
  // in emitModels.ts handled this by walking the full emitQueue; the new filtered-IR
  // renderer only walks codeModel.models/enums/unions, so those helpers were never
  // registered with the binder — causing __PLACEHOLDER_*__ tokens to leak.
  //
  // TODO: migrate array/dict helper types into TSCodeModel IR so the renderer owns them
  // explicitly rather than relying on the global emitQueue side-channel.
  // See: .squad/decisions/inbox/dallas-models-helpers.md
  for (const type of emitQueue) {
    if (type.kind !== "array" && type.kind !== "dict") {
      continue;
    }
    const sourceFile = getOrCreateModelsFile(
      project,
      codeModel.settings.sourceRoot,
      getModelNamespaces(sdkContext, type)
    );
    emitType(sdkContext, type, sourceFile);
  }

  for (const [property, baseModel] of flattenPropertyModelMap) {
    if (!includedModelKeys.has(getRawTypeKey(baseModel, sdkContext))) {
      continue;
    }

    const sourceFile = getOrCreateModelsFile(
      project,
      codeModel.settings.sourceRoot,
      getModelNamespaces(sdkContext, property.type)
    );
    addSerializationFunctions(sdkContext, property, sourceFile);
  }

  return cleanupEmptyModelFiles(project, codeModel.settings.sourceRoot);
}

function buildRawTypeLookup<T extends { name: string }>(
  types: readonly T[],
  sdkContext: SdkContext
): Map<string, T> {
  return new Map(
    types.map((type) => [getRawTypeKey(type, sdkContext), type] as const)
  );
}

function getRawTypeKey(type: { name: string }, sdkContext: SdkContext): string {
  return getTypeKey(type.name, getModelNamespaces(sdkContext, type as any));
}

function getTypeKey(name: string, namespace: string[]): string {
  return `${namespace.join("/")}:${name}`;
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
