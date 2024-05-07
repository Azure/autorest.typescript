// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import getClient from "../rest/index.js";
export function createRadiologyInsights(endpointParam, credential, options = {}) {
    const clientContext = getClient(endpointParam, credential, options);
    return clientContext;
}
//# sourceMappingURL=radiologyInsightsContext.js.map