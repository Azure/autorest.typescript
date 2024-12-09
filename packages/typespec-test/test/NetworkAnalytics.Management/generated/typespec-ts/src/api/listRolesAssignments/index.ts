// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  NetworkAnalyticsContext as Client,
  ListRolesAssignmentsListRolesAssignmentsOptionalParams,
} from "../index.js";
import {
  _listRolesAssignmentsRequestSerializer,
  ListRoleAssignments,
  listRoleAssignmentsDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { json } from "stream/consumers";

export function _listRolesAssignmentsSend(
  context: Client,
  resourceGroupName: string,
  dataProductName: string,
  body: Record<string, any>,
  options: ListRolesAssignmentsListRolesAssignmentsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/listRolesAssignments",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        listRolesAssignmentsContentType: application / json,
        listRolesAssignmentsContentType: application / json,
      },
      body: _listRolesAssignmentsRequestSerializer(body),
    });
}

export async function _listRolesAssignmentsDeserialize(
  result: PathUncheckedResponse,
): Promise<ListRoleAssignments> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return listRoleAssignmentsDeserializer(result.body);
}

/** List user roles associated with the data product. */
export async function listRolesAssignments(
  context: Client,
  resourceGroupName: string,
  dataProductName: string,
  body: Record<string, any>,
  options: ListRolesAssignmentsListRolesAssignmentsOptionalParams = {
    requestOptions: {},
  },
): Promise<ListRoleAssignments> {
  const result = await _listRolesAssignmentsSend(
    context,
    resourceGroupName,
    dataProductName,
    body,
    options,
  );
  return _listRolesAssignmentsDeserialize(result);
}
