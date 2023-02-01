// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { KeyCredential } from "@azure/core-auth";
import { AzureOpenAIApiClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `AzureOpenAIApiClient`
 * @param endpoint Supported Cognitive Services endpoints (protocol and hostname, for example:
 * https://westus.api.cognitive.microsoft.com).
 * @param credentials KeyCredential which uniquely identify client credential.
 */
export default function createClient(
  endpoint: string,
  credentials: KeyCredential,
  options: ClientOptions = {}
): AzureOpenAIApiClient {
  const baseUrl = options.baseUrl ?? `${endpoint}/openai`;

  options = {
    ...options,
    credentials: {
      apiKeyHeaderName: "apiKey",
    },
  };

  const userAgentInfo = `azsdk-js-openai-rest/1.0.0-beta.1`;
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

  const client = getClient(
    baseUrl,
    credentials,
    options
  ) as AzureOpenAIApiClient;

  return client;
}
