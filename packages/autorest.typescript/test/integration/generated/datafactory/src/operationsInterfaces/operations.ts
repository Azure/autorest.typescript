import type { PagedAsyncIterableIterator } from "@azure/core-paging";
import type { Operation, OperationsListOptionalParams } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Operations. */
export interface Operations {
  /**
   * Lists the available Azure Data Factory API operations.
   * @param options The options parameters.
   */
  list(
    options?: OperationsListOptionalParams,
  ): PagedAsyncIterableIterator<Operation>;
}
