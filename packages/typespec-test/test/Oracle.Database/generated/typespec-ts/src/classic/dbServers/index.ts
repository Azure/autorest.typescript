// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatabaseContext } from "../../api/databaseContext.js";
import { DbServer } from "../../models/models.js";
import {
  get,
  listByCloudExadataInfrastructure,
} from "../../api/dbServers/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  DbServersGetOptionalParams,
  DbServersListByCloudExadataInfrastructureOptionalParams,
} from "../../models/options.js";

export interface DbServersOperations {
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    cloudexadatainfrastructurename: string,
    dbserverocid: string,
    options?: DbServersGetOptionalParams,
  ) => Promise<DbServer>;
  listByCloudExadataInfrastructure: (
    subscriptionId: string,
    resourceGroupName: string,
    cloudexadatainfrastructurename: string,
    options?: DbServersListByCloudExadataInfrastructureOptionalParams,
  ) => PagedAsyncIterableIterator<DbServer>;
}

export function getDbServers(context: DatabaseContext) {
  return {
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      cloudexadatainfrastructurename: string,
      dbserverocid: string,
      options?: DbServersGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        cloudexadatainfrastructurename,
        dbserverocid,
        options,
      ),
    listByCloudExadataInfrastructure: (
      subscriptionId: string,
      resourceGroupName: string,
      cloudexadatainfrastructurename: string,
      options?: DbServersListByCloudExadataInfrastructureOptionalParams,
    ) =>
      listByCloudExadataInfrastructure(
        context,
        subscriptionId,
        resourceGroupName,
        cloudexadatainfrastructurename,
        options,
      ),
  };
}

export function getDbServersOperations(
  context: DatabaseContext,
): DbServersOperations {
  return {
    ...getDbServers(context),
  };
}
