// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import { CloudLink } from "../../models/models.js";
import {
  listByPrivateCloud,
  get,
  createOrUpdate,
  $delete,
} from "../../api/cloudLinks/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  CloudLinksListByPrivateCloudOptionalParams,
  CloudLinksGetOptionalParams,
  CloudLinksCreateOrUpdateOptionalParams,
  CloudLinksDeleteOptionalParams,
} from "../../models/options.js";

export interface CloudLinksOperations {
  listByPrivateCloud: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    options?: CloudLinksListByPrivateCloudOptionalParams,
  ) => PagedAsyncIterableIterator<CloudLink>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    cloudLinkName: string,
    options?: CloudLinksGetOptionalParams,
  ) => Promise<CloudLink>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    cloudLinkName: string,
    cloudLink: CloudLink,
    options?: CloudLinksCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<CloudLink>, CloudLink>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    cloudLinkName: string,
    options?: CloudLinksDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getCloudLinks(context: AVSContext) {
  return {
    listByPrivateCloud: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      options?: CloudLinksListByPrivateCloudOptionalParams,
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
      cloudLinkName: string,
      options?: CloudLinksGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        cloudLinkName,
        options,
      ),
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      cloudLinkName: string,
      cloudLink: CloudLink,
      options?: CloudLinksCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        cloudLinkName,
        cloudLink,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      cloudLinkName: string,
      options?: CloudLinksDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        cloudLinkName,
        options,
      ),
  };
}

export function getCloudLinksOperations(
  context: AVSContext,
): CloudLinksOperations {
  return {
    ...getCloudLinks(context),
  };
}
