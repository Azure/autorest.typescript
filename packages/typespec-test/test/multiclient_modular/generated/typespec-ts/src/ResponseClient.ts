// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from './common/interfaces.js';
import {
    createResponse,
    createWithHeaders,
    CreateWithHeadersOptions,
    ResponseResource,
} from './api/response/index.js';
import { Client } from './rest/response/index.js';

export class ResponseClient {
    private _client: Client.ResponseContext;

    /** Azure Messaging EventGrid Client */
    constructor(endpoint: string, options: ClientOptions = {}) {
        this._client = createResponse(endpoint, options);
    }

    createOrUpdate(options: CreateWithHeadersOptions = {}): Promise<ResponseResource> {
        return createWithHeaders(this._client, options);
    }
}
