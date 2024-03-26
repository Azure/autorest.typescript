// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger.js";
import { KeyCredential } from "@azure/core-auth";
import { AuthoringClient } from "./clientDefinitions.js";

/**
 * Initialize a new instance of `AuthoringClient`
 * @param endpointParam - The endpoint to use.
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpointParam: string,
  credentials: KeyCredential,
  options: ClientOptions = {},
): AuthoringClient {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `${endpointParam}/language`;
  options.apiVersion = options.apiVersion ?? "2022-05-15-preview";
  const userAgentInfo = `azsdk-js-authoring-rest/1.0.0-beta.1`;
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
        options.credentials?.apiKeyHeaderName ?? "Ocp-Apim-Subscription-Key",
    },
  };

  const client = getClient(
    endpointUrl,
    credentials,
    options,
  ) as AuthoringClient;

  return client;
}
