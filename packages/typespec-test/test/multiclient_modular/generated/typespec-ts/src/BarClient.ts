// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "./common/interfaces.js";
import {
  createBar,
  Client,
  Resource,
  getBinary,
  getArray,
  createWithHeaders,
  deleteWithHeaders,
  GetBinaryOptions,
  GetArrayOptions,
  CreateWithHeadersOptions,
  DeleteWithHeadersOptions,
} from "./api/bar/index.js";

export class BarClient {
  private _client: Client.BarContext;

  /** Bar */
  constructor(
    endpoint: string,
    apiVersion: string,
    options: ClientOptions = {}
  ) {
    this._client = createBar(endpoint, apiVersion, options);
  }

  getBinary(options: GetBinaryOptions = { requestOptions: {} }): Promise<void> {
    return getBinary(this._client, options);
  }

  getArray(options: GetArrayOptions = { requestOptions: {} }): Promise<void> {
    return getArray(this._client, options);
  }

  createWithHeaders(
    options: CreateWithHeadersOptions = { requestOptions: {} }
  ): Promise<Resource> {
    return createWithHeaders(this._client, options);
  }

  deleteWithHeaders(
    options: DeleteWithHeadersOptions = { requestOptions: {} }
  ): Promise<void> {
    return deleteWithHeaders(this._client, options);
  }
}
