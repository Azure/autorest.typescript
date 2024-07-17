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
  getResponseHeaderOperations,
  ResponseHeaderOperations,
} from "./classic/responseHeader/index.js";
import {
  createDatetime,
  DatetimeClientOptionalParams,
  DatetimeContext,
} from "./api/index.js";

export class DatetimeClient {
  private _client: DatetimeContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for encode decorator on datetime. */
  constructor(options: DatetimeClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createDatetime({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.query = getQueryOperations(this._client);
    this.property = getPropertyOperations(this._client);
    this.header = getHeaderOperations(this._client);
    this.responseHeader = getResponseHeaderOperations(this._client);
  }

  /** The operation groups for Query */
  public readonly query: QueryOperations;
  /** The operation groups for Property */
  public readonly property: PropertyOperations;
  /** The operation groups for Header */
  public readonly header: HeaderOperations;
  /** The operation groups for ResponseHeader */
  public readonly responseHeader: ResponseHeaderOperations;
}
