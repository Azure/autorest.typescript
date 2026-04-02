// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { logger } from "../logger.js";
import { KnownServiceApiVersions } from "../models/models.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";

/** SchemaRegistryClient is a client for registering and retrieving schemas from the Azure Schema Registry service. */
export interface SchemaRegistryContext extends Client {
  /** The API version to use for this operation. */
  /** Known values of {@link KnownServiceApiVersions} that the service accepts. */
  apiVersion?: string;
}

/** Optional parameters for the client. */
export interface SchemaRegistryClientOptionalParams extends ClientOptions {
  /** The API version to use for this operation. */
  /** Known values of {@link KnownServiceApiVersions} that the service accepts. */
  apiVersion?: string;
}

/** SchemaRegistryClient is a client for registering and retrieving schemas from the Azure Schema Registry service. */
export function createSchemaRegistry(
  endpointParam: string,
  credential: TokenCredential,
  options: SchemaRegistryClientOptionalParams = {},
): SchemaRegistryContext {
  const endpointUrl = options.endpoint ?? String(endpointParam);
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentInfo = `azsdk-js-schema-registry/1.0.0-beta.1`;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api ${userAgentInfo}`
    : `azsdk-js-api ${userAgentInfo}`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
    credentials: {
      scopes: options.credentials?.scopes ?? ["https://eventhubs.azure.net/.default"],
    },
  };
  const clientContext = getClient(endpointUrl, credential, updatedOptions);
  const apiVersion = options.apiVersion;
  return { ...clientContext, apiVersion } as SchemaRegistryContext;
}
