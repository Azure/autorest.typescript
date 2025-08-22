// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  DirectoryObjectUnion,
  ObjectsGetObjectsByObjectIdsNextOptionalParams,
  GetObjectsParameters,
  ObjectsGetObjectsByObjectIdsOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Objects. */
export interface Objects {
  /**
   * Gets the directory objects specified in a list of object IDs. You can also specify which resource
   * collections (users, groups, etc.) should be searched by specifying the optional types parameter.
   * @param parameters Objects filtering parameters.
   * @param options The options parameters.
   */
  listObjectsByObjectIds(
    parameters: GetObjectsParameters,
    options?: ObjectsGetObjectsByObjectIdsOptionalParams,
  ): PagedAsyncIterableIterator<DirectoryObjectUnion>;
  /**
   * Gets AD group membership for the specified AD object IDs.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  listObjectsByObjectIdsNext(
    nextLink: string,
    options?: ObjectsGetObjectsByObjectIdsNextOptionalParams,
  ): PagedAsyncIterableIterator<DirectoryObjectUnion>;
}
