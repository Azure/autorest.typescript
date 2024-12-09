// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AddUserRoleAddUserRoleOptionalParams,
  NetworkAnalyticsContext as Client,
} from "../index.js";
import {
  RoleAssignmentCommonProperties,
  roleAssignmentCommonPropertiesSerializer,
  RoleAssignmentDetail,
  roleAssignmentDetailDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { json } from "stream/consumers";

export function _addUserRoleSend(
  context: Client,
  resourceGroupName: string,
  dataProductName: string,
  body: RoleAssignmentCommonProperties,
  options: AddUserRoleAddUserRoleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/addUserRole",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        addUserRoleContentType: application / json,
        addUserRoleContentType: application / json,
      },
      body: roleAssignmentCommonPropertiesSerializer(body),
    });
}

export async function _addUserRoleDeserialize(
  result: PathUncheckedResponse,
): Promise<RoleAssignmentDetail> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return roleAssignmentDetailDeserializer(result.body);
}

/** Assign role to the data product. */
export async function addUserRole(
  context: Client,
  resourceGroupName: string,
  dataProductName: string,
  body: RoleAssignmentCommonProperties,
  options: AddUserRoleAddUserRoleOptionalParams = { requestOptions: {} },
): Promise<RoleAssignmentDetail> {
  const result = await _addUserRoleSend(
    context,
    resourceGroupName,
    dataProductName,
    body,
    options,
  );
  return _addUserRoleDeserialize(result);
}
