// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  readFileSync as readSync,
  promises as fs,
  existsSync as existsSnc
} from "fs";

export function readFileSync(file: string, options: BufferEncoding): string;
export function readFileSync(
  file: string,
  options?: { encoding?: BufferEncoding | null; flag?: string } | null
): Buffer;
export function readFileSync(
  file: string,
  options?:
    | { encoding?: BufferEncoding | null; flag?: string }
    | BufferEncoding
    | null
): Buffer | string {
  return readSync(file, options);
}

export function readFile(
  path: string,
  options?: { encoding?: null; flag?: string }
): Promise<Buffer> {
  return fs.readFile(path, options);
}

export function existsSync(path: string) {
  return existsSnc(path);
}
