// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  SchemaOperations,
  SchemaOperationsOptionalParams,
} from "./schemaOperations/schemaOperations.js";
import {
  createSchemaRegistry,
  SchemaRegistryContext,
  SchemaRegistryClientOptionalParams,
} from "./api/index.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { SchemaRegistryClientOptionalParams } from "./api/schemaRegistryContext.js";

export class SchemaRegistryClient {
  private _client: SchemaRegistryContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;
  /** The parent client parameters that are used in the constructors. */
  private _clientParams: {
    endpointParam: string;
    credential: TokenCredential;
    options: SchemaRegistryClientOptionalParams;
  };

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
    this._clientParams = { endpointParam, credential, options };
  }

  getSchemaOperations(options: SchemaOperationsOptionalParams = {}): SchemaOperations {
    return new SchemaOperations(
      this._clientParams.endpointParam,
      this._clientParams.credential,

      { ...this._clientParams.options, ...options },
    );
  }
}
