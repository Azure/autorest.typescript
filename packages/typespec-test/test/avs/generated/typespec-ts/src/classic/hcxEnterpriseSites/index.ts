// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import {
  hcxEnterpriseSitesDelete,
  hcxEnterpriseSitesCreateOrUpdate,
  hcxEnterpriseSitesGet,
  hcxEnterpriseSitesList,
} from "../../api/hcxEnterpriseSites/index.js";
import {
  HcxEnterpriseSitesDeleteOptionalParams,
  HcxEnterpriseSitesCreateOrUpdateOptionalParams,
  HcxEnterpriseSitesGetOptionalParams,
  HcxEnterpriseSitesListOptionalParams,
} from "../../api/options.js";
import { HcxEnterpriseSite } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a HcxEnterpriseSites operations. */
export interface HcxEnterpriseSitesOperations {
  /** Delete a HcxEnterpriseSite */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    hcxEnterpriseSiteName: string,
    options?: HcxEnterpriseSitesDeleteOptionalParams,
  ) => Promise<void>;
  /** Create a HcxEnterpriseSite */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    hcxEnterpriseSiteName: string,
    hcxEnterpriseSite: HcxEnterpriseSite,
    options?: HcxEnterpriseSitesCreateOrUpdateOptionalParams,
  ) => Promise<HcxEnterpriseSite>;
  /** Get a HcxEnterpriseSite */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    hcxEnterpriseSiteName: string,
    options?: HcxEnterpriseSitesGetOptionalParams,
  ) => Promise<HcxEnterpriseSite>;
  /** List HcxEnterpriseSite resources by PrivateCloud */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: HcxEnterpriseSitesListOptionalParams,
  ) => PagedAsyncIterableIterator<HcxEnterpriseSite>;
}

function _getHcxEnterpriseSites(context: AzureVMwareSolutionAPIContext) {
  return {
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      hcxEnterpriseSiteName: string,
      options?: HcxEnterpriseSitesDeleteOptionalParams,
    ) =>
      hcxEnterpriseSitesDelete(
        context,
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
      hcxEnterpriseSitesCreateOrUpdate(
        context,
        resourceGroupName,
        privateCloudName,
        hcxEnterpriseSiteName,
        hcxEnterpriseSite,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      hcxEnterpriseSiteName: string,
      options?: HcxEnterpriseSitesGetOptionalParams,
    ) =>
      hcxEnterpriseSitesGet(
        context,
        resourceGroupName,
        privateCloudName,
        hcxEnterpriseSiteName,
        options,
      ),
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: HcxEnterpriseSitesListOptionalParams,
    ) =>
      hcxEnterpriseSitesList(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
  };
}

export function _getHcxEnterpriseSitesOperations(
  context: AzureVMwareSolutionAPIContext,
): HcxEnterpriseSitesOperations {
  return {
    ..._getHcxEnterpriseSites(context),
  };
}
