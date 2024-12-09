// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsContext } from "../../api/networkAnalyticsContext.js";
import { UpdateUpdateOptionalParams } from "../../api/options.js";
import { update } from "../../api/update/index.js";
import {
  DataProduct,
  DataProductUpdate,
  DataType,
  DataTypeUpdate,
} from "../../models/models.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Update operations. */
export interface UpdateOperations {
  /** Update data product resource. */
  update: (
    resourceGroupName: string,
    dataProductName: string,
    properties: DataProductUpdate,
    options?: UpdateUpdateOptionalParams,
  ) => PollerLike<OperationState<DataProduct>, DataProduct>;
  /** Update data type resource. */
  update: (
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    properties: DataTypeUpdate,
    options?: UpdateUpdateOptionalParams,
  ) => PollerLike<OperationState<DataType>, DataType>;
}

export function getUpdate(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
) {
  return {
    update: (
      resourceGroupName: string,
      dataProductName: string,
      properties: DataProductUpdate,
      options?: UpdateUpdateOptionalParams,
    ) =>
      update(context, resourceGroupName, dataProductName, properties, options),
    update: (
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      properties: DataTypeUpdate,
      options?: UpdateUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        properties,
        options,
      ),
  };
}

export function getUpdateOperations(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
): UpdateOperations {
  return {
    ...getUpdate(context, subscriptionId),
  };
}
