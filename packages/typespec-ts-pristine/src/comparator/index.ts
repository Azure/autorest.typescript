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

import { compile, logDiagnostics, NodeHost, type EmitContext } from "@typespec/compiler";
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { emit } from "../index.js";

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
  /** Line-level match percentage for this file (0-100). */
  matchRate: number;
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
 * Runs the comparator over one fixture output tree.
 *
 * @param fixturesDir - Path to the TypeSpec fixture project
 * @param baselineOutput - Path to baseline emitter's generated output
 * @param candidateOutput - Path to candidate (pristine) emitter's generated output
 * @returns Comparison results with diffs and scores
 */
export function compare(
  fixturesDir: string,
  baselineOutput: string,
  candidateOutput: string
): CompareResult {
  const fixture = fixturesDir.split(/[\\/]/).filter(Boolean).at(-1) ?? fixturesDir;
  const baselineFiles = listFiles(baselineOutput);
  const candidateFiles = listFiles(candidateOutput);
  const baselineSet = new Set(baselineFiles);
  const candidateSet = new Set(candidateFiles);
  const filesOnlyInBaseline = baselineFiles.filter((file) => !candidateSet.has(file));
  const filesOnlyInCandidate = candidateFiles.filter((file) => !baselineSet.has(file));
  const filesIdentical: string[] = [];
  const filesWithDiffs: FileDiff[] = [];

  for (const file of baselineFiles.filter((item) => candidateSet.has(item))) {
    const baseline = readFileSync(join(baselineOutput, file), "utf-8");
    const candidate = readFileSync(join(candidateOutput, file), "utf-8");
    if (baseline === candidate) {
      filesIdentical.push(file);
    } else {
      filesWithDiffs.push({
        path: file,
        diff: makeUnifiedDiff(file, baseline, candidate),
        matchRate: getLineMatchRate(baseline, candidate)
      });
    }
  }

  const totalFiles = filesOnlyInBaseline.length + filesOnlyInCandidate.length + filesIdentical.length + filesWithDiffs.length;
  const score = totalFiles === 0 ? 100 : (filesIdentical.length / totalFiles) * 100;
  const fixtureResult: FixtureCompareResult = {
    fixture,
    filesOnlyInBaseline,
    filesOnlyInCandidate,
    filesWithDiffs,
    filesIdentical,
    score
  };

  return {
    fixtures: [fixtureResult],
    overallScore: fixtureResult.score,
    totalFiles,
    totalIdentical: filesIdentical.length
  };
}

export async function compareFixture(fixtureName = "spread"): Promise<CompareResult> {
  const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../../../../..");
  const fixtureDir = join(repoRoot, "packages/typespec-test/test", fixtureName);
  const baselineOutput = join(fixtureDir, "generated/typespec-ts");
  const candidateOutput = join(repoRoot, "packages/typespec-ts-pristine/dist/compare", fixtureName);

  rmSync(candidateOutput, { recursive: true, force: true });
  await runPristineEmitter(fixtureDir, candidateOutput);

  return compare(fixtureDir, baselineOutput, candidateOutput);
}

async function runPristineEmitter(fixtureDir: string, outputDir: string): Promise<void> {
  const mainFile = join(fixtureDir, "spec/main.tsp");
  const config = join(fixtureDir, "tspconfig.yaml");
  const program = await compile(NodeHost, mainFile, {
    config,
    noEmit: true
  });

  if (program.diagnostics.length > 0) {
    logDiagnostics(program.diagnostics, NodeHost.logSink);
  }
  if (program.hasError()) {
    throw new Error(`TypeSpec compilation failed for ${fixtureDir}`);
  }

  const context: EmitContext<Record<string, any>> = {
    program,
    emitterOutputDir: outputDir,
    options: readTypespecTsOptions(config),
    perf: {
      startTimer: () => ({ end: () => 0 }),
      time: (_label, callback) => callback(),
      timeAsync: (_label, callback) => callback(),
      report: () => undefined
    }
  };

  const files = await emit(context);
  for (const file of files) {
    const path = join(outputDir, file.path);
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, file.content);
  }
}

function listFiles(root: string, current = ""): string[] {
  const directory = join(root, current);
  if (!existsSync(directory)) {
    return [];
  }

  return readdirSync(directory)
    .filter((entry) => !shouldSkipEntry(entry))
    .flatMap((entry) => {
      const relativePath = current ? `${current}/${entry}` : entry;
      const fullPath = join(root, relativePath);
      return statSync(fullPath).isDirectory() ? listFiles(root, relativePath) : [relativePath];
    })
    .sort();
}

function shouldSkipEntry(entry: string): boolean {
  return [".tshy", "dist", "dist-browser", "dist-esm", "node_modules", "review", "temp", "metadata.json", "package-lock.json"].includes(entry);
}

