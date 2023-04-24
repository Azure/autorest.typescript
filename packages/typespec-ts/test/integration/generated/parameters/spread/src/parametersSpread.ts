// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { ParametersSpreadClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `ParametersSpreadClient`
 * @param options type: ClientOptions, the parameter for all optional parameters
 */
export default function createClient(
  options: ClientOptions = {}
): ParametersSpreadClient {
  const baseUrl = options.baseUrl ?? `http://localhost:3000`;
  options.apiVersion = options.apiVersion ?? "1.0.0";
  const userAgentInfo = `azsdk-js-parameterSpread-rest/1.0.0-beta.1`;
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

  const client = getClient(baseUrl, options) as ParametersSpreadClient;

  return client;
}
