// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ManagementContext } from "../../api/managementContext.js";
import {
  getSubscriptionsUnderManagementGroup,
  $delete,
  create,
  getSubscription,
} from "../../api/managementGroupSubscriptions/operations.js";
import {
  ManagementGroupSubscriptionsGetSubscriptionsUnderManagementGroupOptionalParams,
  ManagementGroupSubscriptionsDeleteOptionalParams,
  ManagementGroupSubscriptionsCreateOptionalParams,
  ManagementGroupSubscriptionsGetSubscriptionOptionalParams,
} from "../../api/managementGroupSubscriptions/options.js";
import { SubscriptionUnderManagementGroup } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a ManagementGroupSubscriptions operations. */
export interface ManagementGroupSubscriptionsOperations {
  /** Retrieves details about all subscriptions which are associated with the management group. */
  getSubscriptionsUnderManagementGroup: (
    groupId: string,
    options?: ManagementGroupSubscriptionsGetSubscriptionsUnderManagementGroupOptionalParams,
  ) => PagedAsyncIterableIterator<SubscriptionUnderManagementGroup>;
  /** De-associates subscription from the management group. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    groupId: string,
    options?: ManagementGroupSubscriptionsDeleteOptionalParams,
  ) => Promise<void>;
  /** Associates existing subscription with the management group. */
  create: (
    groupId: string,
    options?: ManagementGroupSubscriptionsCreateOptionalParams,
  ) => Promise<SubscriptionUnderManagementGroup>;
  /** Retrieves details about given subscription which is associated with the management group. */
  getSubscription: (
    groupId: string,
    options?: ManagementGroupSubscriptionsGetSubscriptionOptionalParams,
  ) => Promise<SubscriptionUnderManagementGroup>;
}

function _getManagementGroupSubscriptions(context: ManagementContext) {
  return {
    getSubscriptionsUnderManagementGroup: (
      groupId: string,
      options?: ManagementGroupSubscriptionsGetSubscriptionsUnderManagementGroupOptionalParams,
    ) => getSubscriptionsUnderManagementGroup(context, groupId, options),
    delete: (
      groupId: string,
      options?: ManagementGroupSubscriptionsDeleteOptionalParams,
    ) => $delete(context, groupId, options),
    create: (
      groupId: string,
      options?: ManagementGroupSubscriptionsCreateOptionalParams,
    ) => create(context, groupId, options),
    getSubscription: (
      groupId: string,
      options?: ManagementGroupSubscriptionsGetSubscriptionOptionalParams,
    ) => getSubscription(context, groupId, options),
  };
}

export function _getManagementGroupSubscriptionsOperations(
  context: ManagementContext,
): ManagementGroupSubscriptionsOperations {
  return {
    ..._getManagementGroupSubscriptions(context),
  };
}
