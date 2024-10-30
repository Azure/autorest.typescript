// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  RadiologyInsightsContext as Client,
  InferRadiologyInsightsOptionalParams,
} from "./index.js";
import {
  PatientRecord,
  patientRecordSerializer,
  radiologyInsightsInferenceOptionsSerializer,
  RadiologyInsightsInferenceResult,
  radiologyInsightsInferenceResultDeserializer,
} from "../models/models.js";
import { getLongRunningPoller } from "../static-helpers/pollingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _inferRadiologyInsightsSend(
  context: Client,
  patients: PatientRecord[],
  options: InferRadiologyInsightsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context.path("/radiology-insights/jobs").post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      ...(options?.repeatabilityRequestId !== undefined
        ? { "Repeatability-Request-ID": options?.repeatabilityRequestId }
        : {}),
      ...(options?.repeatabilityFirstSent !== undefined
        ? {
            "Repeatability-First-Sent": !options?.repeatabilityFirstSent
              ? options?.repeatabilityFirstSent
              : options?.repeatabilityFirstSent.toUTCString(),
          }
        : {}),
    },
    body: {
      patients: patients.map((p: any) => {
        return patientRecordSerializer(p);
      }),
      configuration: {
        verbose: options?.configuration?.["verbose"],
        includeEvidence: options?.configuration?.["includeEvidence"],
        inferenceTypes: !options?.configuration?.["inferenceTypes"]
          ? options?.configuration?.["inferenceTypes"]
          : options?.configuration?.["inferenceTypes"].map((p: any) => {
              return p;
            }),
        inferenceOptions: !options?.configuration?.["inferenceOptions"]
          ? options?.configuration?.["inferenceOptions"]
          : radiologyInsightsInferenceOptionsSerializer(
              options?.configuration?.["inferenceOptions"],
            ),
        locale: options?.configuration?.["locale"],
      },
    },
  });
}

export async function _inferRadiologyInsightsDeserialize(
  result: PathUncheckedResponse,
): Promise<RadiologyInsightsInferenceResult> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  if (result?.body?.result === undefined) {
    throw createRestError(
      `Expected a result in the response at position "result.body.result"`,
      result,
    );
  }

  return radiologyInsightsInferenceResultDeserializer(result.body.result);
}

/** Creates a Radiology Insights job with the given request body. */
export function inferRadiologyInsights(
  context: Client,
  patients: PatientRecord[],
  options: InferRadiologyInsightsOptionalParams = { requestOptions: {} },
): PollerLike<
  OperationState<RadiologyInsightsInferenceResult>,
  RadiologyInsightsInferenceResult
> {
  return getLongRunningPoller(
    context,
    _inferRadiologyInsightsDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _inferRadiologyInsightsSend(context, patients, options),
    },
  ) as PollerLike<
    OperationState<RadiologyInsightsInferenceResult>,
    RadiologyInsightsInferenceResult
  >;
}
