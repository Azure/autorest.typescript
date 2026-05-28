// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @azure-tools/typespec-ts-pristine — North-star TypeScript emitter.
 *
 * Three-phase pipeline:
 *   1. adapt()  — TCGC SDK context → language-specific IR (code model)
 *   2. build()  — (reserved for IR transformations / enrichment)
 *   3. render() — code model → TypeScript source files
 *
 * This is the only file that orchestrates the pipeline. Each phase is a
 * one-liner delegation to a focused module.
 */

import type { EmitContext } from "@typespec/compiler";
import { adaptSdkContext } from "./tcgcadapter/index.js";
import type { TSCodeModel } from "./codemodel/index.js";
import { render } from "./codegen/index.js";

/** Output file descriptor produced by the renderer. */
export interface OutputFile {
  /** Relative path from output root (e.g., "src/models/index.ts") */
  path: string;
  /** File content as a string */
  content: string;
}

/**
 * Main emitter entry point. Called by the TypeSpec compiler via $onEmit.
 *
 * @param context - TypeSpec emit context (contains program + options)
 * @returns Array of output files to write to disk
 */
export async function emit(context: EmitContext): Promise<OutputFile[]> {
  // Phase 1: Adapt TCGC output into our language-specific IR
  const codeModel: TSCodeModel = adaptSdkContext(context);

  // Phase 2: (Reserved) IR-level transforms — none needed yet.
  // No dedupe passes, no fixup loops. If you're adding one, fix the adapter instead.

  // Phase 3: Render IR into TypeScript source files
  const files: OutputFile[] = render(codeModel);

  return files;
}

export { adaptSdkContext } from "./tcgcadapter/index.js";
export type { TSCodeModel } from "./codemodel/index.js";
export { render } from "./codegen/index.js";
