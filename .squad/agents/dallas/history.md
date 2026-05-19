# Project Context

- **Owner:** Maor Leger
- **Project:** autorest.typescript — TypeSpec TS emitter refactor to align with Rust/Go emitter architecture.
- **Stack:** TypeScript, pnpm, TypeSpec, ts-morph, vitest, TCGC.
- **Key paths:**
  - Emitter source: `packages/typespec-ts/src/` (modular/, rlc/, codemodel/, framework/, static-helpers/)
  - Shared RLC: `packages/rlc-common/`
  - Smoke fixtures: `packages/typespec-test/test/`
  - Unit tests: `packages/typespec-ts/test/unit` (RLC), `packages/typespec-ts/test/modularUnit` (Modular)
  - Integration: `test/integration`, `test/modularIntegration`, `test/azureIntegration`, `test/azureModularIntegration`
- **Build/test commands:** `pnpm install`, `pnpm build`, `pnpm format`, `npm run unit-test`, `npm run lint`, `npm run integration-test-ci:{rlc|modular|azure-rlc|azure-modular}`, `npm run smoke-test`.
- **Reference architectures:** `~/workspace/emitter-chain/typespec-rust`, `~/workspace/emitter-chain/autorest.go`, doc at `/home/maorleger/workspace/emitter-chain/go-rust.md`.
- **Hands-off:** `packages/autorest.typescript/` is in maintenance mode.
- **Existing codemodel pattern:** `src/codemodel/` already uses types.ts + build-*.ts + render-*.ts separation — likely the seed for the broader refactor.
- **Created:** 2026-05-15

## Learnings

<!-- Append new learnings below. Each entry is something lasting about the project. -->

### 2026-05-15 — Stage 1 client context pipeline swap

- Replaced the modular `$onEmit` client-context call in `packages/typespec-ts/src/index.ts` from `buildClientContext(dpgContext, subClient, modularEmitterOptions)` to `adaptSingleClient(subClient, dpgContext, modularEmitterOptions)` plus `emitClientContext(project, tsClient, generationSettings)`.
- Kept `buildOperationFiles`, `buildClassicalClient`, and the rest of the modular source pipeline unchanged; only the client context path was swapped in-place.
- Adjusted `packages/typespec-ts/src/codegen/clients.ts` to preserve prior client-context output semantics, including nested subfolder paths, api-version required/interface behavior, options typing, and passthrough of endpoint-assigned optional params.
- Validation: `pnpm build` passed, `cd packages/typespec-ts && npm run unit-test` passed, and `cd packages/typespec-ts && npm run copy:typespec && npm run integration-test-ci:modular` passed. `npm run lint` currently fails with a pre-existing ESLint/@typescript-eslint rule loading error while linting `src/codegen/clients.ts`.

### 2026-05-15 — Ripley Staged Refactor Plan: Three-Layer Pipeline (appended by Scribe)

**Staged refactor plan approved and ready for implementation:**

Ripley completed a 9-stage refactor plan (`.squad/decisions/ripley-staged-refactor-plan.md`) to decouple TCGC from rendering:

1. **Three-layer architecture:**
   - **CodeModel (IR):** `TSCodeModel` capturing emitter intent, zero TCGC.
   - **TCGC Adapter:** Transforms TCGC → CodeModel; isolated in `src/tcgcadapter/`.
   - **CodeGen:** Renders CodeModel → ts-morph AST; consumed by `src/codegen/`.

2. **Stage structure (Stages 1–9; Stage 10 dropped):**
   - Stages 1–2: Adapter validation (TCGC→CodeModel only).
   - Stages 3–6: Codegen expansion (clients, operations, models, classicalClient).
   - Stages 7–9: Helper migration, cleanup, polish.

3. **Key directives applied:**
   - ✅ No feature flag (swap-in-place migration).
   - ✅ Adapter unit tests as primary validation surface.
   - ✅ Readability-first file organization (monolithic until needed).
   - ✅ Skip lint guard (trust patterns).
   - ✅ Skip Stage 10 (package separation).

**Your work (PRD 3 onwards) aligns with Stages 3–6.** See full plan for stage boundaries and test matrix.

### 2026-05-15 — Lambert Cross-Agent Summary: Architecture Analysis Findings (appended by Scribe)

**From Lambert's comparative analysis** (filed to decisions.md 2026-05-15):

