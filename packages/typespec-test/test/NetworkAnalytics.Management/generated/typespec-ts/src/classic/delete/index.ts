// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsContext } from "../../api/networkAnalyticsContext.js";
import { $delete } from "../../api/delete/index.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { DeleteDeleteOptionalParams } from "../../api/options.js";

/** Interface representing a Delete operations. */
export interface DeleteOperations {
  /** Delete data product resource. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    dataProductName: string,
    options?: DeleteDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Delete data type resource. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    options?: DeleteDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getDelete(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
) {
  return {
    delete: (
      resourceGroupName: string,
      dataProductName: string,
      options?: DeleteDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, dataProductName, options),
    delete: (
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      options?: DeleteDeleteOptionalParams,
    ) =>
      $delete(
        context,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        options,
      ),
  };
}

export function getDeleteOperations(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
): DeleteOperations {
  return {
    ...getDelete(context, subscriptionId),
  };
}
