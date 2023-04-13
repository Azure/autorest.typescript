// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { SingleParamInServerPathClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `SingleParamInServerPathClient`
 * @param endpoint type: string, Need to be set as 'http://localhost:3000' in client.
 * @param options type: ClientOptions, the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  options: ClientOptions = {}
): SingleParamInServerPathClient {
  const baseUrl = options.baseUrl ?? `${endpoint}`;
  options.apiVersion = options.apiVersion ?? "1.0.0";

  const userAgentInfo = `azsdk-js-singleparam-rest/1.0.0-beta.1`;
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

  const client = getClient(baseUrl, options) as SingleParamInServerPathClient;

  return client;
}
