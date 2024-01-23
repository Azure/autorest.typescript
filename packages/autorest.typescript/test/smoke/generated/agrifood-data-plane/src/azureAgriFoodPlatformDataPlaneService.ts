// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { KeyCredential } from "@azure/core-auth";
import { AzureAgriFoodPlatformDataPlaneServiceClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `AzureAgriFoodPlatformDataPlaneServiceClient`
 * @param endpoint - The endpoint of your FarmBeats resource (protocol and hostname, for example: https://{resourceName}.farmbeats.azure.net).
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  credentials: KeyCredential,
  options: ClientOptions = {},
): AzureAgriFoodPlatformDataPlaneServiceClient {
  const baseUrl = options.baseUrl ?? `${endpoint}`;

  const userAgentInfo = `azsdk-js-agrifood-data-plane-rest/1.0.0-beta.1`;
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
      apiKeyHeaderName:
        options.credentials?.apiKeyHeaderName ?? "Authorization",
    },
  };

  const client = getClient(
    baseUrl,
    credentials,
    options,
  ) as AzureAgriFoodPlatformDataPlaneServiceClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });

  return client;
}
