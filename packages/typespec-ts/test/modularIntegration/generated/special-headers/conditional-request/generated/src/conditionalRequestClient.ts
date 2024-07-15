// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  createConditionalRequest,
  ConditionalRequestClientOptions,
  ConditionalRequestContext,
  postIfMatch,
  postIfNoneMatch,
} from "./api/index.js";
import {
  PostIfMatchOptionalParams,
  PostIfNoneMatchOptionalParams,
} from "./models/options.js";

export { ConditionalRequestClientOptions } from "./api/conditionalRequestContext.js";

export class ConditionalRequestClient {
  private _client: ConditionalRequestContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates conditional request headers */
  constructor(options: ConditionalRequestClientOptions = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createConditionalRequest({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Check when only If-Match in header is defined. */
  postIfMatch(
    options: PostIfMatchOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return postIfMatch(this._client, options);
  }

  /** Check when only If-None-Match in header is defined. */
  postIfNoneMatch(
    options: PostIfNoneMatchOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return postIfNoneMatch(this._client, options);
  }
}
