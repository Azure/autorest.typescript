// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createTextOperations,
  TextOperationsContext,
  TextOperationsOptionalParams,
} from "./api/index.js";
import {
  AnalyzeTextOptions,
  AnalyzeTextResult,
  ShieldPromptOptions,
  ShieldPromptResult,
  DetectTextProtectedMaterialOptions,
  DetectTextProtectedMaterialResult,
} from "../models/models.js";
import { detectTextProtectedMaterial, shieldPrompt, analyzeText } from "./api/operations.js";
import {
  DetectTextProtectedMaterialOptionalParams,
  ShieldPromptOptionalParams,
  AnalyzeTextOptionalParams,
} from "./api/options.js";
import { KeyCredential, TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { TextOperationsOptionalParams } from "./api/textOperationsContext.js";

export class TextOperations {
  private _client: TextOperationsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential | TokenCredential,
    options: TextOperationsOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createTextOperations(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** A synchronous API for detecting protected material in the given text. */
  detectTextProtectedMaterial(
    body: DetectTextProtectedMaterialOptions,
    options: DetectTextProtectedMaterialOptionalParams = { requestOptions: {} },
  ): Promise<DetectTextProtectedMaterialResult> {
    return detectTextProtectedMaterial(this._client, body, options);
  }

  /** A synchronous API for shielding prompt from direct and indirect injection attacks. */
  shieldPrompt(
    body: ShieldPromptOptions,
    options: ShieldPromptOptionalParams = { requestOptions: {} },
  ): Promise<ShieldPromptResult> {
    return shieldPrompt(this._client, body, options);
  }

  /** A synchronous API for the analysis of potentially harmful text content. Currently, it supports four categories: Hate, SelfHarm, Sexual, and Violence. */
  analyzeText(
    body: AnalyzeTextOptions,
    options: AnalyzeTextOptionalParams = { requestOptions: {} },
  ): Promise<AnalyzeTextResult> {
    return analyzeText(this._client, body, options);
  }
}
