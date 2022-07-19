// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { KeyCredential } from "@azure/core-auth";
import { SecurityKeyRestClient } from "./clientDefinitions";

export default function createClient(
  credentials: KeyCredential,
  options: ClientOptions = {}
): SecurityKeyRestClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  options = {
    ...options,
    credentials: {
      apiKeyHeaderName: "security-key"
    }
  };

  const userAgentInfo = `azsdk-js-security-key-rest/1.0.0-preview1`;
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
  ) as SecurityKeyRestClient;

  return {
    ...client,
    ...{
      head: (options) => {
        return client.path("/securitykey").head(options);
      }
    }
  };
}
