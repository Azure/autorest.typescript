// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  AutonomousDatabase,
  AutonomousDatabaseUpdate,
  PeerDbDetails,
  GenerateAutonomousDatabaseWalletDetails,
  AutonomousDatabaseWalletFile,
  RestoreAutonomousDatabaseDetails,
} from "../../models/models.js";
import {
  listBySubscription,
  createOrUpdate,
  get,
  update,
  $delete,
  listByResourceGroup,
  switchover,
  failover,
  generateWallet,
  restore,
  shrink,
} from "../../api/autonomousDatabases/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AutonomousDatabasesListBySubscriptionOptionalParams,
  AutonomousDatabasesCreateOrUpdateOptionalParams,
  AutonomousDatabasesGetOptionalParams,
  AutonomousDatabasesUpdateOptionalParams,
  AutonomousDatabasesDeleteOptionalParams,
  AutonomousDatabasesListByResourceGroupOptionalParams,
  AutonomousDatabasesSwitchoverOptionalParams,
  AutonomousDatabasesFailoverOptionalParams,
  AutonomousDatabasesGenerateWalletOptionalParams,
  AutonomousDatabasesRestoreOptionalParams,
  AutonomousDatabasesShrinkOptionalParams,
} from "../../models/options.js";

export interface AutonomousDatabasesOperations {
  listBySubscription: (
    subscriptionId: string,
    options?: AutonomousDatabasesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<AutonomousDatabase>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    autonomousdatabasename: string,
    resource: AutonomousDatabase,
    options?: AutonomousDatabasesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    autonomousdatabasename: string,
    options?: AutonomousDatabasesGetOptionalParams,
  ) => Promise<AutonomousDatabase>;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    autonomousdatabasename: string,
    properties: AutonomousDatabaseUpdate,
    options?: AutonomousDatabasesUpdateOptionalParams,
  ) => PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    autonomousdatabasename: string,
    options?: AutonomousDatabasesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByResourceGroup: (
    subscriptionId: string,
    resourceGroupName: string,
    options?: AutonomousDatabasesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<AutonomousDatabase>;
  switchover: (
    subscriptionId: string,
    resourceGroupName: string,
    autonomousdatabasename: string,
    body: PeerDbDetails,
    options?: AutonomousDatabasesSwitchoverOptionalParams,
  ) => PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
  failover: (
    subscriptionId: string,
    resourceGroupName: string,
    autonomousdatabasename: string,
    body: PeerDbDetails,
    options?: AutonomousDatabasesFailoverOptionalParams,
  ) => PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
  generateWallet: (
    subscriptionId: string,
    resourceGroupName: string,
    autonomousdatabasename: string,
    body: GenerateAutonomousDatabaseWalletDetails,
    options?: AutonomousDatabasesGenerateWalletOptionalParams,
  ) => Promise<AutonomousDatabaseWalletFile>;
  restore: (
    subscriptionId: string,
    resourceGroupName: string,
    autonomousdatabasename: string,
    body: RestoreAutonomousDatabaseDetails,
    options?: AutonomousDatabasesRestoreOptionalParams,
  ) => PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
  shrink: (
    subscriptionId: string,
    resourceGroupName: string,
    autonomousdatabasename: string,
    options?: AutonomousDatabasesShrinkOptionalParams,
  ) => PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
}

export function getAutonomousDatabases(context: DatabaseContext) {
  return {
    listBySubscription: (
      subscriptionId: string,
      options?: AutonomousDatabasesListBySubscriptionOptionalParams,
    ) => listBySubscription(context, subscriptionId, options),
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      autonomousdatabasename: string,
      resource: AutonomousDatabase,
      options?: AutonomousDatabasesCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        resource,
        options,
      ),
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      autonomousdatabasename: string,
      options?: AutonomousDatabasesGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        options,
      ),
    update: (
      subscriptionId: string,
      resourceGroupName: string,
      autonomousdatabasename: string,
      properties: AutonomousDatabaseUpdate,
      options?: AutonomousDatabasesUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        properties,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      autonomousdatabasename: string,
      options?: AutonomousDatabasesDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        options,
      ),
    listByResourceGroup: (
      subscriptionId: string,
      resourceGroupName: string,
      options?: AutonomousDatabasesListByResourceGroupOptionalParams,
    ) =>
      listByResourceGroup(context, subscriptionId, resourceGroupName, options),
    switchover: (
      subscriptionId: string,
      resourceGroupName: string,
      autonomousdatabasename: string,
      body: PeerDbDetails,
      options?: AutonomousDatabasesSwitchoverOptionalParams,
    ) =>
      switchover(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        body,
        options,
      ),
    failover: (
      subscriptionId: string,
      resourceGroupName: string,
      autonomousdatabasename: string,
      body: PeerDbDetails,
      options?: AutonomousDatabasesFailoverOptionalParams,
    ) =>
      failover(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        body,
        options,
      ),
    generateWallet: (
      subscriptionId: string,
      resourceGroupName: string,
      autonomousdatabasename: string,
      body: GenerateAutonomousDatabaseWalletDetails,
      options?: AutonomousDatabasesGenerateWalletOptionalParams,
    ) =>
      generateWallet(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        body,
        options,
      ),
    restore: (
      subscriptionId: string,
      resourceGroupName: string,
      autonomousdatabasename: string,
      body: RestoreAutonomousDatabaseDetails,
      options?: AutonomousDatabasesRestoreOptionalParams,
    ) =>
      restore(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        body,
        options,
      ),
    shrink: (
      subscriptionId: string,
      resourceGroupName: string,
      autonomousdatabasename: string,
      options?: AutonomousDatabasesShrinkOptionalParams,
    ) =>
      shrink(
        context,
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        options,
      ),
  };
}

export function getAutonomousDatabasesOperations(
  context: DatabaseContext,
): AutonomousDatabasesOperations {
  return {
    ...getAutonomousDatabases(context),
  };
}
