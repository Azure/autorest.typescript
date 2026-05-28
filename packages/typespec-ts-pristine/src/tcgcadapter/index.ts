// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * TCGC Adapter — Phase 1 of the emitter pipeline.
 *
 * This is the ONLY module that imports from @azure-tools/typespec-client-generator-core.
 * Its job is to consume the TCGC SdkContext and produce a TSCodeModel — our
 * language-specific intermediate representation.
 *
 * Downstream modules (codemodel, codegen) MUST NOT import TCGC types.
 * If you need data from TCGC in the renderer, add it to the code model here.
 *
 * Pattern: same as typespec-rust's `tcgcadapter/` and autorest.go's `TypeAdapter`.
 */

import type { EmitContext } from "@typespec/compiler";
import type { TSCodeModel } from "../codemodel/index.js";

/**
 * Adapts a TypeSpec emit context into a fully-resolved TSCodeModel.
 *
 * Internally calls createSdkContext() to get TCGC's language-neutral model,
 * then maps every TCGC construct into our TypeScript-specific IR types.
 *
 * @param context - TypeSpec emit context
 * @returns Complete code model ready for rendering
 */
export function adaptSdkContext(_context: EmitContext): TSCodeModel {
  // TODO: Implementation in next phase.
  // Steps:
  //   1. createSdkContext(context, "@azure-tools/typespec-ts-pristine")
  //   2. adaptClients(sdkContext) → TSClient[]
  //   3. adaptModels(sdkContext) → TSModel[]
  //   4. adaptEnums(sdkContext) → TSEnum[]
  //   5. adaptUnions(sdkContext) → TSUnion[]
  //   6. resolveSettings(context) → TSGenerationSettings
  throw new Error("adaptSdkContext: not yet implemented");
}

/**
 * Adapts TCGC clients into TSClient IR nodes.
 * Maps client hierarchy, parameters, methods, and operation groups.
 */
export function _adaptClients(): void {
  throw new Error("_adaptClients: not yet implemented");
}

/**
 * Adapts TCGC model types into TSModel IR nodes.
 * Maps properties, inheritance, discriminators, and additional properties.
 */
export function _adaptModels(): void {
  throw new Error("_adaptModels: not yet implemented");
}

/**
 * Adapts TCGC enum types into TSEnum IR nodes.
 * Maps members, fixed/extensible semantics, and value types.
 */
export function _adaptEnums(): void {
  throw new Error("_adaptEnums: not yet implemented");
}

/**
 * Adapts TCGC union types into TSUnion IR nodes.
 * Maps variants and discriminator metadata.
 */
export function _adaptUnions(): void {
  throw new Error("_adaptUnions: not yet implemented");
}

/**
 * Resolves emitter options and program metadata into TSGenerationSettings.
 */
export function _resolveSettings(): void {
  throw new Error("_resolveSettings: not yet implemented");
}
