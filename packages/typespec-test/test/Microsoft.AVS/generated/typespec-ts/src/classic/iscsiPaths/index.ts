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

/** Interface representing a IscsiPaths operations. */
export interface IscsiPathsOperations {
  /** List IscsiPath resources by PrivateCloud */
  listByPrivateCloud: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: IscsiPathsListByPrivateCloudOptionalParams,
  ) => PagedAsyncIterableIterator<IscsiPath>;
  /** Get a IscsiPath */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: IscsiPathsGetOptionalParams,
  ) => Promise<IscsiPath>;
  /** Create a IscsiPath */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    resource: IscsiPath,
    options?: IscsiPathsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<IscsiPath>, IscsiPath>;
  /** Delete a IscsiPath */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: IscsiPathsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getIscsiPaths(context: AVSContext, subscriptionId: string) {
  return {
    listByPrivateCloud: (
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
  subscriptionId: string,
): IscsiPathsOperations {
  return {
    ...getIscsiPaths(context, subscriptionId),
  };
}
