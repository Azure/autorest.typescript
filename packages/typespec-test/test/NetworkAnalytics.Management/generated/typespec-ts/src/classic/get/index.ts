// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsContext } from "../../api/networkAnalyticsContext.js";
import { get } from "../../api/get/index.js";
import {
  DataProduct,
  DataType,
  DataProductsCatalog,
} from "../../models/models.js";
import { GetGetOptionalParams } from "../../api/options.js";

/** Interface representing a Get operations. */
export interface GetOperations {
  /** Retrieve data product resource. */
  get: (
    resourceGroupName: string,
    dataProductName: string,
    options?: GetGetOptionalParams,
  ) => Promise<DataProduct>;
  /** Retrieve data type resource. */
  get: (
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    options?: GetGetOptionalParams,
  ) => Promise<DataType>;
  /** Retrieve data type resource. */
  get: (
    resourceGroupName: string,
    options?: GetGetOptionalParams,
  ) => Promise<DataProductsCatalog>;
}

export function getGet(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      dataProductName: string,
      options?: GetGetOptionalParams,
    ) => get(context, resourceGroupName, dataProductName, options),
    get: (
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      options?: GetGetOptionalParams,
    ) =>
      get(context, resourceGroupName, dataProductName, dataTypeName, options),
    get: (resourceGroupName: string, options?: GetGetOptionalParams) =>
      get(context, resourceGroupName, options),
  };
}

export function getGetOperations(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
): GetOperations {
  return {
    ...getGet(context, subscriptionId),
  };
}
