// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  DeletedSite,
  DeletedWebAppsListOptionalParams,
  DeletedWebAppsListByLocationOptionalParams,
  DeletedWebAppsGetDeletedWebAppByLocationOptionalParams,
  DeletedWebAppsGetDeletedWebAppByLocationResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DeletedWebApps. */
export interface DeletedWebApps {
  /**
   * Description for Get all deleted apps for a subscription.
   * @param options The options parameters.
   */
  list(
    options?: DeletedWebAppsListOptionalParams,
  ): PagedAsyncIterableIterator<DeletedSite>;
  /**
   * Description for Get all deleted apps for a subscription at location
   * @param location
   * @param options The options parameters.
   */
  listByLocation(
    location: string,
    options?: DeletedWebAppsListByLocationOptionalParams,
  ): PagedAsyncIterableIterator<DeletedSite>;
  /**
   * Description for Get deleted app for a subscription at location.
   * @param location
   * @param deletedSiteId The numeric ID of the deleted app, e.g. 12345
   * @param options The options parameters.
   */
  getDeletedWebAppByLocation(
    location: string,
    deletedSiteId: string,
    options?: DeletedWebAppsGetDeletedWebAppByLocationOptionalParams,
  ): Promise<DeletedWebAppsGetDeletedWebAppByLocationResponse>;
}
