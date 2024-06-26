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

export interface HcxEnterpriseSitesOperations {
  listByPrivateCloud: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    options?: HcxEnterpriseSitesListByPrivateCloudOptionalParams,
  ) => PagedAsyncIterableIterator<HcxEnterpriseSite>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    hcxEnterpriseSiteName: string,
    options?: HcxEnterpriseSitesGetOptionalParams,
  ) => Promise<HcxEnterpriseSite>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    hcxEnterpriseSiteName: string,
    hcxEnterpriseSite: HcxEnterpriseSite,
    options?: HcxEnterpriseSitesCreateOrUpdateOptionalParams,
  ) => Promise<HcxEnterpriseSite>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    hcxEnterpriseSiteName: string,
    options?: HcxEnterpriseSitesDeleteOptionalParams,
  ) => Promise<void>;
}

export function getHcxEnterpriseSites(context: AVSContext) {
  return {
    listByPrivateCloud: (
      subscriptionId: string,
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
      subscriptionId: string,
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
      subscriptionId: string,
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
      subscriptionId: string,
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
): HcxEnterpriseSitesOperations {
  return {
    ...getHcxEnterpriseSites(context),
  };
}
