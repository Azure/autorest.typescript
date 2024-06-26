// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getExplicitBodyOperations,
  ExplicitBodyOperations,
} from "./classic/explicitBody/index.js";
import {
  getImplicitBodyOperations,
  ImplicitBodyOperations,
} from "./classic/implicitBody/index.js";
import { createBasic, BasicClientOptions, BasicContext } from "./api/index.js";

export { BasicClientOptions } from "./api/basicContext.js";

export class BasicClient {
  private _client: BasicContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for basic parameters cases. */
  constructor(options: BasicClientOptions = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-modular-classic`
      : "azsdk-js-modular-classic";

    this._client = createBasic({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.explicitBody = getExplicitBodyOperations(this._client);
    this.implicitBody = getImplicitBodyOperations(this._client);
  }

  /** The operation groups for ExplicitBody */
  public readonly explicitBody: ExplicitBodyOperations;
  /** The operation groups for ImplicitBody */
  public readonly implicitBody: ImplicitBodyOperations;
}
