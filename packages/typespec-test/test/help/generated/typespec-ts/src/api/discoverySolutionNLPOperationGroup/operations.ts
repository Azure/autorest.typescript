// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HelpContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  DiscoveryNlpRequest,
  discoveryNlpRequestSerializer,
  DiscoveryNlpResponse,
  discoveryNlpResponseDeserializer,
} from "../../models/models.js";
import {
  DiscoverySolutionNLPOperationGroupDiscoverSolutionsBySubscriptionOptionalParams,
  DiscoverySolutionNLPOperationGroupDiscoverSolutionsOptionalParams,
} from "./options.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _discoverSolutionsBySubscriptionSend(
  context: Client,
  discoverSolutionRequest: DiscoveryNlpRequest,
  options: DiscoverySolutionNLPOperationGroupDiscoverSolutionsBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Help/discoverSolutions{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: discoveryNlpRequestSerializer(discoverSolutionRequest),
    });
}

export async function _discoverSolutionsBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<DiscoveryNlpResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return discoveryNlpResponseDeserializer(result.body);
}

/** Search for relevant Azure Diagnostics, Solutions and Troubleshooters using a natural language issue summary and subscription. */
export async function discoverSolutionsBySubscription(
  context: Client,
  discoverSolutionRequest: DiscoveryNlpRequest,
  options: DiscoverySolutionNLPOperationGroupDiscoverSolutionsBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): Promise<DiscoveryNlpResponse> {
  const result = await _discoverSolutionsBySubscriptionSend(
    context,
    discoverSolutionRequest,
    options,
  );
  return _discoverSolutionsBySubscriptionDeserialize(result);
}

export function _discoverSolutionsSend(
  context: Client,
  discoverSolutionRequest: DiscoveryNlpRequest,
  options: DiscoverySolutionNLPOperationGroupDiscoverSolutionsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.Help/discoverSolutions{?api%2Dversion}",
    {
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: discoveryNlpRequestSerializer(discoverSolutionRequest),
    });
}

export async function _discoverSolutionsDeserialize(
  result: PathUncheckedResponse,
): Promise<DiscoveryNlpResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return discoveryNlpResponseDeserializer(result.body);
}

/** Search for relevant Azure Diagnostics, Solutions and Troubleshooters using a natural language issue summary. */
export async function discoverSolutions(
  context: Client,
  discoverSolutionRequest: DiscoveryNlpRequest,
  options: DiscoverySolutionNLPOperationGroupDiscoverSolutionsOptionalParams = {
    requestOptions: {},
  },
): Promise<DiscoveryNlpResponse> {
  const result = await _discoverSolutionsSend(
    context,
    discoverSolutionRequest,
    options,
  );
  return _discoverSolutionsDeserialize(result);
}
