// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  SchemaRegistryContext,
  SchemaRegistryClientOptionalParams,
  createSchemaRegistry,
} from "./api/index.js";
import {
  SchemaOperationsOperations,
  _getSchemaOperationsOperations,
} from "./classic/schemaOperations/index.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { SchemaRegistryClientOptionalParams } from "./api/schemaRegistryContext.js";

export class SchemaRegistryClient {
  private _client: SchemaRegistryContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** SchemaRegistryClient is a client for registering and retrieving schemas from the Azure Schema Registry service. */
  constructor(
    endpointParam: string,
    credential: TokenCredential,
    options: SchemaRegistryClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createSchemaRegistry(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.schemaOperations = _getSchemaOperationsOperations(this._client);
  }

  /** The operation groups for schemaOperations */
  public readonly schemaOperations: SchemaOperationsOperations;
}
