/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  DatabaseRestoreResource,
  RestorableSqlResourcesListOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RestorableSqlResources. */
export interface RestorableSqlResources {
  /**
   * Return a list of database and container combo that exist on the account at the given timestamp and
   * location. This helps in scenarios to validate what resources exist at given timestamp and location.
   * This API requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read' permission.
   * @param location Cosmos DB region, with spaces between words and each word capitalized.
   * @param instanceId The instanceId GUID of a restorable database account.
   * @param options The options parameters.
   */
  list(
    location: string,
    instanceId: string,
    options?: RestorableSqlResourcesListOptionalParams,
  ): PagedAsyncIterableIterator<DatabaseRestoreResource>;
}
