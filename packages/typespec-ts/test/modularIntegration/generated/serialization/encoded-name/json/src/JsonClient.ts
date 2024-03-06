// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { JsonEncodedNameModel } from "./models/models.js";
import { SendOptions, GetOptions } from "./models/options.js";
import {
  createJson,
  JsonClientOptions,
  JsonContext,
  send,
  get,
} from "./api/index.js";

export { JsonClientOptions } from "./api/JsonContext.js";

export class JsonClient {
  private _client: JsonContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Projection */
  constructor(options: JsonClientOptions = {}) {
    this._client = createJson(options);
    this.pipeline = this._client.pipeline;
  }

  send(
    body: JsonEncodedNameModel,
    options: SendOptions = { requestOptions: {} },
  ): Promise<void> {
    return send(this._client, body, options);
  }

  get(
    options: GetOptions = { requestOptions: {} },
  ): Promise<JsonEncodedNameModel> {
    return get(this._client, options);
  }
}
