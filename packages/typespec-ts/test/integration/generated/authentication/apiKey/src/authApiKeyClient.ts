// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { KeyCredential } from "@azure/core-auth";
import { AuthApiKeyClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `AuthApiKeyClient`
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  credentials: KeyCredential,
  options: ClientOptions = {},
): AuthApiKeyClient {
  const baseUrl = options.baseUrl ?? `http://localhost:3000`;
  const userAgentInfo = `azsdk-js-auth-apikey-rest/1.0.0`;
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
      apiKeyHeaderName: options.credentials?.apiKeyHeaderName ?? "x-ms-api-key",
    },
  };

  const client = getClient(baseUrl, credentials, options) as AuthApiKeyClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  return client;
}
