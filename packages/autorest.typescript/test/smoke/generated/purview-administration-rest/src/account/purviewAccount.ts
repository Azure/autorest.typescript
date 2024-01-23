// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "../logger";
import { TokenCredential } from "@azure/core-auth";
import { PurviewAccountClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `PurviewAccountClient`
 * @param endpoint - The account endpoint of your Purview account. Example: https://{accountName}.purview.azure.com/account/
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export function createClient(
  endpoint: string,
  credentials: TokenCredential,
  options: ClientOptions = {},
): PurviewAccountClient {
  const baseUrl = options.baseUrl ?? `${endpoint}`;

  const userAgentInfo = `azsdk-js-purview-administration-rest/1.0.0-beta.2`;
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
        "https://purview.azure.net/.default",
      ],
    },
  };

  const client = getClient(
    baseUrl,
    credentials,
    options,
  ) as PurviewAccountClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });

  return client;
}
