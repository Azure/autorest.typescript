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
  ContentNegotiationClientOptions,
  ContentNegotiationContext,
} from "./api/index.js";

export { ContentNegotiationClientOptions } from "./api/contentNegotiationContext.js";

export class ContentNegotiationClient {
  private _client: ContentNegotiationContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test describing optionality of the request body. */
  constructor(options: ContentNegotiationClientOptions = {}) {
    this._client = createContentNegotiation({
      userAgentOptions: {
        userAgentPrefix:
          options?.userAgentOptions?.userAgentPrefix ??
          "azsdk-js-payload-content-negotiation-classic/1.0.0-beta.1",
      },
      ...options,
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
