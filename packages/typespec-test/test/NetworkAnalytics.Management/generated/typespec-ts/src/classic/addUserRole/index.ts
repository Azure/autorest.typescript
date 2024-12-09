// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsContext } from "../../api/networkAnalyticsContext.js";
import { addUserRole } from "../../api/addUserRole/index.js";
import {
  RoleAssignmentCommonProperties,
  RoleAssignmentDetail,
} from "../../models/models.js";
import { AddUserRoleAddUserRoleOptionalParams } from "../../api/options.js";

/** Interface representing a AddUserRole operations. */
export interface AddUserRoleOperations {
  /** Assign role to the data product. */
  addUserRole: (
    resourceGroupName: string,
    dataProductName: string,
    body: RoleAssignmentCommonProperties,
    options?: AddUserRoleAddUserRoleOptionalParams,
  ) => Promise<RoleAssignmentDetail>;
}

export function getAddUserRole(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
) {
  return {
    addUserRole: (
      resourceGroupName: string,
      dataProductName: string,
      body: RoleAssignmentCommonProperties,
      options?: AddUserRoleAddUserRoleOptionalParams,
    ) =>
      addUserRole(context, resourceGroupName, dataProductName, body, options),
  };
}

export function getAddUserRoleOperations(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
): AddUserRoleOperations {
  return {
    ...getAddUserRole(context, subscriptionId),
  };
}
