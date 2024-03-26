// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { getConfidentialLedgerOperations, } from "./classic/confidentialLedger/index.js";
import { createParametrizedHost, } from "./api/index.js";
export class ParametrizedHostClient {
    _client;
    /** The pipeline used by this client to make requests */
    pipeline;
    constructor(host, subdomain, sufix, credential, options = {}) {
        this._client = createParametrizedHost(host, subdomain, sufix, credential, options);
        this.pipeline = this._client.pipeline;
        this.confidentialLedger = getConfidentialLedgerOperations(this._client);
    }
    /** The operation groups for ConfidentialLedger */
    confidentialLedger;
}
//# sourceMappingURL=ParametrizedHostClient.js.map