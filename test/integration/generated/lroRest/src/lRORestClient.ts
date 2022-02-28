// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import "@azure/core-auth";
import { LRORestClientLike } from "./clientDefinitions";

export default function LRORestClient(
  options: ClientOptions = {}
): LRORestClientLike {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const userAgentInfo = `azsdk-js-lro-rest/1.0.0-preview1`;
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

  const client = getClient(baseUrl, options) as LRORestClientLike;

  return client;
}
