// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getStringOperations,
  StringOperations,
} from "./classic/string/index.js";
import {
  createExtensible,
  ExtensibleContext,
  ExtensibleClientOptionalParams,
} from "./api/index.js";

export { ExtensibleClientOptionalParams } from "./api/extensibleContext.js";

export class ExtensibleClient {
  private _client: ExtensibleContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(options: ExtensibleClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createExtensible({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.string = getStringOperations(this._client);
  }

  /** The operation groups for String */
  public readonly string: StringOperations;
}
