// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger.js";
import { TokenCredential } from "@azure/core-auth";
import { EasmClient } from "./clientDefinitions.js";

/**
 * Initialize a new instance of `EasmClient`
 * @param endpointParam - The endpoint hosting the requested resource. For example, https://{region}.easm.defender.microsoft.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/workspaces/{workspaceName}
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpointParam: string,
  credentials: TokenCredential,
  options: ClientOptions = {},
): EasmClient {
  const endpointUrl = options.endpoint ?? options.baseUrl ?? `${endpointParam}`;
  options.apiVersion = options.apiVersion ?? "2024-03-01-preview";
  const userAgentInfo = `azsdk-js-defender-easm-rest/1.0.0-beta.1`;
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
        "https://easm.defender.microsoft.com/.default",
      ],
    },
  };

  const client = getClient(endpointUrl, credentials, options) as EasmClient;

  return client;
}
