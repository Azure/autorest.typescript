// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { KeyCredential } from "@azure/core-auth";
import { AuthApiKeyClient } from "./clientDefinitions";

/**
 * Initialize a new instance of the class AuthApiKeyClient class.
 * @param credentials type: KeyCredential
 */
export default function createClient(
  credentials: KeyCredential,
  options: ClientOptions = {}
): AuthApiKeyClient {
  const baseUrl = options.baseUrl ?? `http://localhost:3000`;
  options.apiVersion = options.apiVersion ?? "1.0.0";
  options = {
    ...options,
    credentials: {
      apiKeyHeaderName: "x-ms-api-key",
    },
  };

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
  };

  const client = getClient(baseUrl, credentials, options) as AuthApiKeyClient;

  return client;
}
