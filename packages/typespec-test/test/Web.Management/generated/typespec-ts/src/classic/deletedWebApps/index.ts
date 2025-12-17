// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebContext } from "../../api/webContext.js";
import {
  list,
  listByLocation,
  getDeletedWebAppByLocation,
} from "../../api/deletedWebApps/operations.js";
import {
  DeletedWebAppsListOptionalParams,
  DeletedWebAppsListByLocationOptionalParams,
  DeletedWebAppsGetDeletedWebAppByLocationOptionalParams,
} from "../../api/deletedWebApps/options.js";
import { DeletedSite } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a DeletedWebApps operations. */
export interface DeletedWebAppsOperations {
  /** Description for Get all deleted apps for a subscription. */
  list: (options?: DeletedWebAppsListOptionalParams) => PagedAsyncIterableIterator<DeletedSite>;
  /** Description for Get all deleted apps for a subscription at location */
  listByLocation: (
    location: string,
    options?: DeletedWebAppsListByLocationOptionalParams,
  ) => PagedAsyncIterableIterator<DeletedSite>;
  /** Description for Get deleted app for a subscription at location. */
  getDeletedWebAppByLocation: (
    location: string,
    deletedSiteId: string,
    options?: DeletedWebAppsGetDeletedWebAppByLocationOptionalParams,
  ) => Promise<DeletedSite>;
}

function _getDeletedWebApps(context: WebContext) {
  return {
    list: (options?: DeletedWebAppsListOptionalParams) => list(context, options),
    listByLocation: (location: string, options?: DeletedWebAppsListByLocationOptionalParams) =>
      listByLocation(context, location, options),
    getDeletedWebAppByLocation: (
      location: string,
      deletedSiteId: string,
      options?: DeletedWebAppsGetDeletedWebAppByLocationOptionalParams,
    ) => getDeletedWebAppByLocation(context, location, deletedSiteId, options),
  };
}

export function _getDeletedWebAppsOperations(context: WebContext): DeletedWebAppsOperations {
  return {
    ..._getDeletedWebApps(context),
  };
}
