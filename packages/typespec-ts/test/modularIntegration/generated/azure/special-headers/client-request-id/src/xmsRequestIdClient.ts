// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  get,
  createXmsRequestId,
  XmsRequestIdClientOptions,
  XmsRequestIdClientContext,
} from "./api/index.js";
import { GetOptionalParams } from "./models/options.js";

export { XmsRequestIdClientOptions } from "./api/xmsRequestIdContext.js";

export class XmsRequestIdClient {
  private _client: XmsRequestIdClientContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure client request id header configurations. */
  constructor(options: XmsRequestIdClientOptions = {}) {
    this._client = createXmsRequestId(options);
    this.pipeline = this._client.pipeline;
  }

  /** Get operation with azure `x-ms-client-request-id` header. */
  get(options: GetOptionalParams = { requestOptions: {} }): Promise<void> {
    return get(this._client, options);
  }
}
