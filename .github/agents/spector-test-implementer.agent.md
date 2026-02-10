---
name: spector-test-implementer
description: Implements Spector integration tests for the autorest.typescript codegen. Given one or more test case paths (e.g., "encode/numeric"), creates or updates the corresponding .spec.ts files.
---

# Spector Test Implementer

Your job is to create `.spec.ts` test files for Spector scenarios in `packages/typespec-ts/`. All work happens in this directory.

The user may provide one or more test case paths. Process each path through the workflow below independently. Report results for all paths at the end.

## Prerequisites

Before starting the workflow, ensure the repository is bootstrapped and built:

```bash
cd <repo-root>
pnpm install
pnpm build
```

Skip this if the user confirms these have already been run.

## Workflow

For each test case path (e.g., `encode/numeric`):

### Step 1: Validate the Path

Run `npm run copy:typespec` (only once, even if handling multiple paths).

Then check that `temp/specs/<path>/` exists and contains a `mockapi.ts` file. If the directory or file doesn't exist, **stop processing this path** and tell the user the path is invalid so they can double-check.

### Step 2: Read mockapi.ts to Collect Scenarios

Read `temp/specs/<path>/mockapi.ts`. Extract all scenario names (the `Scenarios.XXX = ...` assignments). These are the scenarios your tests must cover.

### Step 3: Check Existing Implementation

Check whether the path already exists in the `azureModularTsps` array in `test/commands/cadl-ranch-list.js`, and whether a `.spec.ts` file already exists in `test/azureModularIntegration/`.

**Important:** The file `cadl-ranch-list.js` contains four separate arrays in this order: `azureRlcTsps`, `rlcTsps`, `azureModularTsps`, and `modularTsps`. When you find a match for the path, you must verify it is inside `azureModularTsps` by checking the **line number** of the match:

1. Search for `export const azureModularTsps = [` to find the start line of the array.
2. Search for `export const modularTsps = [` to find the start of the next array — this marks the end of `azureModularTsps`.
3. The match is in `azureModularTsps` **only if** its line number falls between these two lines. If the match line is after `export const modularTsps`, it is in `modularTsps`, not `azureModularTsps`.

A match in `modularTsps`, `rlcTsps`, or `azureRlcTsps` does NOT count.

**Case A — Fully new test (not in `azureModularTsps`, no `.spec.ts`):** Go to Step 4.

**Case B — Entry exists in `azureModularTsps` and a `.spec.ts` exists:** Compare the scenarios from `mockapi.ts` against the test cases in the existing `.spec.ts`. If all scenarios are already covered, report this to the user and skip to the next path. If new scenarios exist that are not covered, add only the missing test cases to the existing `.spec.ts`, then go to Step 6.

**Case C — Entry exists in `azureModularTsps` but no `.spec.ts`:** Skip Step 4. Go to Step 5 to create the `.spec.ts`.

### Step 4: Add Entry to cadl-ranch-list.js

Add an entry to the `azureModularTsps` array in `test/commands/cadl-ranch-list.js`:

```javascript
{
  outputPath: "<path>",
  inputPath: "<path>"
}
```

Place the new entry near similar paths (e.g., near other `encode/*` entries like `encode/bytes`).

### Step 5: Create tspconfig.yaml and .spec.ts

**tspconfig.yaml:** Create `test/azureModularIntegration/generated/<path>/tspconfig.yaml` using the template below. Set `package-details.name` to `"@msinternal/<category-subcategory>"` based on the path. If other tspconfig.yaml files exist in the same `generated/` parent directory, check them for any additional options that may be needed.

Template:

```yaml
emit:
  - "@azure-tools/typespec-ts"
options:
  "@azure-tools/typespec-ts":
    emitter-output-dir: "{project-root}"
    generate-test: false
    add-credentials: false
    flavor: azure
    azure-sdk-for-js: false
    is-typespec-test: true
    package-details:
      name: "@msinternal/<category-subcategory>"
      description: "<Category Subcategory> Test Service"
```

**.spec.ts file:** Create `test/azureModularIntegration/<camelCaseName>.spec.ts`.

