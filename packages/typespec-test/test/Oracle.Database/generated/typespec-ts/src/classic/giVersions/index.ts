// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatabaseContext } from "../../api/databaseContext.js";
import { GiVersion } from "../../models/models.js";
import { get, listByLocation } from "../../api/giVersions/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  GiVersionsGetOptionalParams,
  GiVersionsListByLocationOptionalParams,
} from "../../models/options.js";

export interface GiVersionsOperations {
  get: (
    subscriptionId: string,
    location: string,
    giversionname: string,
    options?: GiVersionsGetOptionalParams,
  ) => Promise<GiVersion>;
  listByLocation: (
    subscriptionId: string,
    location: string,
    options?: GiVersionsListByLocationOptionalParams,
  ) => PagedAsyncIterableIterator<GiVersion>;
}

export function getGiVersions(context: DatabaseContext) {
  return {
    get: (
      subscriptionId: string,
      location: string,
      giversionname: string,
      options?: GiVersionsGetOptionalParams,
    ) => get(context, subscriptionId, location, giversionname, options),
    listByLocation: (
      subscriptionId: string,
      location: string,
      options?: GiVersionsListByLocationOptionalParams,
    ) => listByLocation(context, subscriptionId, location, options),
  };
}

export function getGiVersionsOperations(
  context: DatabaseContext,
): GiVersionsOperations {
  return {
    ...getGiVersions(context),
  };
}
