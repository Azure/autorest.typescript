# typespec-ts — Architecture

> Reference documentation for the `@azure-tools/typespec-ts` emitter. Reads
> top-to-bottom; section headers are anchors, not narrative.
>
> Last regenerated: 2026-05-18.

This document describes how the emitter turns a compiled TypeSpec program into
a TypeScript client package. It focuses on the **Modular** generation path,
which received a three-layer rewrite to match the structure used by
`typespec-rust` and `autorest.go`. The **RLC** path is documented at a higher
level because its shape has been stable.

---

## 1. Entry point — `src/index.ts`

The emitter is a TypeSpec compiler plugin. The TypeSpec compiler invokes the
exported `$onEmit(context: EmitContext)` function at
`src/index.ts:123` with the compiled program plus emitter options.

In plain English, `$onEmit` does the following:

1. Builds an `SdkContext` (TCGC's "interpreted" view of the program) and
   resolves emitter options into `RLCOptions` / `ModularEmitterOptions`.
2. **Pass 1 — RLC code models.** Calls `transformRLCModel` for every RLC
   client and stashes the resulting `RLCModel` objects. The RLC code model is
   the foundation that Modular generation also depends on.
3. **Pass 2 — RLC source emission.** Calls `generateRLCSources`, which
   dispatches a sequence of `build*` functions from `@azure-tools/rlc-common`
   (`buildClient`, `buildClientDefinitions`, `buildResponseTypes`,
   `buildParameterTypes`, `buildIsUnexpectedHelper`, `buildIndexFile`,
   `buildLogger`, `buildPaginateHelper`, `buildPollingHelper`,
   `buildSerializeHelper`, `buildSamples`). Each writes one or more files
   into the RLC sources root.
4. **Pass 3 — Modular generation.** Calls `generateModularSources`
   (`src/index.ts:326-399`). This is the path described in detail below.
5. **Pass 4 — Project metadata.** Emits `package.json`, `tsconfig.json`,
   `README.md`, ESLint/Rollup/API-Extractor configs, the changelog, and the
   license file. Cleans intermediate directories.

The Modular pass is what the rest of this document is about.

---

## 2. Two SDK styles

The repo emits two styles of client from the same TypeSpec input. Both are
produced in the same `$onEmit` run.

### REST Level Client (RLC) — `src/rlc/`

A thin, near-1:1 mapping of REST operations into TypeScript. Each operation
is a `path(...).get(...)` call against a typed `Client`. RLC is the
*foundation* — its `RLCModel` is consumed by Modular too. Most RLC builders
live in `@azure-tools/rlc-common`; the emitter side lives under `src/rlc/`
(transformers, customization logic, etc.).

### Modular — generated from `src/tcgcadapter` → `src/codemodel` → `src/codegen`

A higher-level, ergonomic API surface: classical client classes,
operation-group sub-clients, paged/LRO helpers, model interfaces. Modular
sits *on top of* the RLC client for HTTP transport but exposes idiomatic
TypeScript shapes to consumers. The Modular path was rewritten into the
three-layer pipeline described next.

---

## 3. Three-layer pipeline (Modular)

```
                ┌─────────────────────────────────────────┐
                │  @typespec/compiler  +  TCGC SdkContext │
                └────────────────────┬────────────────────┘
                                     │  SdkClientType, SdkMethod,
                                     │  SdkModelType, SdkEnumType, ...
                                     ▼
        ┌──────────────────────────────────────────────────────┐
        │   Layer 1 — TCGC adapter                             │
        │   src/tcgcadapter/adapter.ts                         │
        │   Only file in the new pipeline that imports TCGC.   │
        └────────────────────────┬─────────────────────────────┘
                                 │  TSCodeModel
                                 │  (pure data, no TCGC, no ts-morph)
                                 ▼
        ┌──────────────────────────────────────────────────────┐
        │   Layer 2 — Code model (IR)                          │
        │   src/codemodel/index.ts                             │
        │   TSCodeModel, TSClient, TSMethod, TSModel, ...      │
        └────────────────────────┬─────────────────────────────┘
                                 │  consumed by renderers
                                 ▼
        ┌──────────────────────────────────────────────────────┐
        │   Layer 3 — Codegen (ts-morph rendering)             │
        │   src/codegen/*.ts                                   │
        │   Writes TypeScript SourceFiles into the project.    │
        └──────────────────────────────────────────────────────┘
```

The layering rule is mechanical:

| Layer        | Imports TCGC? | Imports ts-morph? |
|--------------|:-------------:|:-----------------:|
| `tcgcadapter`| **yes**       | no                |
| `codemodel`  | no            | no                |
| `codegen`    | no (\*)       | **yes**           |

(\*) See §13 — `src/codegen/models.ts` still imports TCGC and is on the
follow-up list.

The pipeline mirrors `tcgcadapter → codemodel → codegen` in `typespec-rust`
and `tcgcadapter → codemodel → codegen` in `autorest.go`. Cross-references
to those repos are inlined in the source headers (e.g.,
`src/tcgcadapter/adapter.ts:7-10`).

---

## 4. Which Modular path is live?

**Two Modular paths exist in the tree at the same time.** Newcomers reliably
trip over this. The rule:

- **Production generation goes through the three-layer pipeline.**
  `$onEmit` → `generateModularSources` (`src/index.ts:326`) →
  `adaptToCodeModel` (`src/index.ts:340`) → `emitModelFiles`,
  `emitResponseTypes`, `emitOperations`, `emitClientContext`,
  `emitClassicalClient`, `emitClassicalOperationFiles`, `emitRootIndex`.
  All of these live under `src/codegen/`.

- **Some unit tests still drive the legacy `src/modular/*` builders.**
  Files like `src/modular/buildOperations.ts`,
  `src/modular/helpers/operationHelpers.ts`,
  `src/modular/buildClassicalClient.ts`, and
  `src/modular/buildClassicalOperationGroups.ts` are still on disk and are
  exercised by historical scenario tests under `test/modularUnit/scenarios/`.
  They are **being phased out**. `src/index.ts` no longer calls the legacy
  operation builders in the production path (`src/index.ts:354-399` —
  every call is an `emit*` from `src/codegen/`).

- **The adapter still pulls helpers from the legacy tree** (see imports at
  `src/tcgcadapter/adapter.ts:38-78`: `namingHelpers`, `docsHelpers`,
  `clientHelpers`, `operationHelpers`, `type-expressions`, `emitModels`).
  This is intentional during the transition — those helpers are pure
  functions, not builders, and will be relocated under `src/tcgcadapter/`
  in follow-ups. See §13.

**Verification recipe.** If you are unsure whether a piece of code is on the
production path, search for it from `$onEmit` outward: open `src/index.ts`
at line 123, follow function calls down. If your file is not reachable from
`generateModularSources`, it is either RLC-only or legacy.

---

## 5. TCGC adapter — `src/tcgcadapter/adapter.ts`

**Input.** An `SdkContext` from `@azure-tools/typespec-client-generator-core`
plus a `ModularEmitterOptions`. Entry point: `adaptToCodeModel({ sdkContext,
emitterOptions })`.

**Output.** A fully populated `TSCodeModel` (see §6) representing every
client, method, model, enum, and union the package will expose.

**Boundary rule.** The adapter is the **only** file in the new pipeline
that imports `@azure-tools/typespec-client-generator-core`. Verified by:

```text
$ grep -rn '@azure-tools/typespec-client-generator-core' \
      src/tcgcadapter src/codemodel src/codegen
src/tcgcadapter/adapter.ts:29     ← expected
src/tcgcadapter/adapter.ts:34     ← expected
src/codegen/models.ts:6           ← known leak; tracked in §13
```

Inside the adapter, TCGC's language-neutral concepts get *interpreted* into
TypeScript-specific shapes: method names get normalized via
`NameType.Method`, doc comments get assembled from `description`/`details`,
nullable/optional flags are flattened, paging/LRO are tagged onto methods
(`TSMethodKind`), credential scopes are resolved, etc.

The adapter receives all dependencies explicitly. There is no global state
inside `src/tcgcadapter/`; see §13 for the one exception
(`ContextManager`).

---

## 6. Code model — `src/codemodel/index.ts`

A single file of pure-data TypeScript types. No TCGC, no ts-morph, no I/O.

Top-level interface: `TSCodeModel` (`src/codemodel/index.ts:27`), which
holds:

| Field      | Type                       | Notes                                      |
|------------|----------------------------|--------------------------------------------|
| `clients`  | `TSClient[]`               | Client hierarchy (root + sub-clients)      |
| `models`   | `TSModel[]`                | Named model declarations                   |
| `enums`    | `TSEnum[]`                 | Named enum declarations                    |
| `unions`   | `TSUnion[]`                | Named union declarations                   |
| `settings` | `TSGenerationSettings`     | Flavor, ARM flag, paths, credential config |

Key types you will encounter when reading codegen:

- `TSClient` (line 70) — modular + classical client identity, endpoint,
  credential, parameters, method groups.
- `TSMethod` (line 224) and `TSMethodKind` (line 197 —
  `"basic" | "lro" | "paging" | "lroPaging"`).
- `TSOperationGroup` (line 294) — a sub-client's methods.
- `TSModel` / `TSProperty` / `TSDiscriminator` (lines 349/368/385).
- `TSEnum`, `TSUnion`, `TSApiOptions`, `TSLroConfig`.

Because the IR is pure data, it is snapshot-testable and renderer-agnostic.
The same `TSCodeModel` could theoretically drive Alloy.js or any other
renderer.

---

## 7. Codegen — `src/codegen/*.ts`

Every renderer accepts a `Project` (ts-morph) and parts of the
`TSCodeModel`, and writes one or more `SourceFile`s.

| File                            | Output                                                                 |
|---------------------------------|------------------------------------------------------------------------|
| `emitter.ts` / `index.ts`       | Orchestrator — walks `TSCodeModel` and dispatches to file generators.  |
| `clients.ts`                    | `api/{name}Context.ts`: client interface, options, factory function.   |
| `operations.ts`                 | `api/.../operations.ts`: per-operation `_send` / `_deserialize` / public function. |
| `classicalClient.ts`            | `{name}Client.ts`: the classical class wrapper around the context.     |
| `classicalOperations.ts`        | `classic/.../index.ts`: classical operation-group interfaces + factories. |
| `models.ts`                     | `models/models.ts`: model/enum/union TypeScript declarations.          |
| `responseTypes.ts`              | Response-type aliases derived from RLC responses.                      |
| `apiOptions.ts`                 | Per-operation `OptionalParams` interfaces.                             |
| `lroHelpers.ts`                 | Restore-poller helpers for LRO operations.                             |
| `indexFiles.ts`                 | Root `index.ts` + subpath barrels (`models`, `api`, `classic`).        |
| `pagingImports.ts`              | Small helper for paging-related import resolution.                     |

**JSDoc rendering.** Doc comments are attached directly via ts-morph's
`addJsDoc` / `getJsDoc` calls inside each renderer. There is no shared
helper for assembling JSDoc blocks from `TSMethod.docs`, parameter docs,
return-type docs, and deprecation tags — every renderer threads the same
pattern by hand. Tracked in §13.

---

## 8. Framework — `src/framework/`, `src/modular/static-helpers-metadata.ts`, `static/static-helpers/`

The **framework** is the import/dependency resolver used by all renderers.
Renderers do not write `import` statements directly — they request a symbol
by reference key and let the framework decide what file it lives in and how
to import it.

Core APIs:

- `refkey("Name")` — `src/framework/refkey.ts`. Creates a stable token
  identifying a static helper, external dependency, or generated symbol.
- `resolveReference(context, refkey)` — `src/framework/reference.ts`.
  Resolves a refkey at emit time, registers the import, and returns the
  in-scope name to use in the generated source.
- `useDependencies()`, `useContext()` — hooks in `src/framework/hooks/`
  for accessing the emitter context (Project, options, etc.).
- `load-static-helpers.ts` — picks up every helper file under
  `static/static-helpers/` and registers them with the binder.

**Static helpers** live at `static/static-helpers/` as plain TypeScript
source. They are *copied* (not bundled) into the generated package when
referenced. Metadata lives at `src/modular/static-helpers-metadata.ts`
(e.g., `PagingHelpers`, `PollingHelpers`, `SerializationHelpers`,
`XmlHelpers`, `MultipartHelpers`).

**External dependencies** (npm packages the generated code depends on, e.g.
`@azure/core-lro`, `@azure-rest/core-client`) are declared in
`src/modular/external-dependencies.ts`. Renderers request them through
`useDependencies()` and resolve through refkeys.

The metadata file currently lives under `src/modular/` for historical
reasons; it is shared by both the legacy and the new pipeline.

---

## 9. End-to-end flow A — spec to package

```
TypeSpec spec  ──►  @typespec/compiler  ──►  Program (AST)
                                              │
                                              ▼
                              TCGC (typespec-client-generator-core)
                                              │
                                              ▼  SdkContext
                                       $onEmit (src/index.ts:123)
                              ┌───────────────┴───────────────┐
                              │                               │
                       RLC pipeline                  Modular pipeline
                  (src/rlc + rlc-common)             (this document)
                              │                               │
                              ▼                               ▼
                      rest/*.ts, models,         api/*, classic/*, models/*,
                      isUnexpected, etc.         <Name>Client.ts, index.ts
                              │                               │
                              └──────────────┬────────────────┘
                                             ▼
                            project metadata: package.json, tsconfig,
                            README, eslint, rollup, api-extractor,
                            CHANGELOG, LICENSE
                                             │
                                             ▼
                                  generated TypeScript package
```

---

## 10. End-to-end flow B — one paged list operation

Tracing a single `@list` method called `listFoos`:

1. **TCGC** classifies the method on `SdkClientType.methods` with
   `kind: "paging"` and an `SdkPagingServiceMethod` containing the
   continuation-token strategy.
2. **Adapter** (`src/tcgcadapter/adapter.ts`):
   - Normalizes the name to `listFoos` (`NameType.Method`).
   - Builds a `TSMethod` with `kind: "paging"`
     (`TSMethodKind`, `src/codemodel/index.ts:197`).
   - Populates `TSReturnType` to reference the array element type
     (interface reference into `TSCodeModel.models`).
   - Tags paging metadata onto the method so the renderer can choose the
     right helper.
   - Builds a `TSApiOptions` entry (`FooListOptionalParams`).
3. **Code model** holds the result as plain data — no TCGC, no ts-morph.
4. **Codegen**:
   - `src/codegen/apiOptions.ts` writes the `FooListOptionalParams`
     interface.
   - `src/codegen/operations.ts` writes `_listFoosSend`,
     `_listFoosDeserialize`, and a public `listFoos` function. Paging-flag
     methods resolve `buildPagedAsyncIterator` from `PagingHelpers` via
     `resolveReference(context, refkey("buildPagedAsyncIterator"))` so the
     framework copies the static helper into the package.
   - `src/codegen/classicalOperations.ts` adds `listFoos` to the
     `FooOperations` interface and its factory.
   - `src/codegen/classicalClient.ts` exposes the operation group on the
     classical client.
   - `src/codegen/indexFiles.ts` re-exports the method and types.

A reader who wants to confirm any of this can search for the operation name
in `test/modularIntegration/generated/` after a regeneration and follow the
breadcrumbs back to the renderer files above.

---

## 11. Testing

| Suite                                              | Location                                              | What it covers                              |
|----------------------------------------------------|-------------------------------------------------------|---------------------------------------------|
| Modular unit                                       | `test/modularUnit/`                                   | Adapter, model emission, scenarios          |
| Adapter unit                                       | `test/modularUnit/adapter.spec.ts`, `adapter-models.spec.ts` | `TSCodeModel` shape from TCGC inputs |
| RLC unit                                           | `test/unit/`                                          | RLC builders                                |
| RLC integration                                    | `test/integration/`                                   | Live mock-server tests for RLC clients      |
| Modular integration                                | `test/modularIntegration/`                            | Live mock-server tests for Modular clients  |
| Azure RLC integration                              | `test/azureIntegration/`                              | Azure-flavored RLC                          |
| Azure Modular integration                          | `test/azureModularIntegration/`                       | Azure-flavored Modular                      |
| Static-helper unit                                 | `test-next/unit/static-helpers/`                      | Runtime helpers shipped into generated code |
| Smoke (cross-package)                              | `packages/typespec-test/`                             | End-to-end "does it build?" matrix          |

Common commands (from `packages/typespec-ts/`):

```bash
npm run test:modular          # modular unit
npm run test:rlc              # RLC unit
npm run unit-test             # both
npm run copy:typespec         # required before any integration suite
npm run integration-test-ci:azure-modular
```

To regenerate one integration target:

```bash
npx tsx ./test/commands/gen-cadl-ranch.js --tag=azure-modular --filter=payload/xml
```

---

## 12. Legacy code paths

- **`src/modular/buildOperations.ts`, `src/modular/buildClassicalClient.ts`,
  `src/modular/buildClassicalOperationGroups.ts`, `src/modular/helpers/*`.**
  Historical Modular builders. Production no longer calls
  `buildOperations.ts` / `buildClassicalClient.ts` / `buildClassicalOperationGroups.ts`
  — equivalent functionality lives at `src/codegen/operations.ts`,
  `src/codegen/classicalClient.ts`, `src/codegen/classicalOperations.ts`.
  Some helpers (`namingHelpers`, `docsHelpers`, `operationHelpers`,
  `clientHelpers`, `type-expressions`) are still imported by the adapter
  during the transition.

- **`packages/autorest.typescript/`.** The AutoRest TypeScript generator is
  in **maintenance mode**. Treat it as out-of-scope unless explicitly asked
  to touch it. Do not borrow patterns from it.

- **`src/modular/static-helpers-metadata.ts`,
  `src/modular/external-dependencies.ts`.** Not legacy — see §8. They live
  under `src/modular/` for historical reasons and are shared.

---

## 13. Known follow-ups

These are *known* gaps. Adding to this list is encouraged.

1. **`ContextManager` singleton.** Modular emission still relies on a
   process-global context manager for the active `Project` and emitter
   options. Match `typespec-rust`'s explicit-context pattern by threading
   the context through `emit*` calls.

2. **Adapter still imports from `src/modular/helpers/`.** See `src/tcgcadapter/adapter.ts:38-78`
   (`namingHelpers`, `docsHelpers`, `clientHelpers`, `operationHelpers`,
   `type-expressions`, `emitModels`). Relocate the pure-function helpers
   into `src/tcgcadapter/`.

3. **No `src/tcgcadapter/naming.ts` yet.** Naming normalization lives in
   `src/modular/helpers/namingHelpers.ts`. Carve it out so the adapter owns
   the language-specific naming policy.

4. **`src/codegen/models.ts` still imports TCGC** (`SdkArrayType`,
   `SdkDictionaryType`, `SdkNullableType`, `SdkType` at
   `src/codegen/models.ts:1-6`). Close this leak by routing all type
   information through `TSCodeModel`.

5. **Shared JSDoc-assembly helper for codegen renderers.** Every renderer
   in `src/codegen/` builds JSDoc by calling ts-morph's `addJsDoc` /
   `getJsDoc` directly, threading `docs`, parameter docs, return docs, and
   deprecation tags by hand. A shared helper (taking `TSMethod` /
   `TSProperty` and emitting a normalized JSDoc structure) would remove
   the duplication and the "what does this look like?" friction newcomers
   hit when adding doc-bearing decorators (`@doc`, `@summary`,
   `@deprecated`).

6. **Adapter test fixture helpers for decorator metadata.** TCGC's
   operation surface — including fields like `summary` on
   `SdkServiceMethod` (see
   `node_modules/@azure-tools/typespec-client-generator-core/dist/src/interfaces.d.ts:165-168`)
   — is not obvious from the adapter source alone. Newcomers currently
   discover it via runtime inspection. Provide adapter-test fixture
   helpers covering `doc` / `summary` / deprecation so contributors can
   write metadata-bearing tests without first cracking open
   `interfaces.d.ts`.
