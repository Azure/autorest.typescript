// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getStringOperations,
  StringOperations,
} from "./classic/string/index.js";
import {
  createFixed,
  FixedClientOptionalParams,
  FixedContext,
} from "./api/index.js";

export { FixedClientOptionalParams } from "./api/fixedContext.js";

export class FixedClient {
  private _client: FixedContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(options: FixedClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createFixed({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.string = getStringOperations(this._client);
  }

  /** The operation groups for String */
  public readonly string: StringOperations;
}
