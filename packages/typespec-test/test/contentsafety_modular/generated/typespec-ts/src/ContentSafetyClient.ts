// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getTextOperationsOperations,
  TextOperationsOperations,
} from "./classic/textOperations/index.js";
import {
  getImageOperationsOperations,
  ImageOperationsOperations,
} from "./classic/imageOperations/index.js";
import {
  getTextBlocklistsOperations,
  TextBlocklistsOperations,
} from "./classic/textBlocklists/index.js";
import {
  createContentSafety,
  ContentSafetyClientOptions,
  ContentSafetyContext,
} from "./api/index.js";

export { ContentSafetyClientOptions } from "./api/ContentSafetyContext.js";

export class ContentSafetyClient {
  private _client: ContentSafetyContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Analyze harmful content */
  constructor(
    endpoint: string,
    credential: KeyCredential | TokenCredential,
    options: ContentSafetyClientOptions = {},
  ) {
    this._client = createContentSafety(endpoint, credential, options);
    this.pipeline = this._client.pipeline;
    this.textOperations = getTextOperationsOperations(this._client);
    this.imageOperations = getImageOperationsOperations(this._client);
    this.textBlocklists = getTextBlocklistsOperations(this._client);
  }

  /** The operation groups for TextOperations */
  public readonly textOperations: TextOperationsOperations;
  /** The operation groups for ImageOperations */
  public readonly imageOperations: ImageOperationsOperations;
  /** The operation groups for TextBlocklists */
  public readonly textBlocklists: TextBlocklistsOperations;
}
