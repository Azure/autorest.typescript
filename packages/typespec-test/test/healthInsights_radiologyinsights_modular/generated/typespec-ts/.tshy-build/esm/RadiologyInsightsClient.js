// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { inferRadiologyInsights, createRadiologyInsights, } from "./api/index.js";
export class RadiologyInsightsClient {
    _client;
    /** The pipeline used by this client to make requests */
    pipeline;
    constructor(endpoint, credential, options = {}) {
        this._client = createRadiologyInsights(endpoint, credential, options);
        this.pipeline = this._client.pipeline;
    }
    /** Creates a Radiology Insights job with the given request body. */
    inferRadiologyInsights(body, options = { requestOptions: {} }) {
        return inferRadiologyInsights(this._client, body, options);
    }
}
//# sourceMappingURL=RadiologyInsightsClient.js.map