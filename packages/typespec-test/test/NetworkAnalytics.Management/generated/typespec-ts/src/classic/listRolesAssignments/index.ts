// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsContext } from "../../api/networkAnalyticsContext.js";
import { listRolesAssignments } from "../../api/listRolesAssignments/index.js";
import { ListRoleAssignments } from "../../models/models.js";
import { ListRolesAssignmentsListRolesAssignmentsOptionalParams } from "../../api/options.js";

/** Interface representing a ListRolesAssignments operations. */
export interface ListRolesAssignmentsOperations {
  /** List user roles associated with the data product. */
  listRolesAssignments: (
    resourceGroupName: string,
    dataProductName: string,
    body: Record<string, any>,
    options?: ListRolesAssignmentsListRolesAssignmentsOptionalParams,
  ) => Promise<ListRoleAssignments>;
}

export function getListRolesAssignments(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
) {
  return {
    listRolesAssignments: (
      resourceGroupName: string,
      dataProductName: string,
      body: Record<string, any>,
      options?: ListRolesAssignmentsListRolesAssignmentsOptionalParams,
    ) =>
      listRolesAssignments(
        context,
        resourceGroupName,
        dataProductName,
        body,
        options,
      ),
  };
}

export function getListRolesAssignmentsOperations(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
): ListRolesAssignmentsOperations {
  return {
    ...getListRolesAssignments(context, subscriptionId),
  };
}
