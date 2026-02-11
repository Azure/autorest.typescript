// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TextOperations, TextOperationsOptionalParams } from "./textOperations/textOperations.js";
import {
  ImageOperations,
  ImageOperationsOptionalParams,
} from "./imageOperations/imageOperations.js";
import { TextBlocklists, TextBlocklistsOptionalParams } from "./textBlocklists/textBlocklists.js";
import {
  createContentSafety,
  ContentSafetyContext,
  ContentSafetyClientOptionalParams,
} from "./api/index.js";
import { KeyCredential, TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { ContentSafetyClientOptionalParams } from "./api/contentSafetyContext.js";

export class ContentSafetyClient {
  private _client: ContentSafetyContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;
  /** The parent client parameters that are used in the constructors. */
  private _clientParams: {
    endpointParam: string;
    credential: KeyCredential | TokenCredential;
    options: ContentSafetyClientOptionalParams;
  };

  /** Analyze harmful content */
  constructor(
    endpointParam: string,
    credential: KeyCredential | TokenCredential,
    options: ContentSafetyClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createContentSafety(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this._clientParams = { endpointParam, credential, options };
  }

  getTextOperations(options: TextOperationsOptionalParams = {}): TextOperations {
    return new TextOperations(
      this._clientParams.endpointParam,
      this._clientParams.credential,

      { ...this._clientParams.options, ...options },
    );
  }

  getImageOperations(options: ImageOperationsOptionalParams = {}): ImageOperations {
    return new ImageOperations(
      this._clientParams.endpointParam,
      this._clientParams.credential,

      { ...this._clientParams.options, ...options },
    );
  }

  getTextBlocklists(options: TextBlocklistsOptionalParams = {}): TextBlocklists {
    return new TextBlocklists(
      this._clientParams.endpointParam,
      this._clientParams.credential,

      { ...this._clientParams.options, ...options },
    );
  }
}
