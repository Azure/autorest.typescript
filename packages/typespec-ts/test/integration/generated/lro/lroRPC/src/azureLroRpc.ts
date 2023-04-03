// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { AzureLroRpcClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `AzureLroRpcClient`
 * @param options type: ClientOptions, the parameter for all optional parameters
 */
export default function createClient(
  options: ClientOptions = {}
): AzureLroRpcClient {
  const baseUrl = options.baseUrl ?? `http://localhost:3000`;
  options.apiVersion = options.apiVersion ?? "2022-12-01-preview";
  const userAgentInfo = `azsdk-js-lro-rpc-rest/1.0.0`;
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

  const client = getClient(baseUrl, options) as AzureLroRpcClient;

  return client;
}
