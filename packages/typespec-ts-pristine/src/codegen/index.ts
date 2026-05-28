// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Codegen — Phase 3 of the emitter pipeline.
 *
 * This module consumes the TSCodeModel and produces TypeScript source file
 * strings. It has ZERO knowledge of TCGC — it reads only the code model.
 *
 * One function per output file kind. Each function documents:
 * - Which IR fields it consumes
 * - What output file(s) it produces
 *
 * Pattern: same as Go's `codegen.go/` recursive emit and Rust's `codegen/`.
 */

import { Project, QuoteKind, StructureKind } from "ts-morph";
import type {
  TSCodeModel,
  TSClient,
  TSModel,
  TSEnum,
  TSUnion,
  TSOperation,
  TSSerializerGroup,
  TSHelperFile,
  TSProperty
} from "../codemodel/index.js";

/** A rendered output file. */
export interface RenderedFile {
  /** Relative path from output root */
  path: string;
  /** File content */
  content: string;
}

/**
 * Renders a complete TSCodeModel into output files.
 *
 * Orchestrates all per-file renderers and collects their output.
 *
 * @param codeModel - The fully-resolved code model
 * @returns All files to write
 */
export function render(codeModel: TSCodeModel): RenderedFile[] {
  return renderModels(codeModel);
}

/**
 * Renders model interfaces and enum type aliases.
 *
 * Consumes: `TSCodeModel.models`, `TSCodeModel.enums`
 * Produces: `src/models/models.ts`
 */
export function renderModels(codeModel: Pick<TSCodeModel, "models" | "enums">): RenderedFile[] {
  const project = new Project({
    manipulationSettings: {
      quoteKind: QuoteKind.Double,
      useTrailingCommas: true
    }
  });
  const sourceFile = project.createSourceFile("models.ts", "", { overwrite: true });

  sourceFile.addStatements(`// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */`);

  for (const model of codeModel.models) {
    renderModel(sourceFile, model);
  }

  for (const enumType of codeModel.enums) {
    renderEnum(sourceFile, enumType);
  }

  sourceFile.formatText({ indentSize: 2 });
  return [{ path: "src/models/models.ts", content: sourceFile.getFullText() }];
}

function renderModel(sourceFile: import("ts-morph").SourceFile, model: TSModel): void {
  addDocs(sourceFile, model.docs);
  const declaration = sourceFile.addInterface({
    name: model.name,
    isExported: true,
    extends: model.baseModel ? [model.baseModel] : undefined,
    properties: model.properties.map(getPropertyStructure)
  });

  if (model.additionalPropertiesType) {
    declaration.addIndexSignature({
      keyName: "propertyName",
      keyType: "string",
      returnType: model.additionalPropertiesType
    });
  }
}

function getPropertyStructure(property: TSProperty): import("ts-morph").PropertySignatureStructure {
  return {
    kind: StructureKind.PropertySignature,
    name: property.name,
    type: property.type,
    hasQuestionToken: property.optional,
    isReadonly: property.readonly,
    docs: property.docs.map((doc) => ({ description: doc }))
  };
}

function renderEnum(sourceFile: import("ts-morph").SourceFile, enumType: TSEnum): void {
  addDocs(sourceFile, enumType.docs);
  if (enumType.isExtensible) {
    sourceFile.addEnum({
      name: `Known${enumType.name}`,
      isExported: true,
      members: enumType.members.map((member) => ({ name: member.name, value: member.value }))
    });
    sourceFile.addTypeAlias({
      name: enumType.name,
      isExported: true,
      type: `string`
    });
    return;
  }

  sourceFile.addTypeAlias({
    name: enumType.name,
    isExported: true,
    type: enumType.members.map((member) => JSON.stringify(member.value)).join(" | ")
  });
}

function addDocs(sourceFile: import("ts-morph").SourceFile, docs: string[]): void {
  if (docs.length === 0) {
    return;
  }

  const lines = docs.map((line) => (line.length === 0 ? " *" : ` * ${line}`));
  sourceFile.addStatements(`/**\n${lines.join("\n")}\n */`);
}

/**
 * Renders enum type aliases and known-values constants.
 *
 * Consumes: `TSCodeModel.enums`
 * Produces: `src/models/enums.ts`
 */
export function renderEnums(_enums: TSEnum[]): RenderedFile[] {
  throw new Error("renderEnums: not yet implemented");
}

/**
 * Renders union type aliases.
 *
 * Consumes: `TSCodeModel.unions`
 * Produces: `src/models/unions.ts`
 */
export function renderUnions(_unions: TSUnion[]): RenderedFile[] {
  throw new Error("renderUnions: not yet implemented");
}

/**
 * Renders client context factories and classical client classes.
 *
 * Consumes: `TSCodeModel.clients` (recursively, including children)
 * Produces: `src/{clientName}Context.ts`, `src/{clientName}.ts`
 */
export function renderClients(_clients: TSClient[]): RenderedFile[] {
  throw new Error("renderClients: not yet implemented");
}

/**
 * Renders operation files — send, deserialize, and public API functions.
 *
 * Consumes: `TSClient.methods` and `TSClient.operationGroups[].operations`
 * Produces: `src/api/{group}/{operation}.ts`
 */
export function renderOperations(_clients: TSClient[]): RenderedFile[] {
  throw new Error("renderOperations: not yet implemented");
}

/**
 * Renders options interfaces for each operation.
 *
 * Consumes: `TSOperation.optionsType` across all clients
 * Produces: `src/api/{group}/options.ts`
 */
export function renderOptions(_operations: TSOperation[]): RenderedFile[] {
  throw new Error("renderOptions: not yet implemented");
}

/**
 * Renders serialization/deserialization helpers.
 *
 * Consumes: `TSCodeModel.serializers` + `TSCodeModel.models`
 * Produces: `src/models/serializers.ts`
 */
export function renderSerializers(
  _serializers: TSSerializerGroup[],
  _models: TSModel[]
): RenderedFile[] {
  throw new Error("renderSerializers: not yet implemented");
}

/**
 * Renders static helper files (paging, polling, auth, etc.).
 *
 * Consumes: `TSCodeModel.helpers`
 * Produces: `src/helpers/{category}.ts`
 */
export function renderHelpers(_helpers: TSHelperFile[]): RenderedFile[] {
  throw new Error("renderHelpers: not yet implemented");
}

/**
 * Renders barrel index files (root, subpath, models, api).
 *
 * Consumes: full `TSCodeModel` (needs to know all exported symbols)
 * Produces: `src/index.ts`, `src/models/index.ts`, `src/api/index.ts`, etc.
 */
export function renderIndexFiles(_codeModel: TSCodeModel): RenderedFile[] {
  throw new Error("renderIndexFiles: not yet implemented");
}

/**
 * Renders package infrastructure files (package.json, tsconfig, etc.).
 *
 * Consumes: `TSCodeModel.settings`
 * Produces: `package.json`, `tsconfig.json`, `api-extractor.json`, etc.
 */
export function renderPackageFiles(_codeModel: TSCodeModel): RenderedFile[] {
  throw new Error("renderPackageFiles: not yet implemented");
}

/**
 * Renders logger file.
 *
 * Consumes: `TSCodeModel.settings.packageName`
 * Produces: `src/logger.ts`
 */
export function renderLogger(_packageName: string): RenderedFile {
  throw new Error("renderLogger: not yet implemented");
}
