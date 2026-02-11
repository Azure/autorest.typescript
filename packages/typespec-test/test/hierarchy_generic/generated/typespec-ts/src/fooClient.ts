// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { B, BOptionalParams } from "./b/b.js";
import { Y, YOptionalParams } from "./y/y.js";
import { D, DOptionalParams } from "./d/d.js";
import { createFoo, FooContext, FooClientOptionalParams } from "./api/index.js";
import { op1 } from "./api/operations.js";
import { Op1OptionalParams } from "./api/options.js";
import { A } from "./models/models.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { FooClientOptionalParams } from "./api/fooContext.js";

export class FooClient {
  private _client: FooContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;
  /** The parent client parameters that are used in the constructors. */
  private _clientParams: { endpointParam: string; options: FooClientOptionalParams };

  constructor(endpointParam: string, options: FooClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createFoo(endpointParam, { ...options, userAgentOptions: { userAgentPrefix } });
    this.pipeline = this._client.pipeline;
    this._clientParams = { endpointParam, options };
  }

  op1(body: A, options: Op1OptionalParams = { requestOptions: {} }): Promise<void> {
    return op1(this._client, body, options);
  }

  getB(options: BOptionalParams = {}): B {
    return new B(
      this._clientParams.endpointParam,

      { ...this._clientParams.options, ...options },
    );
  }

  getY(options: YOptionalParams = {}): Y {
    return new Y(
      this._clientParams.endpointParam,

      { ...this._clientParams.options, ...options },
    );
  }

  getD(options: DOptionalParams = {}): D {
    return new D(
      this._clientParams.endpointParam,

      { ...this._clientParams.options, ...options },
    );
  }
}
