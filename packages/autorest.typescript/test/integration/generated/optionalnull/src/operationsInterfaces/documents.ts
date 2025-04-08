import type { DocumentsSearchGetOptionalParams } from "../models/index.js";

/** Interface representing a Documents. */
export interface Documents {
  /**
   * Searches for documents in the index.
   * @param options The options parameters.
   */
  searchGet(options?: DocumentsSearchGetOptionalParams): Promise<void>;
}
