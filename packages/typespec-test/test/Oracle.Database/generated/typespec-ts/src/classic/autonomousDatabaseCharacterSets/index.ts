// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatabaseContext } from "../../api/databaseContext.js";
import { AutonomousDatabaseCharacterSet } from "../../models/models.js";
import {
  get,
  listByLocation,
} from "../../api/autonomousDatabaseCharacterSets/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  AutonomousDatabaseCharacterSetsGetOptionalParams,
  AutonomousDatabaseCharacterSetsListByLocationOptionalParams,
} from "../../models/options.js";

export interface AutonomousDatabaseCharacterSetsOperations {
  get: (
    subscriptionId: string,
    location: string,
    adbscharsetname: string,
    options?: AutonomousDatabaseCharacterSetsGetOptionalParams,
  ) => Promise<AutonomousDatabaseCharacterSet>;
  listByLocation: (
    subscriptionId: string,
    location: string,
    options?: AutonomousDatabaseCharacterSetsListByLocationOptionalParams,
  ) => PagedAsyncIterableIterator<AutonomousDatabaseCharacterSet>;
}

export function getAutonomousDatabaseCharacterSets(context: DatabaseContext) {
  return {
    get: (
      subscriptionId: string,
      location: string,
      adbscharsetname: string,
      options?: AutonomousDatabaseCharacterSetsGetOptionalParams,
    ) => get(context, subscriptionId, location, adbscharsetname, options),
    listByLocation: (
      subscriptionId: string,
      location: string,
      options?: AutonomousDatabaseCharacterSetsListByLocationOptionalParams,
    ) => listByLocation(context, subscriptionId, location, options),
  };
}

export function getAutonomousDatabaseCharacterSetsOperations(
  context: DatabaseContext,
): AutonomousDatabaseCharacterSetsOperations {
  return {
    ...getAutonomousDatabaseCharacterSets(context),
  };
}
