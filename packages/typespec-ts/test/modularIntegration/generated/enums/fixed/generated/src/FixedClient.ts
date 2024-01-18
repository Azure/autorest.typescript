// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { DaysOfWeekEnum } from "./models/models.js";
import {
  GetKnownValueOptions,
  PutKnownValueOptions,
  PutUnknownValueOptions,
} from "./models/options.js";
import {
  createFixed,
  FixedClientOptions,
  FixedContext,
  getKnownValue,
  putKnownValue,
  putUnknownValue,
} from "./api/index.js";

export { FixedClientOptions } from "./api/FixedContext.js";

export class FixedClient {
  private _client: FixedContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(options: FixedClientOptions = {}) {
    this._client = createFixed(options);
    this.pipeline = this._client.pipeline;
  }

  /** getKnownValue */
  getKnownValue(
    options: GetKnownValueOptions = { requestOptions: {} },
  ): Promise<DaysOfWeekEnum> {
    return getKnownValue(this._client, options);
  }

  /** putKnownValue */
  putKnownValue(
    body: DaysOfWeekEnum,
    options: PutKnownValueOptions = { requestOptions: {} },
  ): Promise<void> {
    return putKnownValue(this._client, body, options);
  }

  /** putUnknownValue */
  putUnknownValue(
    body: DaysOfWeekEnum,
    options: PutUnknownValueOptions = { requestOptions: {} },
  ): Promise<void> {
    return putUnknownValue(this._client, body, options);
  }
}
