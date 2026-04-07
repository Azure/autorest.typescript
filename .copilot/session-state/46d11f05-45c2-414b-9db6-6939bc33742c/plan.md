# Polyfill Suffix Missing in Warp Config for Azure Monorepo Packages

## Problem

The codegen can produce **polyfill files** — browser-specific implementations of static helpers that replace
Node.js-only code for browser/react-native builds:

| Base file | Polyfill file |
|---|---|
| `get-binary-response.ts` | `get-binary-response-browser.mts` |
| `get-binary-stream-response.ts` | `get-binary-stream-response-browser.mts` |

The **warp** build system uses `polyfillSuffix` in its config to discover and substitute these files
(e.g., when building for `browser` target, `foo.ts` → `foo-browser.mts`).

### Two config paths:

1. **Inline config** (non-monorepo packages via `buildInlineConfig`):
   Uses the `WarpConfigTemplate` which **correctly** includes `polyfillSuffix: "-browser"` and
   `polyfillSuffix: "-react-native"` on the browser and react-native targets. ✅

2. **Extends config** (Azure monorepo packages via `buildExtendsConfig`):
   Generates `extends: ../../../warp.base.config.yml` and only emits custom exports.
   The `warp.base.config.yml` in `azure-sdk-for-js` does **NOT** have `polyfillSuffix` on any target. ❌

### Consequence

When an Azure monorepo package uses static helpers that have polyfill files (e.g., binary response
operations), the warp build will **not** perform polyfill substitution. The browser build will include
Node.js-specific code (`asNodeStream()`, `Buffer`, `node:buffer`), which will crash at runtime in browsers.

## Approach

1. **Add a test** to `packages/rlc-common/test/integration/` that demonstrates the extends-based warp
   config is missing `polyfillSuffix`.

2. **Fix `buildExtendsConfig`** in `packages/rlc-common/src/metadata/buildWarpConfig.ts` to always
   generate target overrides with `polyfillSuffix` for browser and react-native targets.

3. **Run tests** to confirm the fix.

## Fix Options Brainstorm

### Option A: Always include targets with polyfillSuffix in extends config (Recommended)
- Modify `buildExtendsConfig` to always emit targets section with polyfillSuffix
- Having polyfillSuffix when no polyfill files exist is harmless (warp just finds nothing)
- Pro: Simple, always correct, no need to detect whether polyfill files exist
- Con: Slightly larger warp.config.yml for monorepo packages

### Option B: Conditionally add polyfillSuffix only when polyfill files are detected
- Pass info about which static helpers are used into buildWarpConfig
- Only emit targets with polyfillSuffix when polyfill helpers are present
- Pro: Minimal output
- Con: More complex, requires plumbing through new parameter

### Option C: Fix in azure-sdk-for-js (warp.base.config.yml)
- Add `polyfillSuffix: true` to browser/react-native targets in the base config
- Pro: No changes needed here
- Con: Depends on another repo, doesn't fix standalone codegen
