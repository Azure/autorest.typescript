import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  OperationEntity,
  DomainServiceOperationsListOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DomainServiceOperations. */
export interface DomainServiceOperations {
  /**
   * Lists all the available Domain Services operations.
   * @param options The options parameters.
   */
  list(
    options?: DomainServiceOperationsListOptionalParams,
  ): PagedAsyncIterableIterator<OperationEntity>;
}