function readTypespecTsOptions(configPath: string): Record<string, unknown> {
  const content = readFileSync(configPath, "utf-8");
  const packageName = content.match(/name:\s*["']?([^\s"']+)/)?.[1];
  const packageVersion = content.match(/version:\s*["']?([^\s"']+)/)?.[1];
  const packageDescription = content.match(/description:\s*["']?([^\n"']+)/)?.[1]?.trim();
  return {
    "package-details": {
      ...(packageName ? { name: packageName } : {}),
      ...(packageVersion ? { version: packageVersion } : {}),
      ...(packageDescription ? { description: packageDescription } : {})
    }
  };
}

function makeUnifiedDiff(path: string, baseline: string, candidate: string): string {
  const baselineLines = baseline.split(/\r?\n/);
  const candidateLines = candidate.split(/\r?\n/);
  const firstDifferentLine = findFirstDifferentLine(baselineLines, candidateLines);
  const start = Math.max(firstDifferentLine - 3, 0);
  const end = Math.min(Math.max(baselineLines.length, candidateLines.length), firstDifferentLine + 8);
  const lines = [`--- baseline/${path}`, `+++ candidate/${path}`, `@@ -${start + 1},${end - start} +${start + 1},${end - start} @@`];

  for (let index = start; index < end; index++) {
    const baselineLine = baselineLines[index];
    const candidateLine = candidateLines[index];
    if (baselineLine === candidateLine) {
      lines.push(` ${baselineLine ?? ""}`);
    } else {
      if (baselineLine !== undefined) {
        lines.push(`-${baselineLine}`);
      }
      if (candidateLine !== undefined) {
        lines.push(`+${candidateLine}`);
      }
    }
  }

  return lines.join("\n");
}

function getLineMatchRate(baseline: string, candidate: string): number {
  const baselineLines = baseline.split(/\r?\n/);
  const candidateLines = candidate.split(/\r?\n/);
  const denominator = Math.max(baselineLines.length, candidateLines.length);
  if (denominator === 0) {
    return 100;
  }
  return (getCommonLineCount(baselineLines, candidateLines) / denominator) * 100;
}

function getCommonLineCount(left: string[], right: string[]): number {
  const previous = Array.from({ length: right.length + 1 }, () => 0);
  const current = Array.from({ length: right.length + 1 }, () => 0);

  for (const leftLine of left) {
    for (let index = 0; index < right.length; index++) {
      current[index + 1] =
        leftLine === right[index]
          ? previous[index]! + 1
          : Math.max(previous[index + 1]!, current[index]!);
    }
    previous.splice(0, previous.length, ...current);
    current.fill(0);
  }

  return previous[right.length] ?? 0;
}

function findFirstDifferentLine(left: string[], right: string[]): number {
  const length = Math.max(left.length, right.length);
  for (let index = 0; index < length; index++) {
    if (left[index] !== right[index]) {
      return index;
    }
  }
  return 0;
}

function printResult(result: CompareResult): void {
  for (const fixture of result.fixtures) {
    const candidateCount = fixture.filesIdentical.length + fixture.filesWithDiffs.length + fixture.filesOnlyInCandidate.length;
    console.log(`Fixture: ${fixture.fixture}`);
    console.log(`  Candidate emitted files: ${candidateCount}`);
    console.log(`  Score: ${fixture.score.toFixed(1)}% identical files`);
    if (fixture.filesIdentical.length > 0) {
      console.log(`  Identical: ${fixture.filesIdentical.join(", ")}`);
    }
    if (fixture.filesWithDiffs.length > 0) {
      console.log("  Per-file match rates:");
      for (const diff of fixture.filesWithDiffs) {
        console.log(`    ${diff.path}: ${diff.matchRate.toFixed(1)}%`);
      }
    }
    if (fixture.filesOnlyInBaseline.length > 0) {
      console.log(`  Missing in candidate: ${fixture.filesOnlyInBaseline.join(", ")}`);
    }
    if (fixture.filesOnlyInCandidate.length > 0) {
      console.log(`  Extra in candidate: ${fixture.filesOnlyInCandidate.join(", ")}`);
    }
    for (const diff of fixture.filesWithDiffs.slice(0, 3)) {
      console.log(`  Diff: ${diff.path}`);
      console.log(diff.diff);
    }
  }
}

if (process.argv[1] && relative(process.argv[1], fileURLToPath(import.meta.url)) === "") {
  const fixtureName = process.argv[2] ?? "spread";
  compareFixture(fixtureName)
    .then(printResult)
    .catch((error: unknown) => {
      console.error(error instanceof Error ? error.message : String(error));
      process.exitCode = 1;
    });
}
