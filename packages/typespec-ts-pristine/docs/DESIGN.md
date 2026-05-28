# Design: @azure-tools/typespec-ts-pristine

## What & Why

This package is a clean-room TypeScript emitter for TypeSpec. It follows the
three-layer pipeline architecture proven by `typespec-rust` and `autorest.go`:

```
┌─────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  TypeSpec +  │ ──▶ │  Adapter     │ ──▶ │  Code Model  │ ──▶ │  Renderer    │ ──▶  .ts files
│  TCGC SDK    │     │  (Phase 1)   │     │  (IR)        │     │  (Phase 3)   │
└─────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

**Why rewrite?** The existing `@azure-tools/typespec-ts` emitter grew
organically. Adapter and renderer concerns are fused. TCGC types leak into
rendering logic. Symptom-fix dedupe passes accumulate. This package answers:
*"What would we build if we knew all the requirements and started fresh?"*

The answer is boring. Three layers. Each layer has one job. No clever
metaprogramming. The renderer never imports TCGC. The adapter never emits
strings. The code model is the contract.

---

## Surface Area Inventory

The existing emitter produces the following output file categories. Pristine
must cover all of them to achieve parity:

| # | Output Category | Existing Source Location | IR Driver |
|---|----------------|--------------------------|-----------|
| 1 | **Models** (interfaces/types) | `src/modular/emitModels.ts` | `TSModel[]` |
| 2 | **Enums** (type aliases + known values) | `src/modular/emitModels.ts` | `TSEnum[]` |
| 3 | **Unions** (type aliases) | `src/modular/emitModels.ts` | `TSUnion[]` |
| 4 | **Operations** (send/deserialize/public API) | `src/modular/buildOperations.ts`, `src/codegen/operations.ts` | `TSOperation[]` via `TSClient` |
| 5 | **Client context** (factory + interface) | `src/modular/buildClientContext.ts`, `src/codegen/clients.ts` | `TSClient` |
| 6 | **Classical client** (class wrapper) | `src/modular/buildClassicalClient.ts`, `src/codegen/classicalClient.ts` | `TSClient` |
| 7 | **Classical operation groups** | `src/modular/buildClassicalOperationGroups.ts`, `src/codegen/classicalOperations.ts` | `TSOperationGroup[]` |
| 8 | **Options interfaces** | `src/codegen/apiOptions.ts` | `TSOptionsType` per operation |
| 9 | **Serializers** (JSON/XML) | `src/modular/serialization/` | `TSSerializerGroup[]` + `TSModel[]` |
| 10 | **Paging helpers** | `src/modular/static-helpers-metadata.ts` (PagingHelpers) | `TSPagingConfig` |
| 11 | **Polling/LRO helpers** | `src/modular/static-helpers-metadata.ts` (PollingHelpers) | `TSPollingConfig` |
| 12 | **RestorePoller** | `src/modular/buildRestorePoller.ts`, `src/codegen/lroHelpers.ts` | `TSClient.lroConfig` |
| 13 | **Logger** | `src/modular/emitLoggerFile.ts` | `TSGenerationSettings.packageName` |
| 14 | **Index files** (root, subpath, models, api) | `src/modular/buildRootIndex.ts`, `src/modular/buildSubpathIndex.ts`, `src/codegen/indexFiles.ts` | Full `TSCodeModel` |
| 15 | **Package infrastructure** (package.json, tsconfig, etc.) | `src/modular/buildProjectFiles.ts` | `TSGenerationSettings` |
| 16 | **Samples** | `src/modular/emitSamples.ts` | `TSClient` + `TSOperation` |
| 17 | **Tests** | `src/modular/emitTests.ts` | `TSClient` |
| 18 | **Response type aliases** | `src/codegen/responseTypes.ts` | `TSOperation.returnType` |
| 19 | **Static helpers** (URL template, multipart, platform types) | `src/modular/static-helpers-metadata.ts` | `TSHelperFile[]` |

---

## IR Shapes (The Contract)

Each surface is driven by specific IR types. These are defined in
`src/codemodel/index.ts`. Key types:

| IR Type | Drives | Key Fields |
|---------|--------|------------|
| `TSCodeModel` | Root — everything | clients, models, enums, unions, serializers, helpers, settings |
| `TSGenerationSettings` | Package config, infra files | packageName, flavor, isArm, outputDir |
| `TSClient` | Client context + classical class | name, parameters, endpoint, methods, operationGroups, children |
| `TSOperation` | Operation files + options | name, kind, httpMethod, path, parameters, returnType, optionsType |
| `TSOperationGroup` | Grouped operation files | name, operations |
| `TSModel` | Model interfaces + serializers | name, properties, baseModel, discriminator, needsSerializer |
| `TSEnum` | Enum type aliases | name, members, isExtensible, valueType |
| `TSUnion` | Union type aliases | name, variants, discriminator |
| `TSSerializerGroup` | Serializer files | contentType, models |
| `TSHelperFile` | Static helper copies | outputPath, category |
| `TSPagingConfig` | Paging helper inclusion | hasPaging, itemPropertyPath |
| `TSPollingConfig` | LRO helper inclusion | hasLro, emitRestorePoller |
| `TSParameter` | Shared parameter shape | name, type, required, defaultValue |
| `TSProperty` | Model/options properties | name, type, optional, readonly, serializedName |
| `TSDiscriminator` | Polymorphic hierarchies | propertyName, value, variants |
| `TSOptionsType` | Per-operation options bag | name, properties |
| `TSEndpoint` | Client endpoint config | urlTemplate, isParameterized, templateParams |
| `TSApiVersion` | API versioning | paramName, defaultValue, isInEndpoint |

---

## Non-Negotiable Invariants

1. **Renderer does not import TCGC.** Not transitively, not via re-export, not
   via a "utils" file that sneaks it in. If the renderer needs data, it goes
   in the code model.

2. **Code model is the contract.** The adapter's output type is `TSCodeModel`.
   The renderer's input type is `TSCodeModel`. That's the only coupling.

3. **No symptom-fix dedupe passes.** If duplicate imports appear, the adapter
   is producing bad data. Fix the adapter. Don't add a post-processing strip
   pass.

4. **No clever metaprogramming.** No code that generates code that generates
   code. String builders or template literals, same as Go and Rust.

5. **File-per-concern.** Each renderer function produces one logical file kind.
   No 500-line functions that emit three different file types.

6. **Pure data code model.** No methods on IR types. No side effects. No
   closures. Serializable to JSON.

7. **Self-contained. No internal workspace dependencies. Always extractable.**
   This package has ZERO dependencies on other packages in this monorepo — not
   `@azure-tools/rlc-common`, not `@azure-tools/typespec-ts`, nothing. The
   only allowed dependencies are external npm packages (`@typespec/*`,
   `@azure-tools/typespec-client-generator-core`, `ts-morph`, `tslib`, etc.).
   If a utility exists in a sibling package and we need it, we copy it in
   (with attribution). The package must be liftable to its own repo at any
   time: `cp -r packages/typespec-ts-pristine ../new-repo/ && npm install`
   must work.

---

## Explicit Non-Goals

- **AutoRest parity.** The `autorest.typescript` package is in maintenance
  mode. Pristine targets TypeSpec-only generation.

- **Experimental flags.** No `enableExperimentalFeature` toggles. Features are
  either implemented or they aren't.

- **Legacy customer overlays.** No hooks for customers to patch generated code
  inside the emitter. That's a migration concern, not a design concern.

- **RLC generation.** Pristine generates modular SDK only. RLC is handled by
  the existing emitter in maintenance mode, or by a separate focused package.

---

## Comparator Approach

A `compare` script validates pristine output against the existing emitter.

### Interface

```
compare(fixturesDir, baselineOutput, candidateOutput) → CompareResult
```

### Location

`src/comparator/index.ts` — types and orchestration logic.
`pnpm compare` — CLI entry (package.json script).

### What it does

1. Enumerates fixture directories under `packages/typespec-test/test/`
2. For each fixture, globs all `.ts` files in both output trees
3. Computes: files only in baseline, files only in candidate, files with diffs
4. Produces per-file unified diffs
5. Calculates a score: `(identical files / total files) × 100`

### Output format

```
Fixture: azure/storage-blob
  Score: 94.2% (47/50 files identical)
  Missing in candidate: src/models/legacy.ts
  Extra in candidate: (none)
  Diffs:
    src/api/containers/operations.ts  (12 lines changed)
    src/index.ts                      (3 lines changed)
```

### What it does NOT do

- Does not compile the output (that's the smoke test's job)
- Does not run integration tests (that's the integration suite's job)
- Does not evaluate which output is "better" — only equivalence
- Does not import the baseline emitter as a dependency — it either invokes it
  as a subprocess (`npx @azure-tools/typespec-ts`) or diffs pre-generated
  output that already exists in `packages/typespec-test/test/*/generated/`

---

## Directory Structure

```
packages/typespec-ts-pristine/
├── package.json
├── tsconfig.json
├── README.md
├── docs/
│   └── DESIGN.md              ← this file
└── src/
    ├── index.ts               ← emitter entry point (3-phase orchestrator)
    ├── tcgcadapter/
    │   └── index.ts           ← TCGC → TSCodeModel transformation
    ├── codemodel/
    │   └── index.ts           ← IR type definitions (pure data)
    ├── codegen/
    │   └── index.ts           ← TSCodeModel → .ts file strings
    └── comparator/
        └── index.ts           ← diff tool for validating output equivalence
```
