// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createImageOperations,
  ImageOperationsContext,
  ImageOperationsOptionalParams,
} from "./api/index.js";
import { AnalyzeImageOptions, AnalyzeImageResult } from "../models/models.js";
import { analyzeImage } from "./api/operations.js";
import { AnalyzeImageOptionalParams } from "./api/options.js";
import { KeyCredential, TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { ImageOperationsOptionalParams } from "./api/imageOperationsContext.js";

export class ImageOperations {
  private _client: ImageOperationsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential | TokenCredential,
    options: ImageOperationsOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createImageOperations(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** A synchronous API for the analysis of potentially harmful image content. Currently, it supports four categories: Hate, SelfHarm, Sexual, and Violence. */
  analyzeImage(
    body: AnalyzeImageOptions,
    options: AnalyzeImageOptionalParams = { requestOptions: {} },
  ): Promise<AnalyzeImageResult> {
    return analyzeImage(this._client, body, options);
  }
}
