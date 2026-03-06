/**
 * Converts a browser readable stream to a Promise<Blob>.
 * Used for wrapping binary response `blobBody` in browser environments.
 * Returns `undefined` when the stream is absent (e.g., in Node.js environments).
 */
export function toBlob(
  browserStream?: ReadableStream<Uint8Array>
): Promise<Blob> | undefined {
  if (!browserStream) {
    return undefined;
  }
  return new Response(browserStream).blob();
}
