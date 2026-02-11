// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { E, EOptionalParams } from "./e/e.js";
import { C, COptionalParams } from "./c/c.js";
import { createB, BContext, BOptionalParams } from "./api/index.js";
import { BA } from "../models/b/models.js";
import { op1 } from "./api/operations.js";
import { Op1OptionalParams } from "./api/options.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { BOptionalParams } from "./api/bContext.js";

export class B {
  private _client: BContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;
  /** The parent client parameters that are used in the constructors. */
  private _clientParams: { endpointParam: string; options: BOptionalParams };

  constructor(endpointParam: string, options: BOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createB(endpointParam, { ...options, userAgentOptions: { userAgentPrefix } });
    this.pipeline = this._client.pipeline;
    this._clientParams = { endpointParam, options };
  }

  op1(body: BA, options: Op1OptionalParams = { requestOptions: {} }): Promise<void> {
    return op1(this._client, body, options);
  }

  getE(options: EOptionalParams = {}): E {
    return new E(
      this._clientParams.endpointParam,

      { ...this._clientParams.options, ...options },
    );
  }

  getC(options: COptionalParams = {}): C {
    return new C(
      this._clientParams.endpointParam,

      { ...this._clientParams.options, ...options },
    );
  }
}
