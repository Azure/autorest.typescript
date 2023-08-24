// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  get,
  createRequestId,
  RequestIdClientOptions,
  RequestIdClientContext,
} from "./api/index.js";
import { GetOptions } from "./models/options.js";

export { RequestIdClientOptions } from "./api/RequestIdContext.js";

export class RequestIdClient {
  private _client: RequestIdClientContext;

  /** Azure client request id header configurations. */
  constructor(options: RequestIdClientOptions = {}) {
    this._client = createRequestId(options);
  }

  /** Get operation with azure client request id header. */
  get(options: GetOptions = { requestOptions: {} }): Promise<void> {
    return get(this._client, options);
  }
}
