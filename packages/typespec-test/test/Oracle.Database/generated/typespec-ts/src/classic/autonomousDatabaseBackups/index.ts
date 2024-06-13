// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  AutonomousDatabaseBackup,
  AutonomousDatabaseBackupUpdate,
} from "../../models/models.js";
import {
  createOrUpdate,
  get,
  $delete,
  update,
  listByAutonomousDatabase,
} from "../../api/autonomousDatabaseBackups/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AutonomousDatabaseBackupsCreateOrUpdateOptionalParams,
  AutonomousDatabaseBackupsGetOptionalParams,
  AutonomousDatabaseBackupsDeleteOptionalParams,
  AutonomousDatabaseBackupsUpdateOptionalParams,
  AutonomousDatabaseBackupsListByAutonomousDatabaseOptionalParams,
} from "../../models/options.js";

export interface AutonomousDatabaseBackupsOperations {
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    autonomousdatabasename: string,
    adbbackupid: string,
    resource: AutonomousDatabaseBackup,
    options?: AutonomousDatabaseBackupsCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<AutonomousDatabaseBackup>,
    AutonomousDatabaseBackup
  >;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    autonomousdatabasename: string,
    adbbackupid: string,
    options?: AutonomousDatabaseBackupsGetOptionalParams,
  ) => Promise<AutonomousDatabaseBackup>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    autonomousdatabasename: string,
    adbbackupid: string,
    options?: AutonomousDatabaseBackupsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    autonomousdatabasename: string,
    adbbackupid: string,
    properties: AutonomousDatabaseBackupUpdate,
    options?: AutonomousDatabaseBackupsUpdateOptionalParams,
  ) => PollerLike<
    OperationState<AutonomousDatabaseBackup>,
    AutonomousDatabaseBackup
  >;
  listByAutonomousDatabase: (
    subscriptionId: string,
    resourceGroupName: string,
    autonomousdatabasename: string,
    options?: AutonomousDatabaseBackupsListByAutonomousDatabaseOptionalParams,
  ) => PagedAsyncIterableIterator<AutonomousDatabaseBackup>;
}

export function getAutonomousDatabaseBackups(context: DatabaseContext) {
  return {
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      autonomousdatabasename: string,
      adbbackupid: string,
      resource: AutonomousDatabaseBackup,
      options?: AutonomousDatabaseBackupsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        adbbackupid,
        resource,
        options,
      ),
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      autonomousdatabasename: string,
      adbbackupid: string,
      options?: AutonomousDatabaseBackupsGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        adbbackupid,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      autonomousdatabasename: string,
      adbbackupid: string,
      options?: AutonomousDatabaseBackupsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        adbbackupid,
        options,
      ),
    update: (
      subscriptionId: string,
      resourceGroupName: string,
      autonomousdatabasename: string,
      adbbackupid: string,
      properties: AutonomousDatabaseBackupUpdate,
      options?: AutonomousDatabaseBackupsUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        adbbackupid,
        properties,
        options,
      ),
    listByAutonomousDatabase: (
      subscriptionId: string,
      resourceGroupName: string,
      autonomousdatabasename: string,
      options?: AutonomousDatabaseBackupsListByAutonomousDatabaseOptionalParams,
    ) =>
      listByAutonomousDatabase(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        options,
      ),
  };
}

export function getAutonomousDatabaseBackupsOperations(
  context: DatabaseContext,
): AutonomousDatabaseBackupsOperations {
  return {
    ...getAutonomousDatabaseBackups(context),
  };
}
