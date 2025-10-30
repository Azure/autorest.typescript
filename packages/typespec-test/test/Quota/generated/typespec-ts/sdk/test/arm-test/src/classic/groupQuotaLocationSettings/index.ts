// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { QuotaContext } from "../../api/quotaContext.js";
import {
  update,
  createOrUpdate,
  get,
} from "../../api/groupQuotaLocationSettings/operations.js";
import {
  GroupQuotaLocationSettingsUpdateOptionalParams,
  GroupQuotaLocationSettingsCreateOrUpdateOptionalParams,
  GroupQuotaLocationSettingsGetOptionalParams,
} from "../../api/groupQuotaLocationSettings/options.js";
import { GroupQuotasEnforcementStatus } from "../../models/models.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a GroupQuotaLocationSettings operations. */
export interface GroupQuotaLocationSettingsOperations {
  /**
   * Enables the GroupQuotas enforcement for the resource provider and the location specified. The resource provider will start using the group quotas as the overall quota for the subscriptions included in the GroupQuota.  The subscriptions cannot request quota at subscription level since it is now part of an enforced group.
   * The subscriptions share the GroupQuotaLimits assigned to the GroupQuota. If the GroupQuotaLimits is used, then submit a groupQuotaLimit request for the specific resource - provider/location/resource.
   * Once the GroupQuota Enforcement is enabled then, it cannot be deleted or reverted back. To disable GroupQuota Enforcement -
   * 1. Remove all the subscriptions from the groupQuota using the delete API for Subscriptions (Check the example - GroupQuotaSubscriptions_Delete).
   * 2. Ten delete the GroupQuota (Check the example - GroupQuotas_Delete).
   */
  update: (
    managementGroupId: string,
    groupQuotaName: string,
    resourceProviderName: string,
    location: string,
    options?: GroupQuotaLocationSettingsUpdateOptionalParams,
  ) => PollerLike<
    OperationState<GroupQuotasEnforcementStatus>,
    GroupQuotasEnforcementStatus
  >;
  /**
   * Enables the GroupQuotas enforcement for the resource provider and the location specified. The resource provider will start using the group quotas as the overall quota for the subscriptions included in the GroupQuota. The subscriptions cannot request quota at subscription level since it is now part of an enforced group.
   * The subscriptions share the GroupQuotaLimits assigned to the GroupQuota. If the GroupQuotaLimits is used, then submit a groupQuotaLimit request for the specific resource - provider/location/resource.
   * Once the GroupQuota Enforcement is enabled then, it cannot be deleted or reverted back. To disable GroupQuota Enforcement -
   * 1. Remove all the subscriptions from the groupQuota using the delete API for Subscriptions (Check the example - GroupQuotaSubscriptions_Delete).
   * 2. Then delete the GroupQuota (Check the example - GroupQuotas_Delete).
   */
  createOrUpdate: (
    managementGroupId: string,
    groupQuotaName: string,
    resourceProviderName: string,
    location: string,
    options?: GroupQuotaLocationSettingsCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<GroupQuotasEnforcementStatus>,
    GroupQuotasEnforcementStatus
  >;
  /** Gets the GroupQuotas enforcement settings for the ResourceProvider/location. The locations, where GroupQuota enforcement is not enabled will return Not Found. */
  get: (
    managementGroupId: string,
    groupQuotaName: string,
    resourceProviderName: string,
    location: string,
    options?: GroupQuotaLocationSettingsGetOptionalParams,
  ) => Promise<GroupQuotasEnforcementStatus>;
}

function _getGroupQuotaLocationSettings(context: QuotaContext) {
  return {
    update: (
      managementGroupId: string,
      groupQuotaName: string,
      resourceProviderName: string,
      location: string,
      options?: GroupQuotaLocationSettingsUpdateOptionalParams,
    ) =>
      update(
        context,
        managementGroupId,
        groupQuotaName,
        resourceProviderName,
        location,
        options,
      ),
    createOrUpdate: (
      managementGroupId: string,
      groupQuotaName: string,
      resourceProviderName: string,
      location: string,
      options?: GroupQuotaLocationSettingsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        managementGroupId,
        groupQuotaName,
        resourceProviderName,
        location,
        options,
      ),
    get: (
      managementGroupId: string,
      groupQuotaName: string,
      resourceProviderName: string,
      location: string,
      options?: GroupQuotaLocationSettingsGetOptionalParams,
    ) =>
      get(
        context,
        managementGroupId,
        groupQuotaName,
        resourceProviderName,
        location,
        options,
      ),
  };
}

export function _getGroupQuotaLocationSettingsOperations(
  context: QuotaContext,
): GroupQuotaLocationSettingsOperations {
  return {
    ..._getGroupQuotaLocationSettings(context),
  };
}
