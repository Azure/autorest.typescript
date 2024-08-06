// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  createNotDefined,
  NotDefinedContext,
  NotDefinedClientOptionalParams,
  valid,
} from "./api/index.js";
import { ValidOptionalParams } from "./models/options.js";

export { NotDefinedClientOptionalParams } from "./api/notDefinedContext.js";

export class NotDefinedClient {
  private _client: NotDefinedContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates server doesn't define endpoint. Client should automatically add an endpoint to let user pass in. */
  constructor(endpoint: string, options: NotDefinedClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createNotDefined(endpoint, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  valid(options: ValidOptionalParams = { requestOptions: {} }): Promise<void> {
    return valid(this._client, options);
  }
}
