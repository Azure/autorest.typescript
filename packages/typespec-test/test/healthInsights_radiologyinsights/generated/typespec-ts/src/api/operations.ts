// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RadiologyInsightsContext as Client } from "./index.js";
import {
  PatientRecord,
  radiologyInsightsModelConfigurationSerializer,
  patientRecordArraySerializer,
  RadiologyInsightsInferenceResult,
  radiologyInsightsInferenceResultDeserializer,
} from "../models/models.js";
import { getLongRunningPoller } from "../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { InferRadiologyInsightsOptionalParams } from "./options.js";
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
  const path = expandUrlTemplate(
    "/radiology-insights/jobs{?api%2Dversion}",
    {
      "api%2Dversion": context.apiVersion ?? "2023-09-01-preview",
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
        ...(options?.repeatabilityRequestId !== undefined
          ? { "repeatability-request-id": options?.repeatabilityRequestId }
          : {}),
        ...(options?.repeatabilityFirstSent !== undefined
          ? {
              "repeatability-first-sent": !options?.repeatabilityFirstSent
                ? options?.repeatabilityFirstSent
                : options?.repeatabilityFirstSent.toUTCString(),
            }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: {
        patients: patientRecordArraySerializer(patients),
        configuration: !options?.configuration
          ? options?.configuration
          : radiologyInsightsModelConfigurationSerializer(options?.configuration),
      },
    });
}

export async function _inferRadiologyInsightsDeserialize(
  result: PathUncheckedResponse,
): Promise<RadiologyInsightsInferenceResult> {
  const expectedStatuses = ["202", "200", "201"];
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
): PollerLike<OperationState<RadiologyInsightsInferenceResult>, RadiologyInsightsInferenceResult> {
  return getLongRunningPoller(context, _inferRadiologyInsightsDeserialize, ["202", "200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _inferRadiologyInsightsSend(context, patients, options),

    apiVersion: context.apiVersion ?? "2023-09-01-preview",
  }) as PollerLike<
    OperationState<RadiologyInsightsInferenceResult>,
    RadiologyInsightsInferenceResult
  >;
}
