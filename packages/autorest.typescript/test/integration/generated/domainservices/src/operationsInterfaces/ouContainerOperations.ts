import type { PagedAsyncIterableIterator } from "@azure/core-paging";
import type {
  OperationEntity,
  OuContainerOperationsListOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a OuContainerOperations. */
export interface OuContainerOperations {
  /**
   * Lists all the available OuContainer operations.
   * @param options The options parameters.
   */
  list(
    options?: OuContainerOperationsListOptionalParams,
  ): PagedAsyncIterableIterator<OperationEntity>;
}
