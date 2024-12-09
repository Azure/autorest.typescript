// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  NetworkAnalyticsContext as Client,
  DeleteDataDeleteDataOptionalParams,
} from "../index.js";
import { _deleteDataRequestSerializer } from "../../models/models.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";
import { json } from "stream/consumers";

export function _deleteDataSend(
  context: Client,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  body: Record<string, any>,
  options: DeleteDataDeleteDataOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/dataTypes/{dataTypeName}/deleteData",
      subscriptionId,
      resourceGroupName,
      dataProductName,
      dataTypeName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        deleteDataContentType: application / json,
        deleteDataContentType: application / json,
      },
      body: _deleteDataRequestSerializer(body),
    });
}

export async function _deleteDataDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete data for data type. */
export function deleteData(
  context: Client,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  body: Record<string, any>,
  options: DeleteDataDeleteDataOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _deleteDataDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _deleteDataSend(
          context,
          resourceGroupName,
          dataProductName,
          dataTypeName,
          body,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}
