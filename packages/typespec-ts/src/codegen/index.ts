// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Codegen emitter — walks the TSCodeModel tree and generates source files.
 *
 * This is the TypeScript equivalent of:
 * - Go's `codegen.go/src/emitter.ts` → `Emitter.emit()`
 * - Rust's `src/codegen/codeGenerator.ts` → `CodeGenerator.emitContent()`
 *
 * This layer has ZERO TCGC imports. It consumes only the code model types.
 * It uses ts-morph for file generation and the framework binder for
 * import/reference resolution.
 */

export { emitFromCodeModel } from "./emitter.js";
