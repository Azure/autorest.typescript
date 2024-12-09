// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  NetworkAnalyticsContext as Client,
  RemoveUserRoleRemoveUserRoleOptionalParams,
} from "../index.js";
import {
  RoleAssignmentDetail,
  roleAssignmentDetailSerializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { json } from "stream/consumers";

export function _removeUserRoleSend(
  context: Client,
  resourceGroupName: string,
  dataProductName: string,
  body: RoleAssignmentDetail,
  options: RemoveUserRoleRemoveUserRoleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/removeUserRole",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        removeUserRoleContentType: application / json,
        removeUserRoleContentType: application / json,
      },
      body: roleAssignmentDetailSerializer(body),
    });
}

export async function _removeUserRoleDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Remove role from the data product. */
export async function removeUserRole(
  context: Client,
  resourceGroupName: string,
  dataProductName: string,
  body: RoleAssignmentDetail,
  options: RemoveUserRoleRemoveUserRoleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _removeUserRoleSend(
    context,
    resourceGroupName,
    dataProductName,
    body,
    options,
  );
  return _removeUserRoleDeserialize(result);
}
