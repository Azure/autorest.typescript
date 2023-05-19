// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "./common/interfaces.js";
import {
  createFoo,
  Client,
  Resource,
  CustomPage,
  createOrUpdate,
  getOperation,
  deleteOperation,
  list,
  CreateOrUpdateOptions,
  GetOptions,
  DeleteOptions,
  ListOptions,
} from "./api/foo/index.js";

export class FooClient {
  private _client: Client.FooContext;

  /** Cadl Foo */
  constructor(
    endpoint: string,
    apiVersion: string,
    options: ClientOptions = {}
  ) {
    this._client = createFoo(endpoint, apiVersion, options);
  }

  createOrUpdate(
    type: string,
    name: string,
    options: CreateOrUpdateOptions = { requestOptions: {} }
  ): Promise<Resource> {
    return createOrUpdate(this._client, type, name, options);
  }

  getOperation(
    name: string,
    options: GetOptions = { requestOptions: {} }
  ): Promise<Resource> {
    return getOperation(this._client, name, options);
  }

  deleteOperation(
    name: string,
    options: DeleteOptions = { requestOptions: {} }
  ): Promise<void> {
    return deleteOperation(this._client, name, options);
  }

  list(options: ListOptions = { requestOptions: {} }): Promise<CustomPage> {
    return list(this._client, options);
  }
}
