# Follow-up: Migrate array/dict helper types into TSCodeModel IR

**Date:** 2026-05-19T23:30:29.807+00:00
**Author:** Dallas (Refactor Engineer)
**Status:** Open / Follow-up

## Context

B8 fix (Strategy A) in `src/codegen/models.ts` restores array/dict serializer helper
registration by walking the global `emitQueue` side-channel (the same set that the
legacy `emitTypes()` in `src/modular/emitModels.ts` used).

## Problem with current approach

`emitQueue` is a module-level `Set<SdkType>` populated by `visitPackageTypes()` (called
via `provideSdkTypes()`). The new filtered-IR renderer in `src/codegen/models.ts` is
supposed to work exclusively from `TSCodeModel` (pure IR, no TCGC) — but the B8 fix still
reaches back into `emitQueue`, which is a TCGC-layer artifact.

This violates the layer boundary:

```
src/tcgcadapter  →  src/codemodel (IR)  →  src/codegen
                          ↑
                   Should own array/dict helpers
```

## Recommended follow-up

Add array and dictionary helper types explicitly to `TSCodeModel` so `emitModelFiles` can
emit them purely from IR:

1. Add a `helperTypes` (or `arrayDictHelpers`) field to `TSCodeModel` in
   `src/codemodel/index.ts` containing the array/dict types that serializer builders
   will reference.
2. Populate it in `src/tcgcadapter/adapter.ts` by walking the types reachable from
   `models`, `enums`, and `unions` and collecting all `SdkArrayType` / `SdkDictionaryType`
   that require serializer helpers.
3. Update `src/codegen/models.ts` to iterate `codeModel.helperTypes` instead of `emitQueue`.
4. Remove the `emitQueue` import from `src/codegen/models.ts`.

## Risk / priority

Low risk to defer — Strategy A is a correct and complete fix for B8.
This is a cleanup task to keep the three-layer architecture clean.
