// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { C, COptionalParams } from "./c/c.js";
import { createE, EContext, EOptionalParams } from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { EOptionalParams } from "./api/eContext.js";

export class E {
  private _client: EContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;
  /** The parent client parameters that are used in the constructors. */
  private _clientParams: { endpointParam: string; options: EOptionalParams };

  constructor(endpointParam: string, options: EOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createE(endpointParam, { ...options, userAgentOptions: { userAgentPrefix } });
    this.pipeline = this._client.pipeline;
    this._clientParams = { endpointParam, options };
  }

  getC(options: COptionalParams = {}): C {
    return new C(
      this._clientParams.endpointParam,

      { ...this._clientParams.options, ...options },
    );
  }
}
