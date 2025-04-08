import type { PagedAsyncIterableIterator } from "@azure/core-paging";
import type {
  Operation,
  OperationsListOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Operations. */
export interface Operations {
  /**
   * Lists all of the available Microsoft.Devices REST API operations.
   * @param options The options parameters.
   */
  list(
    options?: OperationsListOptionalParams,
  ): PagedAsyncIterableIterator<Operation>;
}
