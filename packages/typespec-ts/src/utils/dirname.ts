import path from "path";
import { fileURLToPath } from "url";

/**
 *
 * @param metaUrl usually import.meta.url
 */
export function getDirname(metaUrl: string) {
  const __filename = fileURLToPath(metaUrl);
  const __dirname = path.dirname(__filename);
  return { __dirname, __filename };
}
