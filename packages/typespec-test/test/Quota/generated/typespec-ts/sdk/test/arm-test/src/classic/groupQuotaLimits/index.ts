// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { QuotaContext } from "../../api/quotaContext.js";
import { list } from "../../api/groupQuotaLimits/operations.js";
import { GroupQuotaLimitsListOptionalParams } from "../../api/groupQuotaLimits/options.js";
import { GroupQuotaLimitList } from "../../models/models.js";

/** Interface representing a GroupQuotaLimits operations. */
export interface GroupQuotaLimitsOperations {
  /** Gets the GroupQuotaLimits for the specified resource provider and location for resource names passed in $filter=resourceName eq {SKU}. */
  list: (
    managementGroupId: string,
    groupQuotaName: string,
    resourceProviderName: string,
    location: string,
    options?: GroupQuotaLimitsListOptionalParams,
  ) => Promise<GroupQuotaLimitList>;
}

function _getGroupQuotaLimits(context: QuotaContext) {
  return {
    list: (
      managementGroupId: string,
      groupQuotaName: string,
      resourceProviderName: string,
      location: string,
      options?: GroupQuotaLimitsListOptionalParams,
    ) =>
      list(
        context,
        managementGroupId,
        groupQuotaName,
        resourceProviderName,
        location,
        options,
      ),
  };
}

export function _getGroupQuotaLimitsOperations(
  context: QuotaContext,
): GroupQuotaLimitsOperations {
  return {
    ..._getGroupQuotaLimits(context),
  };
}
