// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { HeaderRestClient } from "./clientDefinitions";

export default function createClient(
  options: ClientOptions = {}
): HeaderRestClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const userAgentInfo = `azsdk-js-header-rest/1.0.0-preview1`;
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

  const client = getClient(baseUrl, options) as HeaderRestClient;

  return client;
}
