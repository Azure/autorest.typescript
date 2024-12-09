// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsContext } from "../../api/networkAnalyticsContext.js";
import { create } from "../../api/create/index.js";
import { DataProduct, DataType } from "../../models/models.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { CreateCreateOptionalParams } from "../../api/options.js";

/** Interface representing a Create operations. */
export interface CreateOperations {
  /** Create data product resource. */
  create: (
    resourceGroupName: string,
    dataProductName: string,
    resource: DataProduct,
    options?: CreateCreateOptionalParams,
  ) => PollerLike<OperationState<DataProduct>, DataProduct>;
  /** Create data type resource. */
  create: (
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    resource: DataType,
    options?: CreateCreateOptionalParams,
  ) => PollerLike<OperationState<DataType>, DataType>;
}

export function getCreate(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
) {
  return {
    create: (
      resourceGroupName: string,
      dataProductName: string,
      resource: DataProduct,
      options?: CreateCreateOptionalParams,
    ) => create(context, resourceGroupName, dataProductName, resource, options),
    create: (
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      resource: DataType,
      options?: CreateCreateOptionalParams,
    ) =>
      create(
        context,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        resource,
        options,
      ),
  };
}

export function getCreateOperations(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
): CreateOperations {
  return {
    ...getCreate(context, subscriptionId),
  };
}
