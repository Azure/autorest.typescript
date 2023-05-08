// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "./common/interfaces.js";

export class FooClient {
  private _client: FooContext;

  /** Cadl Foo */
  constructor(
    endpoint: string,
    apiVersion: string,
    options: ClientOptions = {}
  ) {
    this._client = createFoo(endpoint, apiVersion, options);
  }

  createOrUpdate(
    id: string,
    name: string,
    type: string,
    name: string,
    options: CreateOrUpdateOptions = { requestOptions: {} }
  ): Promise<Resource> {
    return createOrUpdate(this._client, context, id, name, type, name, options);
  }

  getOperation(
    name: string,
    options: GetOptions = { requestOptions: {} }
  ): Promise<Resource> {
    return getOperation(this._client, context, name, options);
  }

  deleteOperation(
    name: string,
    options: DeleteOptions = { requestOptions: {} }
  ): Promise<void> {
    return deleteOperation(this._client, context, name, options);
  }

  list(options: ListOptions = { requestOptions: {} }): Promise<CustomPage> {
    return list(this._client, context, options);
  }
}
