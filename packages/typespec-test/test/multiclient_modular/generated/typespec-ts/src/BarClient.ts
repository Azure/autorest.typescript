// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from './common/interfaces.js';
import {
    createResponse,
    createWithHeaders,
    CreateWithHeadersOptions,
    ResponseResource,
} from './api/bar/index.js';
import { Client } from './rest/bar/index.js';

export class BarClient {
    private _client: Client.BarContext;

    /** Azure Messaging EventGrid Client */
    constructor(endpoint: string, options: ClientOptions = {}) {
        this._client = createResponse(endpoint, options);
    }

    createWithHeaders(
        name: string,
        type: string,
        options: CreateWithHeadersOptions = {}
    ): Promise<ResponseResource> {
        return createWithHeaders(this._client, name, type, options);
    }
}
