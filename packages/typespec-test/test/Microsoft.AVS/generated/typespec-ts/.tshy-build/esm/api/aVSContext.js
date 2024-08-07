// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import getClient from "../rest/index.js";
/** Azure VMware Solution API */
export function createAVS(credential, options = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
        ? `${prefixFromOptions} azsdk-js-api`
        : "azsdk-js-api";
    const clientContext = getClient(credential, {
        ...options,
        userAgentOptions: { userAgentPrefix },
    });
    return clientContext;
}
//# sourceMappingURL=aVSContext.js.map