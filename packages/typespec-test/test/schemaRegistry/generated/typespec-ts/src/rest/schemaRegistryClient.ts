// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "../logger.js";
import { TokenCredential } from "@azure/core-auth";
import { SchemaRegistryContext } from "./clientDefinitions.js";

export interface SchemaRegistryContextOptions extends ClientOptions {
  apiVersion?: string;
}

/**
 * Initialize a new instance of `SchemaRegistryContext`
 * @param fullyQualifiedNamespace - The Schema Registry service endpoint, for example 'my-namespace.servicebus.windows.net'.
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  fullyQualifiedNamespace: string,
  credentials: TokenCredential,
  { apiVersion = "2023-07-01", ...options }: SchemaRegistryContextOptions = {},
): SchemaRegistryContext {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `${fullyQualifiedNamespace}`;
  const userAgentInfo = `azsdk-js-schema-registry-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
    loggingOptions: {
      logger: options.loggingOptions?.logger ?? logger.info,
    },
    credentials: {
      scopes: options.credentials?.scopes ?? [
        "https://eventhubs.azure.net/.default",
      ],
    },
  };
  const client = getClient(
    endpointUrl,
    credentials,
    options,
  ) as SchemaRegistryContext;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  client.pipeline.addPolicy({
    name: "ClientApiVersionPolicy",
    sendRequest: (req, next) => {
      // Use the apiVesion defined in request url directly
      // Append one if there is no apiVesion and we have one at client options
      const url = new URL(req.url);
      if (!url.searchParams.get("api-version") && apiVersion) {
        req.url = `${req.url}${
          Array.from(url.searchParams.keys()).length > 0 ? "&" : "?"
        }api-version=${apiVersion}`;
      }

      return next(req);
    },
  });

  return client;
}
