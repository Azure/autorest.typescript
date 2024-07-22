// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { getLongRunningPoller } from "./pollingHelpers.js";
import { patientRecordSerializer, radiologyInsightsModelConfigurationSerializer, } from "../models/models.js";
import { deserializeRadiologyInsightsInferenceUnion } from "../utils/deserializeUtil.js";
import { isUnexpected, } from "../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@azure-rest/core-client";
export function _inferRadiologyInsightsSend(context, body, options = { requestOptions: {} }) {
    return context
        .path("/radiology-insights/jobs")
        .post({
        ...operationOptionsToRequestParameters(options),
        headers: {
            ...(options?.repeatabilityRequestId !== undefined
                ? { "Repeatability-Request-ID": options?.repeatabilityRequestId }
                : {}),
            ...(options?.repeatabilityFirstSent !== undefined
                ? {
                    "Repeatability-First-Sent": options?.repeatabilityFirstSent?.toUTCString(),
                }
                : {}),
        },
        body: {
            patients: body["patients"].map(patientRecordSerializer),
            configuration: !body.configuration
                ? body.configuration
                : radiologyInsightsModelConfigurationSerializer(body.configuration),
        },
    });
}
export async function _inferRadiologyInsightsDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    result = result;
    if (result?.body?.result === undefined) {
        throw createRestError(`Expected a result in the response at position "result.body.result"`, result);
    }
    return {
        patientResults: result.body.result["patientResults"].map((p) => ({
            patientId: p["patientId"],
            inferences: p["inferences"].map((p) => deserializeRadiologyInsightsInferenceUnion(p)),
        })),
        modelVersion: result.body.result["modelVersion"],
    };
}
/** Creates a Radiology Insights job with the given request body. */
export function inferRadiologyInsights(context, body, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _inferRadiologyInsightsDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _inferRadiologyInsightsSend(context, body, options),
    });
}
//# sourceMappingURL=operations.js.map