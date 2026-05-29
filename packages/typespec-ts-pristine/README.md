# @azure-tools/typespec-ts-pristine

North-star TypeScript emitter for TypeSpec. Clean-room implementation of a
three-layer pipeline architecture.

## Architecture

```
TCGC SDK Context → Adapter → Code Model (IR) → Renderer → .ts files
```

Three layers, three directories:

| Layer | Directory | Responsibility |
|-------|-----------|----------------|
| Adapter | `src/tcgcadapter/` | Transforms TCGC types into language-specific IR. Only layer that imports TCGC. |
| Code Model | `src/codemodel/` | Pure data types. The contract between adapter and renderer. |
| Renderer | `src/codegen/` | Consumes IR, produces TypeScript source strings. Zero TCGC knowledge. |

## Why does this exist?

The existing `@azure-tools/typespec-ts` emitter grew organically and fuses
adapter and renderer concerns. This package is a greenfield rewrite that
enforces strict layer separation from day one. It targets feature parity with
the existing emitter while being simpler to understand and maintain.

## Comparator

The `compare` script runs both emitters over the same TypeSpec fixture set and
diffs the generated output. It lives in `src/comparator/`.

```bash
# Not yet implemented — interface only
pnpm compare --fixtures ../typespec-test/test/ --baseline ../typespec-ts --candidate .
```

Output: tree diff, per-file unified diff, summary score (% files identical).

## Development

```bash
pnpm install          # from repo root
pnpm build            # builds this package
pnpm compare          # runs comparator (once implemented)
```
