// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export function readFileSync(file: string, options: string): string;
export function readFileSync(
  file: string,
  options?: { encoding?: string | null; flag?: string } | null
): Uint8Array;
export function readFileSync(
  _file: string,
  _options?: { encoding?: string | null; flag?: string } | string | null
): Uint8Array | string {
  throw new Error("NYI");
}

/**
 * Asynchronously reads the entire contents of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * If a `FileHandle` is provided, the underlying file will _not_ be closed automatically.
 * @param options An object that may contain an optional flag.
 * If a flag is not provided, it defaults to `'r'`.
 */
export async function readFile(
  path: string,
  options?: { encoding?: null; flag?: string | number } | null
): Promise<Uint8Array>;

/**
 * Asynchronously reads the entire contents of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * If a `FileHandle` is provided, the underlying file will _not_ be closed automatically.
 * @param options An object that may contain an optional flag.
 * If a flag is not provided, it defaults to `'r'`.
 */
export async function readFile(
  path: string,
  options: { encoding: BufferEncoding; flag?: string | number } | BufferEncoding
): Promise<string>;

/**
 * Asynchronously reads the entire contents of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * If a `FileHandle` is provided, the underlying file will _not_ be closed automatically.
 * @param options An object that may contain an optional flag.
 * If a flag is not provided, it defaults to `'r'`.
 */
export async function readFile(
  path: string,
  _options?:
    | { encoding?: string | null; flag?: string | number }
    | string
    | null
): Promise<string | Uint8Array> {
  const result = await fetch(path, { method: "GET" });

  if (!result.body) {
    return new Uint8Array();
  }

  const reader = result.body.getReader();
  let readResult = await reader.read();
  let buffer = new Uint8Array();

  while (!readResult.done) {
    buffer = new Uint8Array([...buffer, ...readResult.value]);
    readResult = await reader.read();
  }

  return buffer;
}
