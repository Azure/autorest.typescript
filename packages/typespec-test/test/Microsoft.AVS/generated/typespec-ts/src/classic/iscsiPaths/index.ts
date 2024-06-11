// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import { IscsiPath } from "../../models/models.js";
import {
  listByPrivateCloud,
  get,
  createOrUpdate,
  $delete,
} from "../../api/iscsiPaths/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  IscsiPathsListByPrivateCloudOptionalParams,
  IscsiPathsGetOptionalParams,
  IscsiPathsCreateOrUpdateOptionalParams,
  IscsiPathsDeleteOptionalParams,
} from "../../models/options.js";

export interface IscsiPathsOperations {
  listByPrivateCloud: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    options?: IscsiPathsListByPrivateCloudOptionalParams,
  ) => PagedAsyncIterableIterator<IscsiPath>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    options?: IscsiPathsGetOptionalParams,
  ) => Promise<IscsiPath>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    resource: IscsiPath,
    options?: IscsiPathsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<IscsiPath>, IscsiPath>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    options?: IscsiPathsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getIscsiPaths(context: AVSContext) {
  return {
    listByPrivateCloud: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      options?: IscsiPathsListByPrivateCloudOptionalParams,
    ) =>
      listByPrivateCloud(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      options?: IscsiPathsGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      resource: IscsiPath,
      options?: IscsiPathsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        resource,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      options?: IscsiPathsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
  };
}

export function getIscsiPathsOperations(
  context: AVSContext,
): IscsiPathsOperations {
  return {
    ...getIscsiPaths(context),
  };
}
