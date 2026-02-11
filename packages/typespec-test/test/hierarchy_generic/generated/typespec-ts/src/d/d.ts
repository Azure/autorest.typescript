// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createD, DContext, DOptionalParams } from "./api/index.js";
import { A } from "../models/models.js";
import { op1 } from "./api/operations.js";
import { Op1OptionalParams } from "./api/options.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { DOptionalParams } from "./api/dContext.js";

export class D {
  private _client: DContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(endpointParam: string, options: DOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createD(endpointParam, { ...options, userAgentOptions: { userAgentPrefix } });
    this.pipeline = this._client.pipeline;
  }

  op1(body: A, options: Op1OptionalParams = { requestOptions: {} }): Promise<void> {
    return op1(this._client, body, options);
  }
}