Key findings for **Dallas** (codegen layer development):
1. **Codegen target is well-defined.** The POC's `src/codegen/` provides a template. `emitFromCodeModel()` orchestrator + `emitClientContext()` renderer (for clients.ts category) show the pattern. Zero TCGC imports in this layer — verify via lint.
2. **IR shape (`TSCodeModel`) needs extension.** Current POC covers client context files only. Add to IR for **your** work scope:
   - `TSOperationFile` for operations (PRD 3)
   - `TSModel`, `TSEnum`, `TSUnion` for types (PRD 7)
   - Model-scoped types: `TSProperty`, `TSPropertyConstraint`, `TSModelBase` (reference Rust's `codemodel/types.ts` pattern)
3. **Adapter helpers reuse is pragmatic but temporary.** POC imports from old `src/modular/helpers/` (clientHelpers, operationHelpers). As each old `build*` migrates, its helpers either move into `src/tcgcadapter/` (if TCGC-aware) or into `src/codegen/` (if IR-only). Plan this as part of each adapter extension.
4. **Rendering machinery is stable.** `resolveReference()` and `useDependencies()` from framework are acceptable as narrow hooks in codegen (not TCGC leakage). Equivalent to Go's `FsFacilities` injector — a contract for framework services.
5. **Test all codegen outputs via integration suites.** Each category (operations, models, classicalClient, etc.) is tested by modular/azure-modular integration suites; smoke test catches compilation failures. Use these as your regression oracle.

### 2026-05-15 — Stage 0 Infrastructure Verification

- The `origin/poc-emitter-separation` POC commit `4459962` was already present on `squad-rewrite` under commit `3542d9e8c`, with the same additive `src/codemodel/`, `src/tcgcadapter/`, and `src/codegen/` files plus the fixture `.d.ts` deletions.
- Verified the Stage 0 infrastructure remains unwired to `$onEmit`; no existing emitter entrypoints were changed as part of this slice.
- `pnpm build` passed at repo root and `npm run unit-test` passed in `packages/typespec-ts/` without needing follow-up fixes.

### 2026-05-15 — Stage 2 operation IR expansion

- `packages/typespec-ts/src/codemodel/index.ts` now models operations with data-only shapes: `TSMethod`, `TSParameter`, `TSReturnType`, `TSRoute`, and `TSOperationGroup`.
- `packages/typespec-ts/src/tcgcadapter/adapter.ts` now exports `adaptMethods()` and `adaptOperationGroups()` so operation extraction can be tested separately from full-client adaptation.
- The operation-group IR keeps `prefixes` alongside `name` and `methods` so future rendering can recover nested group paths without reaching back into TCGC.
- Validation for this slice was `pnpm build` at repo root and `npm run unit-test` in `packages/typespec-ts`.

### 2026-05-16 — Stage 4 operations codegen wiring

- `packages/typespec-ts/src/codegen/operations.ts` now serves as the modular operations renderer, consuming `TSClient`/`TSOperationGroup` IR and emitting stable `api/**/operations.ts` files directly through ts-morph.
- The emitter path keeps the generated operation helpers deterministic by sorting operation files by their normalized path and running `fixMissingImports(..., { importModuleSpecifierEnding: "js" })` before trimming unused imports.
- Validation for this slice was `pnpm build`, `cd packages/typespec-ts && npm run unit-test`, and `cd packages/typespec-ts && npm run copy:typespec && npm run integration-test-ci:modular`.

### 2026-05-19 — squad-rewrite regression fixes

- Restored top-level `api/**` recursion in `packages/typespec-ts/src/codegen/indexFiles.ts` so the root barrel once again reaches generated `./api/<resource>/index.js` subbarrels and their `*OptionalParams` exports.
- Changed `packages/typespec-ts/src/codegen/clients.ts` to respect adapted `TSClientParameter.required` metadata for client contexts, and added a modular unit test that keeps defaulted client `apiVersion` optional in the generated `*Context` interface.
- Switched `packages/typespec-ts/src/codegen/models.ts` to select raw model/enum/union declarations from filtered `TSCodeModel` IR lookups instead of the legacy global emit queue, which keeps paging `*ListResult` shapes internal unless the adapter actually exposes them.
- Triaged user report regressions: 4 confirmed (indexFiles subpath barrel, clients apiVersion requiredness, models paging leak, dedupe workaround); 1 misdiagnosed (coreClient import text churn); 2 expected (import path normalization, beginX wrapper reappearance).
- Commits: d24c6178d (indexFiles), e35c3244d (apiVersion), e8b5a8022 (models). Pushed origin/squad-rewrite tip 56aa9c54f.
- Validation: `pnpm build` ✅, `npm run unit-test` in `packages/typespec-ts/` ✅.

---

## 2026-05-19T23:30:29.807+00:00 — B8 Fix: Array/dict serializer helper placeholders

**Task:** Fix P0 regression introduced by e8b5a8022 where `src/models/models.ts` contained
unresolved `__PLACEHOLDER_*__` tokens for array/dict serializer helpers.

**Strategy chosen:** Strategy A (Renderer emits the missing helpers)

**Rationale:** Strategy B would require adding `helperTypes` to `TSCodeModel` and updating the
tcgcadapter — a broader change. Strategy A is a targeted, correct fix: the renderer simply
needs to walk the same `emitQueue` entries (array/dict kinds) that the legacy `emitTypes()`
did, calling `emitType()` to register the serializer/deserializer refkeys with the binder.
A TODO comment and follow-up note were left for Strategy B migration.

**Files touched:**
- `packages/typespec-ts/src/codegen/models.ts` — import `emitQueue`; add loop for array/dict types
- `packages/typespec-ts/test/modularUnit/models-helpers.spec.ts` — new regression-locking tests
- `.squad/decisions/inbox/dallas-models-helpers.md` — follow-up note for IR migration

**Validation:**
- `pnpm build` — passed
- `npm run unit-test` (typespec-ts) — 664 tests passed, 0 failures
- Regenerated `NetworkAnalytics.Management` (azure-modular tag) — zero `__PLACEHOLDER_` matches
- `tsc --noEmit` on generated NetworkAnalytics package — only missing `@azure/identity` in samples (pre-existing, unrelated), zero TS2304 errors
- B8 regression tests (array + dict) — both pass green

**Open follow-up:** `.squad/decisions/inbox/dallas-models-helpers.md` — migrate array/dict helper types into TSCodeModel IR to remove `emitQueue` side-channel dependency from the codegen layer.
