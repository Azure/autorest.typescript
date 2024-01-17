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
  getRequestBodyOperations,
  RequestBodyOperations,
} from "./classic/requestBody/index.js";
import {
  getResponseBodyOperations,
  ResponseBodyOperations,
} from "./classic/responseBody/index.js";
import { createBytes, BytesClientOptions, BytesContext } from "./api/index.js";

export { BytesClientOptions } from "./api/BytesContext.js";

export class BytesClient {
  private _client: BytesContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for encode decorator on bytes. */
  constructor(options: BytesClientOptions = {}) {
    this._client = createBytes(options);
    this.pipeline = this._client.pipeline;
    this.query = getQueryOperations(this._client);
    this.property = getPropertyOperations(this._client);
    this.header = getHeaderOperations(this._client);
    this.requestBody = getRequestBodyOperations(this._client);
    this.responseBody = getResponseBodyOperations(this._client);
  }

  /** The operation groups for Query */
  public readonly query: QueryOperations;
  /** The operation groups for Property */
  public readonly property: PropertyOperations;
  /** The operation groups for Header */
  public readonly header: HeaderOperations;
  /** The operation groups for RequestBody */
  public readonly requestBody: RequestBodyOperations;
  /** The operation groups for ResponseBody */
  public readonly responseBody: ResponseBodyOperations;
}
