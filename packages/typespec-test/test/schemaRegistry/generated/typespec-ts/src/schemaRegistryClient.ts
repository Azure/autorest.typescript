// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  getSchemaOperationsOperations,
  SchemaOperationsOperations,
} from "./classic/schemaOperations/index.js";
import {
  createSchemaRegistry,
  SchemaRegistryContext,
  SchemaRegistryClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { SchemaRegistryClientOptionalParams } from "./api/schemaRegistryContext.js";

export class SchemaRegistryClient {
  private _client: SchemaRegistryContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** SchemaRegistryClient is a client for registering and retrieving schemas from the Azure Schema Registry service. */
  constructor(
    fullyQualifiedNamespace: string,
    credential: TokenCredential,
    options: SchemaRegistryClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createSchemaRegistry(fullyQualifiedNamespace, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.schemaOperations = getSchemaOperationsOperations(this._client);
  }

  /** The operation groups for SchemaOperations */
  public readonly schemaOperations: SchemaOperationsOperations;
}
