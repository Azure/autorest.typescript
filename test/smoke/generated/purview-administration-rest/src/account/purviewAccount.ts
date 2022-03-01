// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { PurviewAccountLike } from "./clientDefinitions";

export function PurviewAccount(
  endpoint: string,
  credentials: TokenCredential,
  options: ClientOptions = {}
): PurviewAccountLike {
  const baseUrl = options.baseUrl ?? `${endpoint}`;
  options.apiVersion = options.apiVersion ?? "2019-11-01-preview";
  options = {
    ...options,
    credentials: {
      scopes: ["https://purview.azure.net/.default"]
    }
  };

  const userAgentInfo = `azsdk-js-purview-administration-rest/1.0.0-beta.2`;
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

  const client = getClient(baseUrl, credentials, options) as PurviewAccountLike;

  return client;
}
