// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  _getFormDataOperations,
  FormDataOperations,
} from "./classic/formData/index.js";
import {
  createMultiPart,
  MultiPartContext,
  MultiPartClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { MultiPartClientOptionalParams } from "./api/multiPartContext.js";

export class MultiPartClient {
  private _client: MultiPartContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for multipart */
  constructor(options: MultiPartClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createMultiPart({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.formData = _getFormDataOperations(this._client);
  }

  /** The operation groups for formData */
  public readonly formData: FormDataOperations;
}
