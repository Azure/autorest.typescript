// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureHealthInsightsContext } from "../../api/azureHealthInsightsContext.js";
import { createJob, getJob } from "../../api/radiologyInsights/operations.js";
import {
  RadiologyInsightsCreateJobOptionalParams,
  RadiologyInsightsGetJobOptionalParams,
} from "../../api/radiologyInsights/options.js";
import {
  RadiologyInsightsResult,
  RadiologyInsightsInferenceResult,
  PatientRecord,
} from "../../models/models.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a RadiologyInsights operations. */
export interface RadiologyInsightsOperations {
  /** Creates a Radiology Insights job with the given request body. */
  createJob: (
    patients: PatientRecord[],
    options?: RadiologyInsightsCreateJobOptionalParams,
  ) => PollerLike<
    OperationState<RadiologyInsightsInferenceResult>,
    RadiologyInsightsInferenceResult
  >;
  /** Gets the status and details of the Radiology Insights job. */
  getJob: (
    id: string,
    options?: RadiologyInsightsGetJobOptionalParams,
  ) => Promise<RadiologyInsightsResult>;
}

function _getRadiologyInsights(context: AzureHealthInsightsContext) {
  return {
    createJob: (patients: PatientRecord[], options?: RadiologyInsightsCreateJobOptionalParams) =>
      createJob(context, patients, options),
    getJob: (id: string, options?: RadiologyInsightsGetJobOptionalParams) =>
      getJob(context, id, options),
  };
}

export function _getRadiologyInsightsOperations(
  context: AzureHealthInsightsContext,
): RadiologyInsightsOperations {
  return {
    ..._getRadiologyInsights(context),
  };
}
