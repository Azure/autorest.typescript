// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getSchemaOperationsOperations,
  SchemaOperationsOperations,
} from "./classic/schemaOperations/index.js";
import {
  createSchemaRegistry,
  SchemaRegistryClientOptions,
  SchemaRegistryContext,
} from "./api/index.js";

export { SchemaRegistryClientOptions } from "./api/SchemaRegistryContext.js";

export class SchemaRegistryClient {
  private _client: SchemaRegistryContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** SchemaRegistryClient is a client for registering and retrieving schemas from the Azure Schema Registry service. */
  constructor(
    fullyQualifiedNamespace: string,
    credential: TokenCredential,
    options: SchemaRegistryClientOptions = {},
  ) {
    this._client = createSchemaRegistry(
      fullyQualifiedNamespace,
      credential,
      options,
    );
    this.pipeline = this._client.pipeline;
    this.schemaOperations = getSchemaOperationsOperations(this._client);
  }

  /** The operation groups for SchemaOperations */
  public readonly schemaOperations: SchemaOperationsOperations;
}
