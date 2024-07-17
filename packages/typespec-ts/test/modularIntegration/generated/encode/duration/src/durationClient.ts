// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { getQueryOperations, QueryOperations } from "./classic/query/index.js";
import {
  getPropertyOperations,
  PropertyOperations,
} from "./classic/property/index.js";
import {
  getHeaderOperations,
  HeaderOperations,
} from "./classic/header/index.js";
import {
  createDuration,
  DurationClientOptionalParams,
  DurationContext,
} from "./api/index.js";

export class DurationClient {
  private _client: DurationContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for encode decorator on duration. */
  constructor(options: DurationClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createDuration({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.query = getQueryOperations(this._client);
    this.property = getPropertyOperations(this._client);
    this.header = getHeaderOperations(this._client);
  }

  /** The operation groups for Query */
  public readonly query: QueryOperations;
  /** The operation groups for Property */
  public readonly property: PropertyOperations;
  /** The operation groups for Header */
  public readonly header: HeaderOperations;
}
