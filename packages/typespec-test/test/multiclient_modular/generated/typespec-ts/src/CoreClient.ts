// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from './common/interfaces.js';
import { createCore, createOrUpdate, CreateOrUpdateOptions, Resource } from './api/core/index.js';
import { Client } from './rest/core/index.js';

export class CoreClient {
    private _client: Client.CoreContext;

    /** Azure Messaging EventGrid Client */
    constructor(endpoint: string, options: ClientOptions = {}) {
        this._client = createCore(endpoint, options);
    }

    createOrUpdate(name: string, options: CreateOrUpdateOptions = {}): Promise<Resource> {
        return createOrUpdate(this._client, name, options);
    }
}
