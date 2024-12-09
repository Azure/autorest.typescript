// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsContext } from "../../api/networkAnalyticsContext.js";
import { deleteData } from "../../api/deleteData/index.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { DeleteDataDeleteDataOptionalParams } from "../../api/options.js";

/** Interface representing a DeleteData operations. */
export interface DeleteDataOperations {
  /** Delete data for data type. */
  deleteData: (
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    body: Record<string, any>,
    options?: DeleteDataDeleteDataOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getDeleteData(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
) {
  return {
    deleteData: (
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      body: Record<string, any>,
      options?: DeleteDataDeleteDataOptionalParams,
    ) =>
      deleteData(
        context,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        body,
        options,
      ),
  };
}

export function getDeleteDataOperations(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
): DeleteDataOperations {
  return {
    ...getDeleteData(context, subscriptionId),
  };
}
