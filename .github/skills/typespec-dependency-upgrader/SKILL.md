---
name: typespec-dependency-upgrader
description: Upgrades TypeSpec-related dependencies (@typespec/* and @azure-tools/*) in packages/typespec-ts/ and packages/typespec-test/, runs the full validation suite (pnpm install, unit tests, smoke tests, all 4 integration tests), and opens a PR to the project repo. The PR description lists all package version changes and any failing test cases discovered during validation. Use when the user wants to bump TypeSpec or Azure tools dependencies to their latest versions.
---

# TypeSpec Dependency Upgrader

This skill upgrades TypeSpec-related dependencies in `packages/typespec-ts/` and `packages/typespec-test/`, validates the upgrade with the full test suite, and opens a Pull Request with the results.

**Scope:** Only `packages/typespec-ts/` and `packages/typespec-test/` are modified. Do **not** edit `packages/rlc-common/` or `packages/autorest.typescript/`.

## Prerequisites

Ensure the repository is bootstrapped and fully built before starting:

```bash
PUPPETEER_SKIP_DOWNLOAD=true pnpm install
pnpm build
```

Skip if the user confirms these have already been run recently.

## Step 1: Snapshot Current Versions

Before changing anything, record the current version of every TypeSpec-related dependency so you can produce an accurate diff in the PR description.

Read the following files and collect every dependency whose package name starts with `@typespec/` or `@azure-tools/`:

- `packages/typespec-ts/package.json` — `dependencies`, `devDependencies`, `peerDependencies`
- `packages/typespec-test/package.json` — `dependencies`, `devDependencies`, `peerDependencies`

**Exclusions:** Do **not** update `@typespec/ts-http-runtime` — leave its version untouched.

Store the collected `{ packageName: oldVersion }` map so you can compare it after the upgrade.

## Step 2: Resolve Latest Versions from npm

For each collected package, determine the version to upgrade to:

| Package group | Tag to resolve |
|---|---|
| `@typespec/http-specs`, `@typespec/spector`, `@azure-tools/azure-http-specs`, `@typespec/spec-api` | `next` |
| All other `@typespec/*` and `@azure-tools/*` packages (except `@typespec/ts-http-runtime`) | `latest` |

Run `npm view <package>@<tag> version` for each package to get the concrete version number. For example:

```bash
npm view @typespec/compiler@latest version
npm view @typespec/http-specs@next version
```

Do this for all packages in both `package.json` files in a single batch to avoid repeated round-trips. Build a `{ packageName: newVersion }` map.

## Step 2.5: Early-Exit Check — Nothing to Upgrade

After building the `{ packageName: newVersion }` map in Step 2, compare it against the `{ packageName: oldVersion }` map from Step 1.

If **every** qualifying package already matches the resolved latest version (i.e., the sets are identical after stripping range prefixes such as `^` and `~`), **stop immediately** and report to the user:

```
No packages need upgrading. All TypeSpec-related dependencies are already at the latest published versions:

  @typespec/compiler        1.12.0  (latest)
  @azure-tools/typespec-client-generator-core  0.68.0  (latest)
  ... (list all checked packages)

Nothing to commit. Skill complete.
```

Do **not** run `pnpm install`, tests, or open a PR — there is nothing to do.

Only proceed to Step 3 if at least one package has a version that differs from what is currently in the `package.json` files.

## Step 3: Apply Version Updates

Edit `packages/typespec-ts/package.json` and `packages/typespec-test/package.json`:

- **Only change version strings** — do not add new packages, remove existing packages, or reorder entries.
- For each qualifying package already present in the file, replace **only its version string** with the resolved version.
- If a package appears in Step 2's resolved map but does **not** already exist in the `package.json`, skip it — do not add it.
- Preserve the existing range prefix (`^`, `~`, or exact) **only if the original already has one**. Use the same style already present in the file.
- Leave `@typespec/ts-http-runtime` completely unchanged.
- Do **not** touch any non-TypeSpec dependency.
- Do **not** change any other field (`name`, `scripts`, `files`, `bugs`, `homepage`, etc.).

After editing, verify the files are valid JSON and that only version strings of qualifying packages changed before proceeding.

## Step 4: Install Dependencies

Run `pnpm install` from the repo root to install the new versions and refresh `pnpm-lock.yaml`:

```bash
PUPPETEER_SKIP_DOWNLOAD=true pnpm install
```

Timeout: 15 minutes. Do **not** cancel. If `pnpm install` fails, investigate the error—most are peer-dependency conflicts that can be resolved by reading the error message and adjusting versions.

## Step 5: Build the Monorepo

```bash
pnpm build
```

Timeout: 20 minutes. Do **not** cancel. Fix any TypeScript compilation errors introduced by the upgrade before proceeding. Build errors normally indicate an API change in the upgraded package; read the error, find the affected source file, and apply the minimal fix.

## Step 6: Run Unit Tests

Run unit tests from `packages/typespec-ts/`:

```bash
cd packages/typespec-ts
pnpm unit-test:modular
```

Timeout: 10 minutes.

Collect all failures. For Modular unit test failures caused by unexpected generated output:

```bash
export SCENARIOS_UPDATE=true && pnpm unit-test:modular
```

This refreshes snapshots and often fixes snapshot drift. Re-run `pnpm unit-test` after.

Record any remaining failures (test name + error summary) in your running failure list.

## Step 7: Copy TypeSpec Files

```bash
cd packages/typespec-ts
pnpm copy:typespec
```

This is required before running integration tests. Takes < 1 second.

## Step 8: Run All Four Integration Tests

Run each integration suite in sequence (do **not** skip any). Each takes ~30 minutes.

```bash
cd packages/typespec-ts
pnpm integration-test-ci:rlc
pnpm integration-test-ci:azure-rlc
pnpm integration-test-ci:modular
pnpm integration-test-ci:azure-modular
```

Timeout per suite: 60 minutes. Monitor each to completion — do **not** mark a suite complete just because it started.

For each suite, collect any failing test names and their error messages.

## Step 9: Run Smoke Tests

```bash
cd packages/typespec-test
pnpm smoke-test
```

Timeout: 20 minutes. **Wait until you see the `All specs succeeded!` message** before proceeding. Collect any build or compilation failures.

## Step 10: Format the Codebase

After all tests are done, format the codebase:

```bash
pnpm format
```

Timeout: 10 minutes.

## Step 11: Lint

```bash
cd packages/typespec-ts
pnpm lint
```

Fix any lint errors introduced by the upgrade.

## Step 12: Compute the Version Diff

Using the snapshots from Steps 1 and 2, build the upgrade summary table:

```
| Package | Before | After |
|---|---|---|
| @typespec/compiler | 0.58.0 | 0.59.1 |
| @azure-tools/typespec-client-generator-core | 0.45.0 | 0.46.0 |
| ... | ... | ... |
```

Include only packages whose version actually changed. If a package was already at the latest version, omit it from the table.

## Step 13: Commit Changes

Stage all changed files and commit:

```bash
git add packages/typespec-ts/package.json packages/typespec-test/package.json pnpm-lock.yaml
git add packages/typespec-ts/test/ packages/typespec-test/test/
git commit -m "feat: upgrade TypeSpec dependencies to latest"
```

If the build or tests introduced additional source-level fixes in `packages/typespec-ts/src/`, stage those too.

## Step 14: Push Branch

Push the current branch to origin. Use the existing branch if the user is already on a feature branch, otherwise create one:

```bash
git checkout -b bump/typespec-deps-<YYYY-MM-DD>
git push origin bump/typespec-deps-<YYYY-MM-DD>
```

Replace `<YYYY-MM-DD>` with today's date.

## Step 15: Open Pull Request

Use the GitHub MCP tool (or `gh` CLI if MCP is unavailable) to create a PR.

**PR Title:**
```
feat: upgrade TypeSpec dependencies to latest (<YYYY-MM-DD>)
```

**PR Description template:**

```markdown
## TypeSpec Dependency Upgrade

### Package Version Changes

| Package | Before | After |
|---|---|---|
| @typespec/compiler | x.y.z | a.b.c |
| ... | ... | ... |

### Validation Summary

- **Unit Tests:** ✅ Passed / ❌ N failures
- **Smoke Tests:** ✅ Passed / ❌ N failures
- **RLC Integration Tests:** ✅ Passed / ❌ N failures
- **Azure RLC Integration Tests:** ✅ Passed / ❌ N failures
- **Modular Integration Tests:** ✅ Passed / ❌ N failures
- **Azure Modular Integration Tests:** ✅ Passed / ❌ N failures

### Failing Test Cases

If any test cases failed during validation, list each one here:

#### Unit Test Failures
- `<test suite> > <test name>`: <brief error description>

#### Smoke Test Failures
- `<package/scenario>`: <brief error description>

#### RLC Integration Test Failures
- `<spec file> > <test name>`: <brief error description>

#### Azure RLC Integration Test Failures
- `<spec file> > <test name>`: <brief error description>

#### Modular Integration Test Failures
- `<spec file> > <test name>`: <brief error description>

#### Azure Modular Integration Test Failures
- `<spec file> > <test name>`: <brief error description>

> If no failures occurred in a category, omit that section or write "None".
```

Fill every section with the actual data collected during validation. Do **not** leave placeholder text.

## Error Handling

| Situation | Action |
|---|---|
| `pnpm install` peer-dependency conflict | Read error, adjust conflicting version, retry install |
| Build failure (TypeScript error) | Read compiler error, apply minimal fix in the affected source file, rebuild |
| Test snapshot drift in Modular unit tests | Run `SCENARIOS_UPDATE=true npm run test:modular`, then re-run unit tests |
| Integration test compile error | Update the `.spec.ts` test file (not the generated code) to match the new API |
| Smoke test build failure | Fix the generated client issue in the emitter source, rebuild, re-run smoke tests |
| `gh` CLI not available | Use the GitHub MCP tool (`mcp_gitkraken_pull_request_create` or equivalent) to open the PR |

## Important Rules

- **Never** edit `packages/rlc-common/` or `packages/autorest.typescript/`.
- **Never** update `@typespec/ts-http-runtime`.
- **Never** cancel a running test suite early — wait for it to finish.
- **Never** skip an integration suite — all four must run.
- Monitor each integration test to **completion**, not just until it starts.
- Fix build and lint issues before creating the PR.
- The PR description must list **every** failing test case individually, not just a count.
