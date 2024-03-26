// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import getClient from "../rest/index.js";
export function createRadiologyInsights(endpoint, credential, options = {}) {
    const clientContext = getClient(endpoint, credential, options);
    return clientContext;
}
//# sourceMappingURL=RadiologyInsightsContext.js.map