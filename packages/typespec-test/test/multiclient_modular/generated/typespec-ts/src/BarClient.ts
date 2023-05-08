// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "./common/interfaces.js";

export class BarClient {
  private _client: BarContext;

  /** Bar */
  constructor(
    endpoint: string,
    apiVersion: string,
    options: ClientOptions = {}
  ) {
    this._client = createBar(endpoint, apiVersion, options);
  }

  getBinary(options: GetBinaryOptions = { requestOptions: {} }): Promise<void> {
    return getBinary(this._client, context, options);
  }

  getArray(options: GetArrayOptions = { requestOptions: {} }): Promise<void> {
    return getArray(this._client, context, options);
  }

  createWithHeaders(
    options: CreateWithHeadersOptions = { requestOptions: {} }
  ): Promise<Resource> {
    return createWithHeaders(this._client, context, options);
  }

  deleteWithHeaders(
    options: DeleteWithHeadersOptions = { requestOptions: {} }
  ): Promise<void> {
    return deleteWithHeaders(this._client, context, options);
  }
}
