// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { KeyCredential } from "@azure/core-auth";
import { MicrosoftCognitiveLanguageServiceAnalyzeTextAuthoringClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `MicrosoftCognitiveLanguageServiceAnalyzeTextAuthoringClient`
 * @param endpoint
 * @param credentials KeyCredential which uniquely identify client credential.
 */
export default function createClient(
  endpoint: string,
  credentials: KeyCredential,
  options: ClientOptions = {}
): MicrosoftCognitiveLanguageServiceAnalyzeTextAuthoringClient {
  const baseUrl = options.baseUrl ?? `${endpoint}/language`;
  options.apiVersion = options.apiVersion ?? "2022-05-15-preview";
  options = {
    ...options,
    credentials: {
      apiKeyHeaderName: "Ocp-Apim-Subscription-Key",
    },
  };

  const userAgentInfo = `azsdk-js-customWrapper-rest/1.0.0-beta.1`;
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
  ) as MicrosoftCognitiveLanguageServiceAnalyzeTextAuthoringClient;

  return client;
}
