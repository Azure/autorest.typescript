// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebSiteManagementContext as Client } from "../index.js";
import { defaultErrorResponseDeserializer } from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import { GlobalOperationGroupGetSubscriptionOperationWithAsyncResponseOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getSubscriptionOperationWithAsyncResponseSend(
  context: Client,
  location: string,
  operationId: string,
  options: GlobalOperationGroupGetSubscriptionOperationWithAsyncResponseOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Web/locations/{location}/operations/{operationId}{?api%2Dversion}",
    {
      location: location,
      operationId: operationId,
      subscriptionId: context.subscriptionId,
      "api%2Dversion": context.apiVersion ?? "2025-05-01",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getSubscriptionOperationWithAsyncResponseDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = defaultErrorResponseDeserializer(result.body);

    throw error;
  }

  return;
}

/** Description for Gets an operation in a subscription and given region */
export async function getSubscriptionOperationWithAsyncResponse(
  context: Client,
  location: string,
  operationId: string,
  options: GlobalOperationGroupGetSubscriptionOperationWithAsyncResponseOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _getSubscriptionOperationWithAsyncResponseSend(
    context,
    location,
    operationId,
    options,
  );
  return _getSubscriptionOperationWithAsyncResponseDeserialize(result);
}
