// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureHealthInsightsContext as Client } from "../index.js";
import {
  RadiologyInsightsResult,
  radiologyInsightsResultDeserializer,
  RadiologyInsightsInferenceResult,
  radiologyInsightsInferenceResultDeserializer,
  PatientRecord,
  radiologyInsightsModelConfigurationSerializer,
  patientRecordArraySerializer,
} from "../../models/models.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  RadiologyInsightsCreateJobOptionalParams,
  RadiologyInsightsGetJobOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _createJobSend(
  context: Client,
  patients: PatientRecord[],
  options: RadiologyInsightsCreateJobOptionalParams = { requestOptions: {} },
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

export async function _createJobDeserialize(
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
export function createJob(
  context: Client,
  patients: PatientRecord[],
  options: RadiologyInsightsCreateJobOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<RadiologyInsightsInferenceResult>, RadiologyInsightsInferenceResult> {
  return getLongRunningPoller(context, _createJobDeserialize, ["202", "200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _createJobSend(context, patients, options),

    apiVersion: context.apiVersion ?? "2023-09-01-preview",
  }) as PollerLike<
    OperationState<RadiologyInsightsInferenceResult>,
    RadiologyInsightsInferenceResult
  >;
}

export function _getJobSend(
  context: Client,
  id: string,
  options: RadiologyInsightsGetJobOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/radiology-insights/jobs/{id}{?api%2Dversion}",
    {
      id: id,
      "api%2Dversion": context.apiVersion ?? "2023-09-01-preview",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getJobDeserialize(
  result: PathUncheckedResponse,
): Promise<RadiologyInsightsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return radiologyInsightsResultDeserializer(result.body);
}

/** Gets the status and details of the Radiology Insights job. */
export async function getJob(
  context: Client,
  id: string,
  options: RadiologyInsightsGetJobOptionalParams = { requestOptions: {} },
): Promise<RadiologyInsightsResult> {
  const result = await _getJobSend(context, id, options);
  return _getJobDeserialize(result);
}
