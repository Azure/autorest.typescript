// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsContext } from "../../api/networkAnalyticsContext.js";
import { RemoveUserRoleRemoveUserRoleOptionalParams } from "../../api/options.js";
import { removeUserRole } from "../../api/removeUserRole/index.js";
import { RoleAssignmentDetail } from "../../models/models.js";

/** Interface representing a RemoveUserRole operations. */
export interface RemoveUserRoleOperations {
  /** Remove role from the data product. */
  removeUserRole: (
    resourceGroupName: string,
    dataProductName: string,
    body: RoleAssignmentDetail,
    options?: RemoveUserRoleRemoveUserRoleOptionalParams,
  ) => Promise<void>;
}

export function getRemoveUserRole(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
) {
  return {
    removeUserRole: (
      resourceGroupName: string,
      dataProductName: string,
      body: RoleAssignmentDetail,
      options?: RemoveUserRoleRemoveUserRoleOptionalParams,
    ) =>
      removeUserRole(
        context,
        resourceGroupName,
        dataProductName,
        body,
        options,
      ),
  };
}

export function getRemoveUserRoleOperations(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
): RemoveUserRoleOperations {
  return {
    ...getRemoveUserRole(context, subscriptionId),
  };
}
