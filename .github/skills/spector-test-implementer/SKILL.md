---
name: spector-test-implementer
description: Implements Spector integration tests for the autorest.typescript codegen. Given one or more test case paths (e.g., "encode/numeric"), creates or updates the corresponding .spec.ts files in packages/typespec-ts/test/azureModularIntegration/. Use when the user wants to add new Spector test cases, implement missing test scenarios, or update existing integration tests for azure-modular clients.
---

# Spector Test Implementer

Create `.spec.ts` test files for Spector scenarios in `packages/typespec-ts/`. All work happens in this directory. Process each user-provided path independently through the workflow below. Report results for all paths at the end.

## Prerequisites

Ensure the repository is bootstrapped and built before starting:

```bash
cd <repo-root>
pnpm install
pnpm build
```

Skip if the user confirms these have already been run.

## Workflow

For each test case path (e.g., `encode/numeric`):

### Step 1: Validate the Path

Run `npm run copy:typespec` once (even for multiple paths).

Check that `temp/specs/<path>/` exists and contains a `mockapi.ts` file. If the directory or file doesn't exist, **stop processing this path** and tell the user the path is invalid so they can double-check.

### Step 2: Read mockapi.ts

Read `temp/specs/<path>/mockapi.ts`. Extract all scenario names (the `Scenarios.XXX = ...` assignments). These are the scenarios your tests must cover.

### Step 3: Check Existing Implementation

Check whether the path already exists in the `azureModularTsps` array in `test/commands/cadl-ranch-list.js`, and whether a `.spec.ts` file already exists in `test/azureModularIntegration/`.

**Important:** `cadl-ranch-list.js` has four arrays in order: `azureRlcTsps`, `rlcTsps`, `azureModularTsps`, `modularTsps`. Verify a match is inside `azureModularTsps` by checking line numbers:

1. Find the line of `export const azureModularTsps = [` (start)
2. Find the line of `export const modularTsps = [` (end boundary)
3. The match is in `azureModularTsps` only if its line falls between these two

A match in `modularTsps`, `rlcTsps`, or `azureRlcTsps` does NOT count.

Then branch:

**Case A -- Fully new (not in azureModularTsps, no .spec.ts):** Go to Step 4.

