// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Codegen orchestrator — walks TSCodeModel and dispatches to file generators.
 *
 * Analogous to Go's `Emitter.emit()` and Rust's `CodeGenerator.emitContent()`.
 */

import { Project, SourceFile } from "ts-morph";
import type { TSCodeModel } from "../codemodel/index.js";
import { emitClassicalClient } from "./classicalClient.js";
import { emitClientContext } from "./clients.js";
import { emitOperations } from "./operations.js";

/**
 * Generate all source files from the code model.
 *
 * This is the main entry point for codegen. It walks the code model
 * tree and generates source files for each component.
 *
 * Currently supports: client context files.
 * Returns the list of generated source files.
 */
export function emitFromCodeModel(
  project: Project,
  codeModel: TSCodeModel
): SourceFile[] {
  const files: SourceFile[] = [];

  for (const client of codeModel.clients) {
    files.push(...emitOperations(project, client, codeModel.settings));

    const contextFile = emitClientContext(project, client, codeModel.settings);
    if (contextFile) {
      files.push(contextFile);
    }

    const classicalClientFile = emitClassicalClient(
      project,
      client,
      codeModel.settings
    );
    if (classicalClientFile) {
      files.push(classicalClientFile);
    }
  }

  return files;
}
