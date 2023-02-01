// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { AuthUnionClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `AuthUnionClient`
 * @param credentials TokenCredential | KeyCredential which uniquely identify client credential.
 */
export default function createClient(
  credentials: TokenCredential | KeyCredential,
  options: ClientOptions = {}
): AuthUnionClient {
  const baseUrl = options.baseUrl ?? `http://localhost:3000`;
  options.apiVersion = options.apiVersion ?? "1.0.0";
  options = {
    ...options,
    credentials: {
      scopes: ["https://security.microsoft.com/.default"],
      apiKeyHeaderName: "x-ms-api-key",
    },
  };

  const userAgentInfo = `azsdk-js-auth-union-rest/1.0.0`;
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

  const client = getClient(baseUrl, credentials, options) as AuthUnionClient;

  return client;
}
