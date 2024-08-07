// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getStringBodyOperations,
  StringBodyOperations,
} from "./classic/stringBody/index.js";
import {
  createMediaType,
  MediaTypeContext,
  MediaTypeClientOptionalParams,
} from "./api/index.js";

export { MediaTypeClientOptionalParams } from "./api/mediaTypeContext.js";

export class MediaTypeClient {
  private _client: MediaTypeContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test the payload with different media types and different types of the payload itself. */
  constructor(options: MediaTypeClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createMediaType({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.stringBody = getStringBodyOperations(this._client);
  }

  /** The operation groups for StringBody */
  public readonly stringBody: StringBodyOperations;
}
