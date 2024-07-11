// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  get,
  GetOptionalParams,
  createXmsRequestId,
  XmsRequestIdClientOptions,
  XmsRequestIdClientContext,
} from "./api/index.js";

export class XmsRequestIdClient {
  private _client: XmsRequestIdClientContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure client request id header configurations. */
  constructor(options: XmsRequestIdClientOptions = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createXmsRequestId({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Get operation with azure `x-ms-client-request-id` header. */
  get(options: GetOptionalParams = { requestOptions: {} }): Promise<void> {
    return get(this._client, options);
  }
}
