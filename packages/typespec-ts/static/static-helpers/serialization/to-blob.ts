/**
 * Converts a browser stream response promise to a Promise<Blob>.
 * Used for wrapping binary response `blobBody` in browser environments.
 */
export async function toBlob(
  browserStreamPromise: Promise<{ body?: ReadableStream<Uint8Array> | null }>
): Promise<Blob> {
  const response = await browserStreamPromise;
  if (!response.body) {
    return new Blob([]);
  }
  return new Response(response.body).blob();
}
