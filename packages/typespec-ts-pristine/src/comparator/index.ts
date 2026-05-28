// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Comparator — Validates pristine emitter output against the baseline emitter.
 *
 * Interface:
 *   compare(fixtures, baselineEmitter, candidateEmitter) → CompareResult
 *
 * Steps:
 *   1. For each fixture in the fixture directory, run both emitters
 *   2. Collect generated output trees
 *   3. Produce: tree diff (files added/removed), per-file unified diff, summary score
 *
 * The comparator does NOT evaluate correctness — only equivalence. Correctness
 * is validated by the existing integration test suite.
 *
 * IMPORTANT: This module does NOT import the baseline emitter as a dependency.
 * It either invokes it as a subprocess (npx @azure-tools/typespec-ts) or reads
 * pre-generated output from disk. No workspace coupling.
 *
 * Location: packages/typespec-ts-pristine/src/comparator/
 * CLI entry: `pnpm compare`
 */

/** Result of comparing two emitter outputs for a single fixture. */
export interface FixtureCompareResult {
  /** Fixture name/path */
  fixture: string;
  /** Files only in baseline output */
  filesOnlyInBaseline: string[];
  /** Files only in candidate output */
  filesOnlyInCandidate: string[];
  /** Files present in both with differing content */
  filesWithDiffs: FileDiff[];
  /** Files present in both with identical content */
  filesIdentical: string[];
  /** Percentage of files that are identical (0-100) */
  score: number;
}

/** A unified diff for a single file. */
export interface FileDiff {
  /** Relative file path */
  path: string;
  /** Unified diff string */
  diff: string;
}

/** Aggregate result across all fixtures. */
export interface CompareResult {
  /** Per-fixture results */
  fixtures: FixtureCompareResult[];
  /** Overall score (average across fixtures) */
  overallScore: number;
  /** Total files compared */
  totalFiles: number;
  /** Total files identical */
  totalIdentical: number;
}

/**
 * Runs the comparator over a set of TypeSpec fixtures.
 *
 * @param fixturesDir - Path to directory containing TypeSpec fixture projects
 * @param baselineOutput - Path to baseline emitter's generated output
 * @param candidateOutput - Path to candidate (pristine) emitter's generated output
 * @returns Comparison results with diffs and scores
 */
export function compare(
  _fixturesDir: string,
  _baselineOutput: string,
  _candidateOutput: string
): CompareResult {
  // TODO: Implementation steps:
  //   1. Enumerate fixture directories
  //   2. For each fixture, glob all .ts files in both output trees
  //   3. Compute set difference (added/removed files)
  //   4. For shared files, compute unified diff
  //   5. Calculate per-fixture and aggregate scores
  throw new Error("compare: not yet implemented");
}
