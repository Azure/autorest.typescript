// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { checkTrialAvailability, checkQuotaAvailability, } from "../../api/locations/index.js";
export function getLocations(context, subscriptionId) {
    return {
        checkTrialAvailability: (location, sku, options) => checkTrialAvailability(context, subscriptionId, location, sku, options),
        checkQuotaAvailability: (location, options) => checkQuotaAvailability(context, subscriptionId, location, options),
    };
}
export function getLocationsOperations(context, subscriptionId) {
    return {
        ...getLocations(context, subscriptionId),
    };
}
//# sourceMappingURL=index.js.map