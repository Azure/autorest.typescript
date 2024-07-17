// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getSameBodyOperations,
  SameBodyOperations,
} from "./classic/sameBody/index.js";
import {
  getDifferentBodyOperations,
  DifferentBodyOperations,
} from "./classic/differentBody/index.js";
import {
  createContentNegotiation,
  ContentNegotiationClientOptionalParams,
  ContentNegotiationContext,
} from "./api/index.js";

export { ContentNegotiationClientOptionalParams } from "./api/contentNegotiationContext.js";

export class ContentNegotiationClient {
  private _client: ContentNegotiationContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test describing optionality of the request body. */
  constructor(options: ContentNegotiationClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createContentNegotiation({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.sameBody = getSameBodyOperations(this._client);
    this.differentBody = getDifferentBodyOperations(this._client);
  }

  /** The operation groups for SameBody */
  public readonly sameBody: SameBodyOperations;
  /** The operation groups for DifferentBody */
  public readonly differentBody: DifferentBodyOperations;
}
