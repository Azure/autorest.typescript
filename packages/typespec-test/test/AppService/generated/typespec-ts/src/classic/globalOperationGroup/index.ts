// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebSiteManagementContext } from "../../api/webSiteManagementContext.js";
import { getSubscriptionOperationWithAsyncResponse } from "../../api/globalOperationGroup/operations.js";
import { GlobalOperationGroupGetSubscriptionOperationWithAsyncResponseOptionalParams } from "../../api/globalOperationGroup/options.js";

/** Interface representing a GlobalOperationGroup operations. */
export interface GlobalOperationGroupOperations {
  /** Description for Gets an operation in a subscription and given region */
  getSubscriptionOperationWithAsyncResponse: (
    location: string,
    operationId: string,
    options?: GlobalOperationGroupGetSubscriptionOperationWithAsyncResponseOptionalParams,
  ) => Promise<void>;
}

function _getGlobalOperationGroup(context: WebSiteManagementContext) {
  return {
    getSubscriptionOperationWithAsyncResponse: (
      location: string,
      operationId: string,
      options?: GlobalOperationGroupGetSubscriptionOperationWithAsyncResponseOptionalParams,
    ) => getSubscriptionOperationWithAsyncResponse(context, location, operationId, options),
  };
}

export function _getGlobalOperationGroupOperations(
  context: WebSiteManagementContext,
): GlobalOperationGroupOperations {
  return {
    ..._getGlobalOperationGroup(context),
  };
}
