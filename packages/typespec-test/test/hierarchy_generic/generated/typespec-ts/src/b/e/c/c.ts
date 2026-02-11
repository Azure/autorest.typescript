// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createC, CContext, COptionalParams } from "./api/index.js";
import { BEA } from "../../../models/b/e/models.js";
import { op1 } from "./api/operations.js";
import { Op1OptionalParams } from "./api/options.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { COptionalParams } from "./api/cContext.js";

export class C {
  private _client: CContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(endpointParam: string, options: COptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createC(endpointParam, { ...options, userAgentOptions: { userAgentPrefix } });
    this.pipeline = this._client.pipeline;
  }

  op1(body: BEA, options: Op1OptionalParams = { requestOptions: {} }): Promise<void> {
    return op1(this._client, body, options);
  }
}
