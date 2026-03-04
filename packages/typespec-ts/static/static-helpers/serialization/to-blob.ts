/**
 * Converts a browser stream response promise to a Promise<Blob>.
 * Used for wrapping binary response `blobBody` in browser environments.
 */
export function toBlob(
  browserStream?: ReadableStream<Uint8Array>,
): Promise<Blob> | undefined {
  if (!browserStream) {
    return undefined;
  }
  return new Response(browserStream).blob();
}
