// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import getClient from "../rest/index.js";
export function createParametrizedHost(host, subdomain, sufix, credential, options = {}) {
    const clientContext = getClient(host, subdomain, sufix, credential, options);
    return clientContext;
}
//# sourceMappingURL=ParametrizedHostContext.js.map