// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { getSessionClientOperations, } from "./classic/sessionClient/index.js";
import { createFace } from "./api/index.js";
export class FaceClient {
    _client;
    /** The pipeline used by this client to make requests */
    pipeline;
    constructor(endpoint, credential, apiVersion, options = {}) {
        this._client = createFace(endpoint, credential, apiVersion, options);
        this.pipeline = this._client.pipeline;
        this.sessionClient = getSessionClientOperations(this._client);
    }
    /** The operation groups for SessionClient */
    sessionClient;
}
//# sourceMappingURL=FaceClient.js.map