// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { QuotaContext } from "../../api/quotaContext.js";
import {
  get,
  update,
  list,
} from "../../api/groupQuotaLimitsRequest/operations.js";
import {
  GroupQuotaLimitsRequestGetOptionalParams,
  GroupQuotaLimitsRequestUpdateOptionalParams,
  GroupQuotaLimitsRequestListOptionalParams,
} from "../../api/groupQuotaLimitsRequest/options.js";
import {
  SubmittedResourceRequestStatus,
  GroupQuotaLimitList,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a GroupQuotaLimitsRequest operations. */
export interface GroupQuotaLimitsRequestOperations {
  /** Get API to check the status of a GroupQuota request by requestId. */
  get: (
    managementGroupId: string,
    groupQuotaName: string,
    requestId: string,
    options?: GroupQuotaLimitsRequestGetOptionalParams,
  ) => Promise<SubmittedResourceRequestStatus>;
  /**
   * Create the GroupQuota requests for a specific ResourceProvider/Location/Resource. The resourceName properties are specified in the request body. Only 1 resource quota can be requested. Please note that patch request creates a new groupQuota request.
   * Use the polling API - OperationsStatus URI specified in Azure-AsyncOperation header field, with retry-after duration in seconds to check the intermediate status. This API provides the finals status with the request details and status.
   */
  update: (
    managementGroupId: string,
    groupQuotaName: string,
    resourceProviderName: string,
    location: string,
    options?: GroupQuotaLimitsRequestUpdateOptionalParams,
  ) => PollerLike<OperationState<GroupQuotaLimitList>, GroupQuotaLimitList>;
  /** Get API to check the status of a GroupQuota request by requestId. */
  list: (
    managementGroupId: string,
    groupQuotaName: string,
    resourceProviderName: string,
    filter: string,
    options?: GroupQuotaLimitsRequestListOptionalParams,
  ) => PagedAsyncIterableIterator<SubmittedResourceRequestStatus>;
}

function _getGroupQuotaLimitsRequest(context: QuotaContext) {
  return {
    get: (
      managementGroupId: string,
      groupQuotaName: string,
      requestId: string,
      options?: GroupQuotaLimitsRequestGetOptionalParams,
    ) => get(context, managementGroupId, groupQuotaName, requestId, options),
    update: (
      managementGroupId: string,
      groupQuotaName: string,
      resourceProviderName: string,
      location: string,
      options?: GroupQuotaLimitsRequestUpdateOptionalParams,
    ) =>
      update(
        context,
        managementGroupId,
        groupQuotaName,
        resourceProviderName,
        location,
        options,
      ),
    list: (
      managementGroupId: string,
      groupQuotaName: string,
      resourceProviderName: string,
      filter: string,
      options?: GroupQuotaLimitsRequestListOptionalParams,
    ) =>
      list(
        context,
        managementGroupId,
        groupQuotaName,
        resourceProviderName,
        filter,
        options,
      ),
  };
}

export function _getGroupQuotaLimitsRequestOperations(
  context: QuotaContext,
): GroupQuotaLimitsRequestOperations {
  return {
    ..._getGroupQuotaLimitsRequest(context),
  };
}
