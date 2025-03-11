// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import {
  iscsiPathsDelete,
  iscsiPathsCreateOrUpdate,
  iscsiPathsGet,
  iscsiPathsListByPrivateCloud,
} from "../../api/iscsiPaths/index.js";
import {
  IscsiPathsDeleteOptionalParams,
  IscsiPathsCreateOrUpdateOptionalParams,
  IscsiPathsGetOptionalParams,
  IscsiPathsListByPrivateCloudOptionalParams,
} from "../../api/options.js";
import { IscsiPath } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a IscsiPaths operations. */
export interface IscsiPathsOperations {
  /** Delete a IscsiPath */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: IscsiPathsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a IscsiPath */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    resource: IscsiPath,
    options?: IscsiPathsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<IscsiPath>, IscsiPath>;
  /** Get a IscsiPath */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: IscsiPathsGetOptionalParams,
  ) => Promise<IscsiPath>;
  /** List IscsiPath resources by PrivateCloud */
  listByPrivateCloud: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: IscsiPathsListByPrivateCloudOptionalParams,
  ) => PagedAsyncIterableIterator<IscsiPath>;
}

function _getIscsiPaths(context: AzureVMwareSolutionAPIContext) {
  return {
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: IscsiPathsDeleteOptionalParams,
    ) =>
      iscsiPathsDelete(context, resourceGroupName, privateCloudName, options),
    createOrUpdate: (
      resourceGroupName: string,
      privateCloudName: string,
      resource: IscsiPath,
      options?: IscsiPathsCreateOrUpdateOptionalParams,
    ) =>
      iscsiPathsCreateOrUpdate(
        context,
        resourceGroupName,
        privateCloudName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: IscsiPathsGetOptionalParams,
    ) => iscsiPathsGet(context, resourceGroupName, privateCloudName, options),
    listByPrivateCloud: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: IscsiPathsListByPrivateCloudOptionalParams,
    ) =>
      iscsiPathsListByPrivateCloud(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
  };
}

export function _getIscsiPathsOperations(
  context: AzureVMwareSolutionAPIContext,
): IscsiPathsOperations {
  return {
    ..._getIscsiPaths(context),
  };
}
