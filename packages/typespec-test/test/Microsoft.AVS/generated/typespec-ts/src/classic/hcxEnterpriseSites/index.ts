// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import { HcxEnterpriseSite } from "../../models/models.js";
import {
  listByPrivateCloud,
  get,
  createOrUpdate,
  $delete,
} from "../../api/hcxEnterpriseSites/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  HcxEnterpriseSitesListByPrivateCloudOptionalParams,
  HcxEnterpriseSitesGetOptionalParams,
  HcxEnterpriseSitesCreateOrUpdateOptionalParams,
  HcxEnterpriseSitesDeleteOptionalParams,
} from "../../models/options.js";

/** Interface representing a HcxEnterpriseSites operations. */
export interface HcxEnterpriseSitesOperations {
  /** List HcxEnterpriseSite resources by PrivateCloud */
  listByPrivateCloud: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: HcxEnterpriseSitesListByPrivateCloudOptionalParams,
  ) => PagedAsyncIterableIterator<HcxEnterpriseSite>;
  /** Get a HcxEnterpriseSite */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    hcxEnterpriseSiteName: string,
    options?: HcxEnterpriseSitesGetOptionalParams,
  ) => Promise<HcxEnterpriseSite>;
  /** Create a HcxEnterpriseSite */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    hcxEnterpriseSiteName: string,
    hcxEnterpriseSite: HcxEnterpriseSite,
    options?: HcxEnterpriseSitesCreateOrUpdateOptionalParams,
  ) => Promise<HcxEnterpriseSite>;
  /** Delete a HcxEnterpriseSite */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    hcxEnterpriseSiteName: string,
    options?: HcxEnterpriseSitesDeleteOptionalParams,
  ) => Promise<void>;
}

export function getHcxEnterpriseSites(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    listByPrivateCloud: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: HcxEnterpriseSitesListByPrivateCloudOptionalParams,
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
      hcxEnterpriseSiteName: string,
      options?: HcxEnterpriseSitesGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        hcxEnterpriseSiteName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      privateCloudName: string,
      hcxEnterpriseSiteName: string,
      hcxEnterpriseSite: HcxEnterpriseSite,
      options?: HcxEnterpriseSitesCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        hcxEnterpriseSiteName,
        hcxEnterpriseSite,
        options,
      ),
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      hcxEnterpriseSiteName: string,
      options?: HcxEnterpriseSitesDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        hcxEnterpriseSiteName,
        options,
      ),
  };
}

export function getHcxEnterpriseSitesOperations(
  context: AVSContext,
  subscriptionId: string,
): HcxEnterpriseSitesOperations {
  return {
    ...getHcxEnterpriseSites(context, subscriptionId),
  };
}
