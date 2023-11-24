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
  DurationClientOptions,
  DurationContext,
} from "./api/index.js";

export { DurationClientOptions } from "./api/DurationContext.js";

export class DurationClient {
  private _client: DurationContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for encode decorator on duration. */
  constructor(options: DurationClientOptions = {}) {
    this._client = createDuration(options);
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
