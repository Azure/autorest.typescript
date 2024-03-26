// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@azure-rest/core-client";
export function _detectUnivariateEntireSeriesSend(context, options, options = {
    requestOptions: {},
}) {
    return context
        .path("/timeseries/entire/detect")
        .post({
        ...operationOptionsToRequestParameters(options),
        body: {
            series: options["series"].map((p) => ({
                timestamp: p["timestamp"]?.toISOString(),
                value: p["value"],
            })),
            granularity: options["granularity"],
            customInterval: options["customInterval"],
            period: options["period"],
            maxAnomalyRatio: options["maxAnomalyRatio"],
            sensitivity: options["sensitivity"],
            imputeMode: options["imputeMode"],
            imputeFixedValue: options["imputeFixedValue"],
        },
    });
}
export async function _detectUnivariateEntireSeriesDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        period: result.body["period"],
        expectedValues: result.body["expectedValues"],
        upperMargins: result.body["upperMargins"],
        lowerMargins: result.body["lowerMargins"],
        isAnomaly: result.body["isAnomaly"],
        isNegativeAnomaly: result.body["isNegativeAnomaly"],
        isPositiveAnomaly: result.body["isPositiveAnomaly"],
        severity: result.body["severity"],
    };
}
/**
 * This operation generates a model with an entire series, each point is detected
 * with the same model. With this method, points before and after a certain point
 * are used to determine whether it is an anomaly. The entire detection can give
 * user an overall status of the time series.
 */
export async function detectUnivariateEntireSeries(context, options, options = {
    requestOptions: {},
}) {
    const result = await _detectUnivariateEntireSeriesSend(context, options, options);
    return _detectUnivariateEntireSeriesDeserialize(result);
}
export function _detectUnivariateLastPointSend(context, options, options = { requestOptions: {} }) {
    return context
        .path("/timeseries/last/detect")
        .post({
        ...operationOptionsToRequestParameters(options),
        body: {
            series: options["series"].map((p) => ({
                timestamp: p["timestamp"]?.toISOString(),
                value: p["value"],
            })),
            granularity: options["granularity"],
            customInterval: options["customInterval"],
            period: options["period"],
            maxAnomalyRatio: options["maxAnomalyRatio"],
            sensitivity: options["sensitivity"],
            imputeMode: options["imputeMode"],
            imputeFixedValue: options["imputeFixedValue"],
        },
    });
}
export async function _detectUnivariateLastPointDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        period: result.body["period"],
        suggestedWindow: result.body["suggestedWindow"],
        expectedValue: result.body["expectedValue"],
        upperMargin: result.body["upperMargin"],
        lowerMargin: result.body["lowerMargin"],
        isAnomaly: result.body["isAnomaly"],
        isNegativeAnomaly: result.body["isNegativeAnomaly"],
        isPositiveAnomaly: result.body["isPositiveAnomaly"],
        severity: result.body["severity"],
    };
}
/**
 * This operation generates a model using the points that you sent into the API,
 * and based on all data to determine whether the last point is anomalous.
 */
export async function detectUnivariateLastPoint(context, options, options = { requestOptions: {} }) {
    const result = await _detectUnivariateLastPointSend(context, options, options);
    return _detectUnivariateLastPointDeserialize(result);
}
export function _detectUnivariateChangePointSend(context, options, options = {
    requestOptions: {},
}) {
    return context
        .path("/timeseries/changepoint/detect")
        .post({
        ...operationOptionsToRequestParameters(options),
        body: {
            series: options["series"].map((p) => ({
                timestamp: p["timestamp"]?.toISOString(),
                value: p["value"],
            })),
            granularity: options["granularity"],
            customInterval: options["customInterval"],
            period: options["period"],
            stableTrendWindow: options["stableTrendWindow"],
            threshold: options["threshold"],
        },
    });
}
export async function _detectUnivariateChangePointDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        period: result.body["period"],
        isChangePoint: result.body["isChangePoint"],
        confidenceScores: result.body["confidenceScores"],
    };
}
/** Evaluate change point score of every series point */
export async function detectUnivariateChangePoint(context, options, options = {
    requestOptions: {},
}) {
    const result = await _detectUnivariateChangePointSend(context, options, options);
    return _detectUnivariateChangePointDeserialize(result);
}
//# sourceMappingURL=index.js.map