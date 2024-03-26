// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import getClient from "../rest/index.js";
export function createFace(endpoint, credential, apiVersion, options = {}) {
    const clientContext = getClient(endpoint, credential, apiVersion, options);
    return clientContext;
}
//# sourceMappingURL=FaceContext.js.map