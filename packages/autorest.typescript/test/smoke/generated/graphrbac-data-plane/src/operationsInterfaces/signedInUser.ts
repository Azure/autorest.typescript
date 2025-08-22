// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  DirectoryObjectUnion,
  SignedInUserListOwnedObjectsNextOptionalParams,
  SignedInUserListOwnedObjectsOptionalParams,
  SignedInUserGetOptionalParams,
  SignedInUserGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SignedInUser. */
export interface SignedInUser {
  /**
   * Get the list of directory objects that are owned by the user.
   * @param options The options parameters.
   */
  listOwnedObjects(
    options?: SignedInUserListOwnedObjectsOptionalParams,
  ): PagedAsyncIterableIterator<DirectoryObjectUnion>;
  /**
   * Get the list of directory objects that are owned by the user.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  listOwnedObjectsNext(
    nextLink: string,
    options?: SignedInUserListOwnedObjectsNextOptionalParams,
  ): PagedAsyncIterableIterator<DirectoryObjectUnion>;
  /**
   * Gets the details for the currently logged-in user.
   * @param options The options parameters.
   */
  get(
    options?: SignedInUserGetOptionalParams,
  ): Promise<SignedInUserGetResponse>;
}
