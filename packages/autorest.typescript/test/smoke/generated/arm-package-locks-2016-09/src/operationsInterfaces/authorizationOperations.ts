// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Operation,
  AuthorizationOperationsListOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AuthorizationOperations. */
export interface AuthorizationOperations {
  /**
   * Lists all of the available Microsoft.Authorization REST API operations.
   * @param options The options parameters.
   */
  list(
    options?: AuthorizationOperationsListOptionalParams,
  ): PagedAsyncIterableIterator<Operation>;
}
