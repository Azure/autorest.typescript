// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createSearchIndex,
  SearchIndexContext,
  SearchIndexClientOptionalParams,
} from "./api/index.js";
import {
  DocumentsOperations,
  _getDocumentsOperations,
} from "./classic/documents/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { KeyCredential, TokenCredential } from "@azure/core-auth";

export { SearchIndexClientOptionalParams } from "./api/searchIndexContext.js";

export class SearchIndexClient {
  private _client: SearchIndexContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential | TokenCredential,
    options: SearchIndexClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createSearchIndex(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.documents = _getDocumentsOperations(this._client);
  }

  /** The operation groups for documents */
  public readonly documents: DocumentsOperations;
}
