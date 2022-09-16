// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { KeyCredential } from "@azure/core-auth";
import { AzureAgriFoodPlatformDataPlaneServiceClient } from "./clientDefinitions";

/**
 * Initialize a new instance of the class AzureAgriFoodPlatformDataPlaneServiceClient class.
 * @param Endpoint type: string The endpoint of your FarmBeats resource (protocol and hostname, for example: https://{resourceName}.farmbeats.azure.net).
 * @param credentials type: KeyCredential
 */
export default function createClient(
  Endpoint: string,
  credentials: KeyCredential,
  options: ClientOptions = {}
): AzureAgriFoodPlatformDataPlaneServiceClient {
  const baseUrl = options.baseUrl ?? `${Endpoint}`;
  options.apiVersion = options.apiVersion ?? "2021-03-31-preview";
  options = {
    ...options,
    credentials: {
      apiKeyHeaderName: "Authorization"
    }
  };

  const userAgentInfo = `azsdk-js-agrifood-data-plane-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix
    }
  };

  const client = getClient(
    baseUrl,
    credentials,
    options
  ) as AzureAgriFoodPlatformDataPlaneServiceClient;

  return client;
}
