// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  readFileSync as readSync,
  promises as fs,
  existsSync as existsSnc
} from "fs";

export function readFileSync(file: string, options: string): string;
export function readFileSync(
  file: string,
  options?: { encoding?: string | null; flag?: string } | null
): Uint8Array;
export function readFileSync(
  file: string,
  options?: { encoding?: string | null; flag?: string } | string | null
): Uint8Array | string {
  return readSync(file, options);
}

export function readFile(
  path: string,
  options?: { encoding?: null; flag?: string }
): Promise<Uint8Array> {
  return fs.readFile(path, options);
}

export function existsSync(path: string) {
  return existsSnc(path);
}
