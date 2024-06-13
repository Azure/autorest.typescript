// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatabaseContext } from "../../api/databaseContext.js";
import { AutonomousDbVersion } from "../../models/models.js";
import {
  get,
  listByLocation,
} from "../../api/autonomousDatabaseVersions/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  AutonomousDatabaseVersionsGetOptionalParams,
  AutonomousDatabaseVersionsListByLocationOptionalParams,
} from "../../models/options.js";

export interface AutonomousDatabaseVersionsOperations {
  get: (
    subscriptionId: string,
    location: string,
    autonomousdbversionsname: string,
    options?: AutonomousDatabaseVersionsGetOptionalParams,
  ) => Promise<AutonomousDbVersion>;
  listByLocation: (
    subscriptionId: string,
    location: string,
    options?: AutonomousDatabaseVersionsListByLocationOptionalParams,
  ) => PagedAsyncIterableIterator<AutonomousDbVersion>;
}

export function getAutonomousDatabaseVersions(context: DatabaseContext) {
  return {
    get: (
      subscriptionId: string,
      location: string,
      autonomousdbversionsname: string,
      options?: AutonomousDatabaseVersionsGetOptionalParams,
    ) =>
      get(context, subscriptionId, location, autonomousdbversionsname, options),
    listByLocation: (
      subscriptionId: string,
      location: string,
      options?: AutonomousDatabaseVersionsListByLocationOptionalParams,
    ) => listByLocation(context, subscriptionId, location, options),
  };
}

export function getAutonomousDatabaseVersionsOperations(
  context: DatabaseContext,
): AutonomousDatabaseVersionsOperations {
  return {
    ...getAutonomousDatabaseVersions(context),
  };
}
