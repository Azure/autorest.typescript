// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from './common/interfaces.js';
import { createCore, createOrUpdate, CreateOrUpdateOptions, Resource } from './api/foo/index.js';
import { Client } from './rest/foo/index.js';

export class FooClient {
    private _client: Client.FooContext;

    /** Azure Messaging EventGrid Client */
    constructor(endpoint: string, options: ClientOptions = {}) {
        this._client = createCore(endpoint, options);
    }

    createOrUpdate(
        name: string,
        type: string,
        options: CreateOrUpdateOptions = {}
    ): Promise<Resource> {
        return createOrUpdate(this._client, name, type, options);
    }
}
