// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatabaseContext } from "../../api/databaseContext.js";
import { DbSystemShape } from "../../models/models.js";
import { get, listByLocation } from "../../api/dbSystemShapes/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  DbSystemShapesGetOptionalParams,
  DbSystemShapesListByLocationOptionalParams,
} from "../../models/options.js";

export interface DbSystemShapesOperations {
  get: (
    subscriptionId: string,
    location: string,
    dbsystemshapename: string,
    options?: DbSystemShapesGetOptionalParams,
  ) => Promise<DbSystemShape>;
  listByLocation: (
    subscriptionId: string,
    location: string,
    options?: DbSystemShapesListByLocationOptionalParams,
  ) => PagedAsyncIterableIterator<DbSystemShape>;
}

export function getDbSystemShapes(context: DatabaseContext) {
  return {
    get: (
      subscriptionId: string,
      location: string,
      dbsystemshapename: string,
      options?: DbSystemShapesGetOptionalParams,
    ) => get(context, subscriptionId, location, dbsystemshapename, options),
    listByLocation: (
      subscriptionId: string,
      location: string,
      options?: DbSystemShapesListByLocationOptionalParams,
    ) => listByLocation(context, subscriptionId, location, options),
  };
}

export function getDbSystemShapesOperations(
  context: DatabaseContext,
): DbSystemShapesOperations {
  return {
    ...getDbSystemShapes(context),
  };
}
