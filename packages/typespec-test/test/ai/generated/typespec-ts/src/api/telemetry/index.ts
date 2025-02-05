// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AIProjectContext as Client,
  TelemetryGetAppInsightsOptionalParams,
} from "../index.js";
import {
  GetAppInsightsResponse,
  getAppInsightsResponseDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getAppInsightsSend(
  context: Client,
  appInsightsResourceUrl: string,
  options: TelemetryGetAppInsightsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/{appInsightsResourceUrl}", appInsightsResourceUrl)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _getAppInsightsDeserialize(
  result: PathUncheckedResponse,
): Promise<GetAppInsightsResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return getAppInsightsResponseDeserializer(result.body);
}

/** Gets the properties of the specified Application Insights resource */
export async function getAppInsights(
  context: Client,
  appInsightsResourceUrl: string,
  options: TelemetryGetAppInsightsOptionalParams = { requestOptions: {} },
): Promise<GetAppInsightsResponse> {
  const result = await _getAppInsightsSend(
    context,
    appInsightsResourceUrl,
    options,
  );
  return _getAppInsightsDeserialize(result);
}
