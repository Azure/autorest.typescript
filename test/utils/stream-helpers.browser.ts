// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Reads data from a stream into a Buffer.
 * @param stream Node.js Readable stream.
 */
export function readStreamToBuffer(
  _stream: NodeJS.ReadableStream
): Promise<Buffer> {
  throw new Error("NYI");
}

export function stringToStream(text: string): ReadableStream {
  const encoder = new TextEncoder();
  return new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(text));
      controller.close();
    }
  });
}

/**
 * Counts the number of bytes read from a stream.
 * @param stream  ReadableStream.
 */
export async function countBytesFromStream(
  stream: ReadableStream<Uint8Array>
): Promise<number> {
  const reader = stream.getReader();

  let bytes = 0;
  let readResult = await reader.read();
  while (!readResult.done) {
    bytes += readResult.value.byteLength;
    readResult = await reader.read();
  }
  return bytes;
}

/**
 * Get the count of the first chunk of the stream
 * @param stream Readablestream.
 */
export async function readFirstChunk(
  stream: ReadableStream<Uint8Array>
): Promise<number> {
  const reader = stream.getReader();

  let bytes = 0;
  let readResult = await reader.read();
  bytes += readResult.value?.byteLength ?? 0;
  return bytes;
}
