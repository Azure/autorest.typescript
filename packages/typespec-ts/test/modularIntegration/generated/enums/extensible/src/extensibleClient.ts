// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getStringOperations,
  StringOperations,
} from "./classic/string/index.js";
import {
  createExtensible,
  ExtensibleClientOptions,
  ExtensibleContext,
} from "./api/index.js";

export { ExtensibleClientOptions } from "./api/extensibleContext.js";

export class ExtensibleClient {
  private _client: ExtensibleContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(options: ExtensibleClientOptions = {}) {
    this._client = createExtensible(options);
    this.pipeline = this._client.pipeline;
    this.string = getStringOperations(this._client);
  }

  /** The operation groups for String */
  public readonly string: StringOperations;
}
