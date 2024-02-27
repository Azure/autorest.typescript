// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  ClientNameModel,
  LanguageClientNameModel,
  ClientNameAndJsonEncodedNameModel,
} from "./models/models.js";
import {
  OperationOptions,
  ParameterOptions,
  ClientOptions,
  LanguageOptions,
  CompatibleWithEncodedNameOptions,
  RequestOptions,
  ResponseOptions,
} from "./models/options.js";
import {
  getClientModelOperations,
  ClientModelOperations,
} from "./classic/clientModel/index.js";
import {
  createNaming,
  NamingClientOptions,
  NamingContext,
  operation,
  parameter,
  client,
  language,
  compatibleWithEncodedName,
  request,
  response,
} from "./api/index.js";

export { NamingClientOptions } from "./api/NamingContext.js";

export class NamingClient {
  private _client: NamingContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Describe changing names of types in a client with `@clientName` */
  constructor(options: NamingClientOptions = {}) {
    this._client = createNaming(options);
    this.pipeline = this._client.pipeline;
    this.clientModel = getClientModelOperations(this._client);
  }

  operation(options: OperationOptions = { requestOptions: {} }): Promise<void> {
    return operation(this._client, options);
  }

  parameter(
    defaultName: string,
    options: ParameterOptions = { requestOptions: {} },
  ): Promise<void> {
    return parameter(this._client, defaultName, options);
  }

  client(
    body: ClientNameModel,
    options: ClientOptions = { requestOptions: {} },
  ): Promise<void> {
    return client(this._client, body, options);
  }

  language(
    body: LanguageClientNameModel,
    options: LanguageOptions = { requestOptions: {} },
  ): Promise<void> {
    return language(this._client, body, options);
  }

  compatibleWithEncodedName(
    body: ClientNameAndJsonEncodedNameModel,
    options: CompatibleWithEncodedNameOptions = { requestOptions: {} },
  ): Promise<void> {
    return compatibleWithEncodedName(this._client, body, options);
  }

  request(
    defaultName: string,
    options: RequestOptions = { requestOptions: {} },
  ): Promise<void> {
    return request(this._client, defaultName, options);
  }

  response(options: ResponseOptions = { requestOptions: {} }): Promise<void> {
    return response(this._client, options);
  }

  /** The operation groups for ClientModel */
  public readonly clientModel: ClientModelOperations;
}
