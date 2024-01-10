import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { OperationDetail, OperationsListOptionalParams } from "../models";

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
