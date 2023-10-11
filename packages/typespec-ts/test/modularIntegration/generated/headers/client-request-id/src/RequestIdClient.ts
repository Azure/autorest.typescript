// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
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
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure client request id header configurations. */
  constructor(options: RequestIdClientOptions = {}) {
    this._client = createRequestId(options);
    this.pipeline = this._client.pipeline;
  }

  /** Get operation with azure client request id header. */
  get(options: GetOptions = { requestOptions: {} }): Promise<void> {
    return get(this._client, options);
  }
}
