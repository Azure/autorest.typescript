import { DocumentsSearchGetOptionalParams } from "../models";

/** Interface representing a Documents. */
export interface Documents {
  /**
   * Searches for documents in the index.
   * @param options The options parameters.
   */
  searchGet(options?: DocumentsSearchGetOptionalParams): Promise<void>;
}
