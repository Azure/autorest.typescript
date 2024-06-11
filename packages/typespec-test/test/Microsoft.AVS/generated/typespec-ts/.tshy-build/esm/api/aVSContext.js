// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import getClient from "../rest/index.js";
/** Azure VMware Solution API */
export function createAVS(credential, options = {}) {
    const clientContext = getClient(credential, options);
    return clientContext;
}
//# sourceMappingURL=aVSContext.js.map