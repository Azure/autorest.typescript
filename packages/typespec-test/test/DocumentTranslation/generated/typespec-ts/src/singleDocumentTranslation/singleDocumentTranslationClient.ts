// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createSingleDocumentTranslation,
  SingleDocumentTranslationContext,
  SingleDocumentTranslationClientOptionalParams,
} from "./api/index.js";
import { DocumentTranslateContent } from "../models/models.js";
import { translate } from "./api/operations.js";
import { TranslateOptionalParams } from "./api/options.js";
import { KeyCredential, TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { SingleDocumentTranslationClientOptionalParams } from "./api/singleDocumentTranslationContext.js";

export class SingleDocumentTranslationClient {
  private _client: SingleDocumentTranslationContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential | TokenCredential,
    options: SingleDocumentTranslationClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createSingleDocumentTranslation(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Use this API to submit a single translation request to the Document Translation Service. */
  translate(
    targetLanguage: string,
    body: DocumentTranslateContent,
    options: TranslateOptionalParams = { requestOptions: {} },
  ): Promise<Uint8Array> {
    return translate(this._client, targetLanguage, body, options);
  }
}