**Case B -- Entry + .spec.ts exist:** Compare scenarios from mockapi.ts against the .spec.ts. If all covered, report this to the user and skip to the next path. If new scenarios exist, add only missing test cases, then go to Step 6. **Important:** When modifying existing `.spec.ts` files, follow the [skip preservation rules](#preserving-skipped-tests).

**Case C -- Entry exists but no .spec.ts:** Skip Step 4, go to Step 5.

### Step 4: Add Entry to cadl-ranch-list.js

Add to the `azureModularTsps` array:

```javascript
{
  outputPath: "<path>",
  inputPath: "<path>"
}
```

Place the new entry near similar paths (e.g., near other `encode/*` entries like `encode/bytes`).

**Warning:** This file contains four arrays with overlapping entry patterns. A text-based edit will likely fail with "Multiple matches found." Instead, identify the target line number and use a line-number-based insertion (e.g., read the file, insert at the specific line, write back).

### Step 5: Create tspconfig.yaml and .spec.ts

This step has two phases: first create the config and generate the client, then write the test.

**Phase 1 -- tspconfig.yaml, .gitignore, and generation:**

1. Create `test/azureModularIntegration/generated/<path>/tspconfig.yaml` using the [tspconfig template](references/naming-and-templates.md#tspconfig-template) exactly as-is.
2. Create `test/azureModularIntegration/generated/<path>/.gitignore` with the content shown in [.gitignore template](references/naming-and-templates.md#gitignore-template)
3. Generate the client by running:
   ```bash
   npx tsx ./test/commands/gen-cadl-ranch.js --tag=azure-modular --filter=<path>
   ```
4. **Verify generation succeeded:** Check that `test/azureModularIntegration/generated/<path>/src/index.ts` exists and contains actual client class exports (not empty or placeholder). If the file is missing or empty, **stop** — remove the entry from `cadl-ranch-list.js`, delete the generated directory, and report that generation is not supported for this path.
5. Read `test/azureModularIntegration/generated/<path>/src/index.ts` to discover the client class name, method signatures, and operation groups.

**Phase 2 -- .spec.ts file:**

1. Read both the TypeSpec source file(s) at `temp/specs/<path>/main.tsp` (and any additional `.tsp` files) and the `mockapi.ts` file. Understand what each scenario expects: the correct request parameters, request body, and response shape. Pay attention to decorators and annotations that affect how the SDK should behave — the `.tsp` file is the source of truth for intended semantics, while `mockapi.ts` defines what the mock server validates.
2. Find 1-2 similar existing `.spec.ts` files in `test/azureModularIntegration/` and use them as templates.
3. Create the test file at `test/azureModularIntegration/<camelCaseName>.spec.ts`. See [naming conventions and test templates](references/naming-and-templates.md) for file naming rules, the test boilerplate, and assertion patterns.

### Step 6: Run Tests

Run only the newly created test to verify it works:

```bash
npm run start-test-server:azure-modular
```

Wait for `Started server on 3002` to appear, then in a separate terminal run the specific test file:

```bash
npx vitest run --project integration-azure-modular ./test/azureModularIntegration/<specFileName>.spec.ts
```

If any test cases fail, verify your test implementation against `mockapi.ts` and the `.tsp` file. If the test correctly matches the expected behavior but still fails (e.g., the SDK doesn't inject default values, serialization is wrong, or the generated code has bugs), **remove the failing test case** from the `.spec.ts` file. Keep any passing test cases. Re-run the test file until all remaining tests pass.

After the test completes, stop the server:

```bash
npm run stop-test-server -- -p 3002
```

**Note:** Do not use `npm run generate-and-run:azure-modular` for validation -- it regenerates all clients and runs all tests (~30+ minutes), and unrelated flaky tests may cause false failures. Only run the specific test file you created.

### Step 7: Format Code

After creating or modifying any files, **always** run the formatter from the repo root:

```bash
cd <repo-root>
pnpm format
```

This must be done before committing. Skipping this step will cause CI formatting checks to fail.

### Step 8: Report Results

After all tests pass, report to the user:

- Which paths were processed
- Which scenarios were newly implemented (and in which `.spec.ts` file)
- Which scenarios already existed and were skipped
- Which scenarios were removed due to test failures (with a brief reason for each)

## Preserving Skipped Tests

When modifying existing `.spec.ts` files, check for `it.skip` blocks with associated GitHub issue references before making changes.

Before unskipping any test:

1. Find the associated issue URL (usually in a comment above the `it.skip`)
2. Check whether the issue is **closed/resolved** on GitHub
3. Only unskip if the issue is explicitly closed — if still open, leave it skipped
4. Unskip the test and remove the issue reference comment if the test is now passing and the issue is resolved

## PR Description Requirements

Always keep the PR description updated with an implementation status report including:

- ✅ **Implemented scenarios** — paths and test counts
- ❌ **Non-implemented scenarios** — with specific reason or emitter bug descriptions

## Expected Output Files

For each new test path, these are the files that should be committed:

| File                                                           | Action                                     |
| -------------------------------------------------------------- | ------------------------------------------ |
| `test/commands/cadl-ranch-list.js`                             | Modified (new entry in `azureModularTsps`) |
| `test/azureModularIntegration/generated/<path>/.gitignore`     | Created                                    |
| `test/azureModularIntegration/generated/<path>/tspconfig.yaml` | Created                                    |
| `test/azureModularIntegration/generated/<path>/src/index.d.ts` | Generated (by gen-cadl-ranch.js)           |
| `test/azureModularIntegration/<camelCaseName>.spec.ts`         | Created                                    |

Do **not** commit these files:

- `spec-coverage.json` — generated by the test server, gitignored
- `coverage/` — test coverage output directory

## Troubleshooting

| Problem                                   | Fix                                                                               |
| ----------------------------------------- | --------------------------------------------------------------------------------- |
| Import fails                              | Check the exact client name in `generated/<path>/src/index.ts`                    |
| Connection refused                        | Ensure test server is running on port 3002                                        |
| Constructor mismatch                      | Read the generated client's `index.ts` for the actual signature                   |
| Assertion mismatch                        | Re-read `mockapi.ts` for exact expected values                                    |
| Formatting CI fails                       | Run `pnpm format` at repo root before committing                                  |
| Generation produces no output             | Remove path from `cadl-ranch-list.js`; emitter doesn't support it                 |
| Test passes locally but body is undefined | Check generated code for placeholder types like `__PLACEHOLDER_*__` — emitter bug |
