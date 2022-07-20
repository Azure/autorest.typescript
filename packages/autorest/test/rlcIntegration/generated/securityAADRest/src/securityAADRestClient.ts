// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { SecurityAADRestClient } from "./clientDefinitions";

export default function createClient(
  credentials: TokenCredential,
  options: ClientOptions = {}
): SecurityAADRestClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  options = {
    ...options,
    credentials: {
      scopes: ["https://security.microsoft.com/.default"]
    }
  };

  const userAgentInfo = `azsdk-js-security-aad-rest/1.0.0-preview1`;
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
  ) as SecurityAADRestClient;

  return {
    ...client,
    ...{
      head: (options) => {
        return client.path("/securityaad").head(options);
      }
    }
  };
}
