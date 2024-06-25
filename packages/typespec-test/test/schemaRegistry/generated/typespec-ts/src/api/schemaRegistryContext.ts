// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { SchemaRegistryContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface SchemaRegistryClientOptions extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { SchemaRegistryContext } from "../rest/index.js";

/** SchemaRegistryClient is a client for registering and retrieving schemas from the Azure Schema Registry service. */
export function createSchemaRegistry(
  fullyQualifiedNamespace: string,
  credential: TokenCredential,
  options: SchemaRegistryClientOptions = {},
): SchemaRegistryContext {
  const clientContext = getClient(fullyQualifiedNamespace, credential, {
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-schema-registry-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
