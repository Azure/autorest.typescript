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
import { createTypeSpecLibrary } from "@typespec/compiler";
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

const EmitterOptionsSchema = {
  type: "object",
  additionalProperties: true
} as const;

export const $lib = createTypeSpecLibrary({
  name: "@azure-tools/typespec-ts-pristine",
  capabilities: {
    dryRun: true
  },
  diagnostics: {},
  emitter: {
    options: EmitterOptionsSchema
  }
});

/**
 * Main emitter entry point. Called by the TypeSpec compiler via $onEmit.
 *
 * @param context - TypeSpec emit context (contains program + options)
 * @returns Array of output files to write to disk
 */
export async function emit(context: EmitContext<Record<string, any>>): Promise<OutputFile[]> {
  // Phase 1: Adapt TCGC output into our language-specific IR
  const codeModel: TSCodeModel = await adaptSdkContext(context);

  // Phase 2: (Reserved) IR-level transforms — none needed yet.
  // No dedupe passes, no fixup loops. If you're adding one, fix the adapter instead.

  // Phase 3: Render IR into TypeScript source files
  const files: OutputFile[] = render(codeModel);

  return files;
}

export async function $onEmit(context: EmitContext<Record<string, any>>): Promise<void> {
  const files = await emit(context);
  for (const file of files) {
    await context.program.host.writeFile(`${context.emitterOutputDir}/${file.path}`, file.content);
  }
}

export { adaptSdkContext } from "./tcgcadapter/index.js";
export type { TSCodeModel } from "./codemodel/index.js";
export { render, renderModels } from "./codegen/index.js";
