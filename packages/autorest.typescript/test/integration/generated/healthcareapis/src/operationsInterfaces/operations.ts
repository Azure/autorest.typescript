import type { PagedAsyncIterableIterator } from "@azure/core-paging";
import type {
  OperationDetail,
  OperationsListOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Operations. */
export interface Operations {
  /**
   * Lists all of the available operations supported by Microsoft Healthcare resource provider.
   * @param options The options parameters.
   */
  list(
    options?: OperationsListOptionalParams,
  ): PagedAsyncIterableIterator<OperationDetail>;
}
