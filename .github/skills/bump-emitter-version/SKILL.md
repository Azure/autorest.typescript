---
name: bump-emitter-version
description: Bumps the emitter package versions and updates changelogs. Upgrades @azure-tools/typespec-ts and @azure-tools/rlc-common to a user-specified version, auto-increments @autorest/typescript patch version, synchronizes all cross-package dependency references, runs pnpm install to refresh the lockfile, and prepends changelog entries for all three packages.
---

# Bump Emitter Version

Bump the three emitter packages to new versions, synchronize all internal dependency references, refresh the lockfile, and update changelogs.

## Input

The user provides a **target version** for `@azure-tools/typespec-ts` and `@azure-tools/rlc-common` (e.g., `0.54.0`).  
`@autorest/typescript` is always bumped by one **patch** increment automatically.

## Step 1: Read Current Versions

Read the `version` field from each package's `package.json`:

```
packages/typespec-ts/package.json       → current @azure-tools/typespec-ts version
packages/rlc-common/package.json        → current @azure-tools/rlc-common version
packages/autorest.typescript/package.json → current @autorest/typescript version
```

Compute the new `@autorest/typescript` version by splitting the current version on `.` and incrementing the last segment by 1 (e.g., `6.0.71` → `6.0.72`).

Display a summary table for the user to confirm before proceeding:

| Package | Old Version | New Version |
|---------|-------------|-------------|
| @azure-tools/typespec-ts | `<old>` | `<target>` |
| @azure-tools/rlc-common | `<old>` | `<target>` |
| @autorest/typescript | `<old>` | `<old-major>.<old-minor>.<old-patch+1>` |

## Step 2: Update package.json Files

Update all four `package.json` files. Make all changes as file edits (do NOT use terminal sed/awk):

### `packages/typespec-ts/package.json`

1. Update `"version"` to the target version.
2. Update the `@azure-tools/rlc-common` entry (under `dependencies`) from `"workspace:^<old>"` to `"workspace:^<target>"`.

### `packages/rlc-common/package.json`

1. Update `"version"` to the target version.

### `packages/autorest.typescript/package.json`

1. Update `"version"` to the new `@autorest/typescript` version.
2. Update the `@azure-tools/rlc-common` entry (under `dependencies`) from `"workspace:^<old>"` to `"workspace:^<target>"`.

### `packages/typespec-test/package.json`

1. Update the `@azure-tools/typespec-ts` entry (under `dependencies`) from `"workspace:^<old>"` to `"workspace:^<target>"`.

**Important:** Always read the file before editing to locate the exact strings. Include sufficient surrounding context (3–5 lines) in each replacement to guarantee uniqueness.

## Step 3: Run pnpm install

Run `pnpm install` from the repo root to refresh `pnpm-lock.yaml`:

```bash
cd <repo-root>
PUPPETEER_SKIP_DOWNLOAD=true pnpm install
```

Wait for the command to complete (allow up to 5 minutes). Confirm the lockfile was updated with no errors.

## Step 4: Collect Merged PRs for Changelog

Find the date of the **last release** in `packages/typespec-ts/CHANGELOG.md` — it is the date in the first `## X.Y.Z (YYYY-MM-DD)` heading.

Run the following command from the repo root to list merged PRs since that date:

```bash
git log --oneline --merges --since="<last-release-date>" --format="%s %H"
```

Parse the output. Each line that looks like `Merge pull request #NNNN` is a PR. Extract the PR number and use the commit subject line as a description hint.

For each PR collected, categorize it as `[Feature]` or `[Bugfix]` based on keywords in the commit message:
- Keywords suggesting a feature: `add`, `support`, `implement`, `generate`, `enable`, `introduce`, `bump`, `upgrade`, `update`
- Keywords suggesting a bugfix: `fix`, `correct`, `resolve`, `repair`, `revert`, `address`
- Default to `[Feature]` if ambiguous.

Format each entry as:
```
- [Category] <Brief description from commit message>. Please refer to [#NNNN](https://github.com/Azure/autorest.typescript/pull/NNNN)
```

If no PRs are found since the last release, write a placeholder entry:
```
- [Feature] Version bump.
```

## Step 5: Update CHANGELOG Files

Prepend a new section to the **top** of each of the three changelog files. Use today's date in `YYYY-MM-DD` format.

### `packages/typespec-ts/CHANGELOG.md`

```md
## <target-version> (<today-date>)

<changelog-entries>

```

### `packages/rlc-common/CHANGELOG.md`

```md
## <target-version> (<today-date>)

<changelog-entries>

```

### `packages/autorest.typescript/CHANGELOG.md`

```md
## <new-autorest-version> (<today-date>)

<changelog-entries>

```

**Important:** All three changelogs share the same PR entries — the same list applies to all three. Insert the new section **above** the existing first line. Add a blank line between the new section and the old content.

## Step 6: Verify

After all edits, run a quick sanity check:

```bash
grep -r '"version"' packages/typespec-ts/package.json packages/rlc-common/package.json packages/autorest.typescript/package.json packages/typespec-test/package.json
grep -r '@azure-tools/rlc-common\|@azure-tools/typespec-ts' packages/typespec-ts/package.json packages/rlc-common/package.json packages/autorest.typescript/package.json packages/typespec-test/package.json | grep -v '"name"'
```

Verify:
- All `version` fields show the new versions.
- All internal `workspace:^` references point to the new versions.
- The first line of each `CHANGELOG.md` starts with `## <new-version>`.

## Step 7: Report

Report to the user:

- The three new package versions
- Which files were updated (package.json + CHANGELOG.md)
- The number of PRs collected for the changelog
- Confirmation that `pnpm install` completed successfully