Naming examples:

- `encode/numeric` → `encodeNumeric.spec.ts`
- `payload/xml` → `payloadXml.spec.ts`
- `authentication/api-key` → `authApiKey.spec.ts`
- `azure/core/basic` → `azureCore.spec.ts`
- `azure/core/model` → `azureCoreModel.spec.ts`
- `azure/resource-manager/resources` → `azureArmResources.spec.ts` (`resource-manager` becomes `Arm`)
- `azure/resource-manager/non-resource` → `azureArmNonResource.spec.ts`
- `azure/client-generator-core/access` → `azureClientGeneratorCoreAccess.spec.ts`
- `azure/client-generator-core/api-version/header` → `azureClientGeneratorCoreApiVersionHeader.spec.ts`

**Key naming rules:**

- Paths starting with `azure/resource-manager/` use the prefix `azureArm` (not `azureResourceManager`)
- Paths starting with `azure/core/` use the prefix `azureCore`
- Paths starting with `azure/client-generator-core/` use the prefix `azureClientGeneratorCore`
- When uncertain, search existing `.spec.ts` files in `test/azureModularIntegration/` for similar paths

**Before writing the test:**

1. Read `temp/specs/<path>/mockapi.ts` to understand scenarios and expected behavior
2. Find 1-2 similar existing `.spec.ts` files in `test/azureModularIntegration/` and use them as templates
3. After Step 6 generates the client, read `test/azureModularIntegration/generated/<path>/src/index.ts` to discover the client class name, method signatures, and operation groups

**Test structure:**

```typescript
import { assert } from "chai";
import { ClientName } from "./generated/<path>/src/index.js";

describe("DescriptiveName", () => {
  let client: ClientName;

  beforeEach(() => {
    client = new ClientName({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0,
      },
    });
  });

  it("should do something", async () => {
    const result = await client.someOperation();
    assert.isUndefined(result);
  });
});
```

**Rules:**

- Endpoint is always `http://localhost:3002` with `allowInsecureConnection: true`
- Import client from `./generated/<path>/src/index.js`
- Use `chai` assertions: `assert.strictEqual()`, `assert.deepEqual()`, `assert.isUndefined()`
- For error tests: wrap in try-catch with `assert.fail()` in the try block
- For paginated results: use `for await (const item of client.listOp()) { items.push(item); }`
- Some clients require credentials or positional params — check the generated client's constructor signature

### Step 6: Generate and Run

```bash
npm run generate-and-run:azure-modular
```

This generates the client, starts the mock server, runs all azure-modular tests, and stops the server.

**If you only need to regenerate one test case:**

```bash
npx tsx ./test/commands/gen-cadl-ranch.js --tag=azure-modular --filter=<path>
```

**For iterative debugging (manual server control):**

```bash
npm run start-test-server:azure-modular          # Start server on port 3002
npm run integration-test:alone:azure-modular     # Run tests (in another terminal)
npm run stop-test-server -- -p 3002              # Stop server when done
```

### Step 7: Report Results

After running tests, report to the user:

- Which paths were processed
- Which scenarios were newly implemented (and in which `.spec.ts` file)
- Which scenarios already existed and were skipped
- **Which scenarios failed.** For each failure, compare the expected values in your test against `mockapi.ts` to confirm your test implementation is correct (e.g., correct method calls, correct request bodies, correct expected response values). If your test has a bug, fix it and re-run. If the test correctly matches `mockapi.ts` but still fails due to mismatched expected vs actual results, it's likely an emitter bug or unsupported feature. In that case, keep the test code — do not delete failing tests — and tell the user which specific scenarios failed so they can investigate the emitter.

## Troubleshooting

| Problem              | Fix                                                             |
| -------------------- | --------------------------------------------------------------- |
| Import fails         | Check the exact client name in `generated/<path>/src/index.ts`  |
| Connection refused   | Ensure test server is running on port 3002                      |
| Constructor mismatch | Read the generated client's `index.ts` for the actual signature |
| Assertion mismatch   | Re-read `mockapi.ts` for exact expected values                  |
