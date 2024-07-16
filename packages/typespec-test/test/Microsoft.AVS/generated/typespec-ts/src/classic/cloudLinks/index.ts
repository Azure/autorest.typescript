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

/** Interface representing a CloudLinks operations. */
export interface CloudLinksOperations {
  /** List CloudLink resources by PrivateCloud */
  listByPrivateCloud: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: CloudLinksListByPrivateCloudOptionalParams,
  ) => PagedAsyncIterableIterator<CloudLink>;
  /** Get a CloudLink */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    cloudLinkName: string,
    options?: CloudLinksGetOptionalParams,
  ) => Promise<CloudLink>;
  /** Create a CloudLink */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    cloudLinkName: string,
    cloudLink: CloudLink,
    options?: CloudLinksCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<CloudLink>, CloudLink>;
  /** Delete a CloudLink */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    cloudLinkName: string,
    options?: CloudLinksDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getCloudLinks(context: AVSContext, subscriptionId: string) {
  return {
    listByPrivateCloud: (
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
  subscriptionId: string,
): CloudLinksOperations {
  return {
    ...getCloudLinks(context, subscriptionId),
  };
}
