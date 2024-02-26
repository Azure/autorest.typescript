// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  OperationOptions,
  ParameterOptions,
  HeaderOptions,
} from "./models/options.js";
import {
  getPropertyOperations,
  PropertyOperations,
} from "./classic/property/index.js";
import {
  getClientModelOperations,
  ClientModelOperations,
} from "./classic/clientModel/index.js";
import {
  createNameAndEncodedName,
  NameAndEncodedNameClientOptions,
  NameAndEncodedNameClientContext,
  operation,
  parameter,
  header,
} from "./api/index.js";

export { NameAndEncodedNameClientOptions } from "./api/NameAndEncodedNameContext.js";

export class NameAndEncodedNameClient {
  private _client: NameAndEncodedNameClientContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Projection */
  constructor(options: NameAndEncodedNameClientOptions = {}) {
    this._client = createNameAndEncodedName(options);
    this.pipeline = this._client.pipeline;
    this.property = getPropertyOperations(this._client);
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

  header(
    defaultName: string,
    options: HeaderOptions = { requestOptions: {} },
  ): Promise<void> {
    return header(this._client, defaultName, options);
  }

  /** The operation groups for Property */
  public readonly property: PropertyOperations;
  /** The operation groups for ClientModel */
  public readonly clientModel: ClientModelOperations;
}
