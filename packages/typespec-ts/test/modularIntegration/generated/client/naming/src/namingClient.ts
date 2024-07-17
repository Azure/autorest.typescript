// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  ClientNameModel,
  LanguageClientNameModel,
  ClientNameAndJsonEncodedNameModel,
} from "./models/models.js";
import {
  getClientModelOperations,
  ClientModelOperations,
} from "./classic/clientModel/index.js";
import {
  getUnionEnumOperations,
  UnionEnumOperations,
} from "./classic/unionEnum/index.js";
import {
  createNaming,
  NamingClientOptionalParams,
  NamingContext,
  clientName,
  parameter,
  client,
  language,
  compatibleWithEncodedName,
  request,
  response,
  ClientNameOptionalParams,
  ParameterOptionalParams,
  ClientOptionalParams,
  LanguageOptionalParams,
  CompatibleWithEncodedNameOptionalParams,
  RequestOptionalParams,
  ResponseOptionalParams,
} from "./api/index.js";

export class NamingClient {
  private _client: NamingContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Describe changing names of types in a client with `@clientName` */
  constructor(options: NamingClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createNaming({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.clientModel = getClientModelOperations(this._client);
    this.unionEnum = getUnionEnumOperations(this._client);
  }

  clientName(
    options: ClientNameOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return clientName(this._client, options);
  }

  parameter(
    clientName: string,
    options: ParameterOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return parameter(this._client, clientName, options);
  }

  client(
    body: ClientNameModel,
    options: ClientOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return client(this._client, body, options);
  }

  language(
    body: LanguageClientNameModel,
    options: LanguageOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return language(this._client, body, options);
  }

  compatibleWithEncodedName(
    body: ClientNameAndJsonEncodedNameModel,
    options: CompatibleWithEncodedNameOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return compatibleWithEncodedName(this._client, body, options);
  }

  request(
    clientName: string,
    options: RequestOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return request(this._client, clientName, options);
  }

  response(
    options: ResponseOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return response(this._client, options);
  }

  /** The operation groups for ClientModel */
  public readonly clientModel: ClientModelOperations;
  /** The operation groups for UnionEnum */
  public readonly unionEnum: UnionEnumOperations;
}
