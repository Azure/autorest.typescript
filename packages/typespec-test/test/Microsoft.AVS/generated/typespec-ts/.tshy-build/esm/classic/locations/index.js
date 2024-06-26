// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { checkTrialAvailability, checkQuotaAvailability, } from "../../api/locations/index.js";
export function getLocations(context) {
    return {
        checkTrialAvailability: (subscriptionId, location, sku, options) => checkTrialAvailability(context, subscriptionId, location, sku, options),
        checkQuotaAvailability: (subscriptionId, location, options) => checkQuotaAvailability(context, subscriptionId, location, options),
    };
}
export function getLocationsOperations(context) {
    return {
        ...getLocations(context),
    };
}
//# sourceMappingURL=index.js.map