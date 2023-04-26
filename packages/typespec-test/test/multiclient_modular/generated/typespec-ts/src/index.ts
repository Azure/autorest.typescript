// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export { Resource } from './api/core/models.js';
export { createOrUpdate, CreateOrUpdateOptions } from './api/core/operations.js';

export { Resource as ResponseResource } from './api/response/models.js';
export { createWithHeaders, CreateWithHeadersOptions } from './api/response/operations.js';
export { CoreClient } from './CoreClient.js';
export { ResponseClient } from './ResponseClient.js';
export { ClientOptions, RequestOptions } from './common/interfaces.js';
