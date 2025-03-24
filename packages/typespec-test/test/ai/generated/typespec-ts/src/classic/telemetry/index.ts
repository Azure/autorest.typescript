// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AIProjectContext } from "../../api/aiProjectContext.js";
import { GetAppInsightsResponse } from "../../models/projects/models.js";
import { TelemetryGetAppInsightsOptionalParams } from "../../api/telemetry/options.js";
import { getAppInsights } from "../../api/telemetry/operations.js";

/** Interface representing a Telemetry operations. */
export interface TelemetryOperations {
  /** Gets the properties of the specified Application Insights resource */
  getAppInsights: (
    appInsightsResourceUrl: string,
    options?: TelemetryGetAppInsightsOptionalParams,
  ) => Promise<GetAppInsightsResponse>;
}

function _getTelemetry(context: AIProjectContext) {
  return {
    getAppInsights: (
      appInsightsResourceUrl: string,
      options?: TelemetryGetAppInsightsOptionalParams,
    ) => getAppInsights(context, appInsightsResourceUrl, options),
  };
}

export function _getTelemetryOperations(
  context: AIProjectContext,
): TelemetryOperations {
  return {
    ..._getTelemetry(context),
  };
}
