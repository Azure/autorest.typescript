---
name: bump-emitter-version
description: Bumps the emitter package versions and updates changelogs. Uses a user-specified target version when provided, otherwise auto-computes @azure-tools/typespec-ts and @azure-tools/rlc-common from monthly rules (minor once per month, patch afterwards), auto-increments @autorest/typescript patch version, synchronizes all cross-package dependency references, runs pnpm install to refresh the lockfile, prepends changelog entries for all three packages, then commits all changes and opens a PR to main.
---

# Bump Emitter Version

Bump the three emitter packages to new versions, synchronize all internal dependency references, refresh the lockfile, and update changelogs.

## Input

The user may optionally provide a **target version** for `@azure-tools/typespec-ts` and `@azure-tools/rlc-common` (e.g., `0.54.0`).

If the user does not provide a target version, compute it automatically with the monthly rule:
- If a **minor bump** has already happened in the current month, bump **patch**.
- Otherwise, bump **minor** (set patch to `0`).

Example: if `0.53.0` was already released in May, all later bumps in May should be patch bumps (`0.53.1`, `0.53.2`, ...).

`@autorest/typescript` is always bumped by one **patch** increment automatically.

## Step 1: Read Current Versions and Resolve Target Version

Read the `version` field from each package's `package.json`:

```
packages/typespec-ts/package.json       → current @azure-tools/typespec-ts version
packages/rlc-common/package.json        → current @azure-tools/rlc-common version
packages/autorest.typescript/package.json → current @autorest/typescript version
```

Compute the new `@autorest/typescript` version by splitting the current version on `.` and incrementing the last segment by 1 (e.g., `6.0.71` → `6.0.72`).

Resolve the target version for both `@azure-tools/typespec-ts` and `@azure-tools/rlc-common`:
- If user provided a target version, use it directly.
- If user did not provide a target version, compute it from the current `@azure-tools/typespec-ts` version and current month changelog history:
  1. Read today's month in `YYYY-MM`.
  2. Read `packages/typespec-ts/CHANGELOG.md` and find entries for the same `YYYY-MM`.
  3. If there is already an entry in this month with patch `0` (for example `0.53.0`), treat this month as already having a minor bump and compute next version as patch bump from current version (e.g., `0.53.1` → `0.53.2`).
  4. If not, compute next version as minor bump from current version (e.g., `0.53.2` → `0.54.0`).

When current versions are inconsistent between `@azure-tools/typespec-ts` and `@azure-tools/rlc-common`, always use `@azure-tools/typespec-ts` as the source of truth for auto-computing the resolved target version.

Use the resolved value as `<target>` in all following steps.

Display a summary table for the user to confirm before proceeding:

| Package | Old Version | New Version |
|---------|-------------|-------------|
| @azure-tools/typespec-ts | `<old>` | `<resolved-target>` |
| @azure-tools/rlc-common | `<old>` | `<resolved-target>` |
| @autorest/typescript | `<old>` | `<old-major>.<old-minor>.<old-patch+1>` |

Also show target source in one line:
- `Target source: user-provided` or `Target source: auto-computed (monthly rule)`.
- If current package versions are inconsistent, also show: `Version baseline: @azure-tools/typespec-ts`.

## Step 2: Update package.json Files

Update all four `package.json` files using the resolved target version from Step 1. Make all changes as file edits (do NOT use terminal sed/awk):

### `packages/typespec-ts/package.json`

1. Update `"version"` to the resolved target version.
2. Update the `@azure-tools/rlc-common` entry (under `dependencies`) from `"workspace:^<old>"` to `"workspace:^<target>"`.

### `packages/rlc-common/package.json`

1. Update `"version"` to the resolved target version.

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

## Step 4: Collect PRs for Changelog

Find the date of the **last release** in `packages/typespec-ts/CHANGELOG.md` — it is the date in the first `## X.Y.Z (YYYY-MM-DD)` heading.

First, sync remote history to avoid missing upstream commits:

```bash
git fetch origin main
```

Then list commits from `origin/main` since that date (do not use `--merges`, because this repo often uses squash/rebase merges):

```bash
git log origin/main --since="<last-release-date>" --format="%s %H"
```

Parse the output and collect PR numbers using either pattern below:
- `Merge pull request #NNNN`
- `... (#NNNN)`

If a commit message has no PR number, skip it.

Use the commit subject line as the description hint, and remove merge/pattern noise when generating the brief description (for example, strip `Merge pull request #NNNN`, leading repo path fragments, and trailing `(#NNNN)`).

Deduplicate PRs by PR number while preserving first-seen order.

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
## <resolved-target-version> (<today-date>)

<changelog-entries>

```

### `packages/rlc-common/CHANGELOG.md`

```md
## <resolved-target-version> (<today-date>)

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

## Step 7: Commit and Open a PR

### 7.1 Create a branch

Create a new branch from the current HEAD named after the resolved target version:

```bash
git checkout -b bump-version-<resolved-target-version>
```

If the branch already exists, append a short timestamp suffix: `bump-version-<resolved-target-version>-<YYYYMMDD>`.

### 7.2 Stage and commit

Stage all modified files and create a single commit:

```bash
git add \
  packages/typespec-ts/package.json \
  packages/rlc-common/package.json \
  packages/autorest.typescript/package.json \
  packages/typespec-test/package.json \
  packages/typespec-ts/CHANGELOG.md \
  packages/rlc-common/CHANGELOG.md \
  packages/autorest.typescript/CHANGELOG.md \
  pnpm-lock.yaml

git commit -m "Bump emitter version to <resolved-target-version>"
```

### 7.3 Push the branch

```bash
git push origin bump-version-<resolved-target-version>
```

If `origin` is not configured or the push fails due to auth, report the error to the user and stop — do not attempt force-push or alternative remotes.

### 7.4 Open a PR

Use the GitHub CLI to create a PR targeting `main`:

```bash
gh pr create \
  --base main \
  --title "Bump emitter version to <resolved-target-version>" \
  --body "## Version Bump\n\nBumps the following packages:\n\n| Package | Old Version | New Version |\n|---------|-------------|-------------|\n| @azure-tools/typespec-ts | <old-typespec-ts> | <resolved-target-version> |\n| @azure-tools/rlc-common | <old-rlc-common> | <resolved-target-version> |\n| @autorest/typescript | <old-autorest> | <new-autorest-version> |\n\n## Changes included\n\n<changelog-entries>"
```

If `gh` is not installed or not authenticated, print the PR URL template and instruct the user to open it manually:
```
https://github.com/Azure/autorest.typescript/compare/main...bump-version-<resolved-target-version>
```

## Step 8: Report

Report to the user:

- The three new package versions
- Which files were updated (package.json + CHANGELOG.md + pnpm-lock.yaml)
- The number of PRs collected for the changelog
- Confirmation that `pnpm install` completed successfully
- The PR URL (or branch URL if `gh` was unavailable)
