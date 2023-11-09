// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { DaysOfWeekExtensibleEnum } from "./models/models.js";
import {
  GetKnownValueOptions,
  GetUnknownValueOptions,
  PutKnownValueOptions,
  PutUnknownValueOptions,
} from "./models/options.js";
import {
  createExtensible,
  ExtensibleClientOptions,
  ExtensibleContext,
  getKnownValue,
  getUnknownValue,
  putKnownValue,
  putUnknownValue,
} from "./api/index.js";

export { ExtensibleClientOptions } from "./api/ExtensibleContext.js";

export class ExtensibleClient {
  private _client: ExtensibleContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(options: ExtensibleClientOptions = {}) {
    this._client = createExtensible(options);
    this.pipeline = this._client.pipeline;
  }

  getKnownValue(
    options: GetKnownValueOptions = { requestOptions: {} }
  ): Promise<DaysOfWeekExtensibleEnum> {
    return getKnownValue(this._client, options);
  }

  getUnknownValue(
    options: GetUnknownValueOptions = { requestOptions: {} }
  ): Promise<DaysOfWeekExtensibleEnum> {
    return getUnknownValue(this._client, options);
  }

  putKnownValue(
    body: DaysOfWeekExtensibleEnum,
    options: PutKnownValueOptions = { requestOptions: {} }
  ): Promise<void> {
    return putKnownValue(this._client, body, options);
  }

  putUnknownValue(
    body: DaysOfWeekExtensibleEnum,
    options: PutUnknownValueOptions = { requestOptions: {} }
  ): Promise<void> {
    return putUnknownValue(this._client, body, options);
  }
}
