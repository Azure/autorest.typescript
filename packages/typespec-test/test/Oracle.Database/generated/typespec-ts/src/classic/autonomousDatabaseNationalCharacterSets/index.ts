// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatabaseContext } from "../../api/databaseContext.js";
import { AutonomousDatabaseNationalCharacterSet } from "../../models/models.js";
import {
  get,
  listByLocation,
} from "../../api/autonomousDatabaseNationalCharacterSets/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  AutonomousDatabaseNationalCharacterSetsGetOptionalParams,
  AutonomousDatabaseNationalCharacterSetsListByLocationOptionalParams,
} from "../../models/options.js";

export interface AutonomousDatabaseNationalCharacterSetsOperations {
  get: (
    subscriptionId: string,
    location: string,
    adbsncharsetname: string,
    options?: AutonomousDatabaseNationalCharacterSetsGetOptionalParams,
  ) => Promise<AutonomousDatabaseNationalCharacterSet>;
  listByLocation: (
    subscriptionId: string,
    location: string,
    options?: AutonomousDatabaseNationalCharacterSetsListByLocationOptionalParams,
  ) => PagedAsyncIterableIterator<AutonomousDatabaseNationalCharacterSet>;
}

export function getAutonomousDatabaseNationalCharacterSets(
  context: DatabaseContext,
) {
  return {
    get: (
      subscriptionId: string,
      location: string,
      adbsncharsetname: string,
      options?: AutonomousDatabaseNationalCharacterSetsGetOptionalParams,
    ) => get(context, subscriptionId, location, adbsncharsetname, options),
    listByLocation: (
      subscriptionId: string,
      location: string,
      options?: AutonomousDatabaseNationalCharacterSetsListByLocationOptionalParams,
    ) => listByLocation(context, subscriptionId, location, options),
  };
}

export function getAutonomousDatabaseNationalCharacterSetsOperations(
  context: DatabaseContext,
): AutonomousDatabaseNationalCharacterSetsOperations {
  return {
    ...getAutonomousDatabaseNationalCharacterSets(context),
  };
}
