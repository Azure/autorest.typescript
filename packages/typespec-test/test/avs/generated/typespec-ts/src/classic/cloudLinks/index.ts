// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import {
  cloudLinksDelete,
  cloudLinksCreateOrUpdate,
  cloudLinksGet,
  cloudLinksList,
} from "../../api/cloudLinks/index.js";
import {
  CloudLinksDeleteOptionalParams,
  CloudLinksCreateOrUpdateOptionalParams,
  CloudLinksGetOptionalParams,
  CloudLinksListOptionalParams,
} from "../../api/options.js";
import { CloudLink } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a CloudLinks operations. */
export interface CloudLinksOperations {
  /** Delete a CloudLink */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    cloudLinkName: string,
    options?: CloudLinksDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a CloudLink */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    cloudLinkName: string,
    cloudLink: CloudLink,
    options?: CloudLinksCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<CloudLink>, CloudLink>;
  /** Get a CloudLink */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    cloudLinkName: string,
    options?: CloudLinksGetOptionalParams,
  ) => Promise<CloudLink>;
  /** List CloudLink resources by PrivateCloud */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: CloudLinksListOptionalParams,
  ) => PagedAsyncIterableIterator<CloudLink>;
}

function _getCloudLinks(context: AzureVMwareSolutionAPIContext) {
  return {
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      cloudLinkName: string,
      options?: CloudLinksDeleteOptionalParams,
    ) =>
      cloudLinksDelete(
        context,
        resourceGroupName,
        privateCloudName,
        cloudLinkName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      privateCloudName: string,
      cloudLinkName: string,
      cloudLink: CloudLink,
      options?: CloudLinksCreateOrUpdateOptionalParams,
    ) =>
      cloudLinksCreateOrUpdate(
        context,
        resourceGroupName,
        privateCloudName,
        cloudLinkName,
        cloudLink,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      cloudLinkName: string,
      options?: CloudLinksGetOptionalParams,
    ) =>
      cloudLinksGet(
        context,
        resourceGroupName,
        privateCloudName,
        cloudLinkName,
        options,
      ),
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: CloudLinksListOptionalParams,
    ) => cloudLinksList(context, resourceGroupName, privateCloudName, options),
  };
}

export function _getCloudLinksOperations(
  context: AzureVMwareSolutionAPIContext,
): CloudLinksOperations {
  return {
    ..._getCloudLinks(context),
  };
}
