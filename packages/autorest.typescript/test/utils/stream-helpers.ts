// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Readable } from "stream";

export function stringToStream(
  text: string
): NodeJS.ReadableStream | ReadableStream {
  return Readable.from([text]);
}

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
  stream: NodeJS.ReadableStream | ReadableStream
): Promise<number> {
  if (!isNodeReadableStream(stream)) {
    throw new Error("Browser streams are not supported in NodeJS");
  }
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

/**
 * Get the count of the first chunk of the stream
 * @param stream Node.js Readable stream.
 */
export function readFirstChunk(
  stream: NodeJS.ReadableStream | ReadableStream
): Promise<number> {
  if (!isNodeReadableStream(stream)) {
    throw new Error("Browser streams are not supported in NodeJS");
  }
  return new Promise<number>((resolve, reject) => {
    let byteCount = 0;
    stream.on("error", reject);
    stream.on("data", function(chunk: Buffer) {
      byteCount += chunk.length;
      resolve(byteCount);
    });
    stream.on("end", function() {
      resolve(byteCount);
    });
  });
}

/**
 * Checks if the body is a NodeReadable stream which is not supported in Browsers
 */
function isNodeReadableStream(body: any): body is NodeJS.ReadableStream {
  return body && typeof body.pipe === "function";
}
