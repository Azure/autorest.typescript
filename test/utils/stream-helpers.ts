// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Reads data from a stream into a Buffer.
 * @param stream Node.js Readable stream.
 */
export function readStreamToBuffer(
  stream: NodeJS.ReadableStream
): Promise<Buffer> {
  return new Promise<Buffer>((resolve, reject) => {
    const chunks: Buffer[] = [];
    stream.on("error", reject);
    stream.on("data", function(chunk: Buffer) {
      chunks.push(chunk);
    });
    stream.on("end", function() {
      resolve(Buffer.concat(chunks));
    });
  });
}

/**
 * Counts the number of bytes read from a stream.
 * @param stream Node.js Readable stream.
 */
export function countBytesFromStream(
  stream: NodeJS.ReadableStream
): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    let byteCount = 0;
    stream.on("error", reject);
    stream.on("data", function(chunk: Buffer) {
      byteCount += chunk.length;
    });
    stream.on("end", function() {
      resolve(byteCount);
    });
  });
}
