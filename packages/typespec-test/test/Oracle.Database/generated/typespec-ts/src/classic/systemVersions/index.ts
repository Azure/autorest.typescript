// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatabaseContext } from "../../api/databaseContext.js";
import { SystemVersion } from "../../models/models.js";
import { get, listByLocation } from "../../api/systemVersions/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  SystemVersionsGetOptionalParams,
  SystemVersionsListByLocationOptionalParams,
} from "../../models/options.js";

export interface SystemVersionsOperations {
  get: (
    subscriptionId: string,
    location: string,
    systemversionname: string,
    options?: SystemVersionsGetOptionalParams,
  ) => Promise<SystemVersion>;
  listByLocation: (
    subscriptionId: string,
    location: string,
    options?: SystemVersionsListByLocationOptionalParams,
  ) => PagedAsyncIterableIterator<SystemVersion>;
}

export function getSystemVersions(context: DatabaseContext) {
  return {
    get: (
      subscriptionId: string,
      location: string,
      systemversionname: string,
      options?: SystemVersionsGetOptionalParams,
    ) => get(context, subscriptionId, location, systemversionname, options),
    listByLocation: (
      subscriptionId: string,
      location: string,
      options?: SystemVersionsListByLocationOptionalParams,
    ) => listByLocation(context, subscriptionId, location, options),
  };
}

export function getSystemVersionsOperations(
  context: DatabaseContext,
): SystemVersionsOperations {
  return {
    ...getSystemVersions(context),
  };
}
