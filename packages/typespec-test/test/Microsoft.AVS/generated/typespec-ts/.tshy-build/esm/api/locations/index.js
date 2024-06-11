// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@azure-rest/core-client";
export function _checkTrialAvailabilitySend(context, subscriptionId, location, sku, options = {
    requestOptions: {},
}) {
    return context
        .path("/subscriptions/{subscriptionId}/providers/Microsoft.AVS/locations/{location}/checkTrialAvailability", subscriptionId, location)
        .post({
        ...operationOptionsToRequestParameters(options),
        body: sku === undefined
            ? sku
            : {
                name: sku["name"],
                tier: sku["tier"],
                size: sku["size"],
                family: sku["family"],
                capacity: sku["capacity"],
            },
    });
}
export async function _checkTrialAvailabilityDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        status: result.body["status"],
        availableHosts: result.body["availableHosts"],
    };
}
/** Return trial status for subscription by region */
export async function checkTrialAvailability(context, subscriptionId, location, sku, options = {
    requestOptions: {},
}) {
    const result = await _checkTrialAvailabilitySend(context, subscriptionId, location, sku, options);
    return _checkTrialAvailabilityDeserialize(result);
}
export function _checkQuotaAvailabilitySend(context, subscriptionId, location, options = {
    requestOptions: {},
}) {
    return context
        .path("/subscriptions/{subscriptionId}/providers/Microsoft.AVS/locations/{location}/checkQuotaAvailability", subscriptionId, location)
        .post({ ...operationOptionsToRequestParameters(options) });
}
export async function _checkQuotaAvailabilityDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        hostsRemaining: result.body["hostsRemaining"],
        quotaEnabled: result.body["quotaEnabled"],
    };
}
/** Return quota for subscription by region */
export async function checkQuotaAvailability(context, subscriptionId, location, options = {
    requestOptions: {},
}) {
    const result = await _checkQuotaAvailabilitySend(context, subscriptionId, location, options);
    return _checkQuotaAvailabilityDeserialize(result);
}
//# sourceMappingURL=index.js.map