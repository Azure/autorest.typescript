// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { KeyCredential } from "@azure/core-auth";
import { PurviewMetadataPoliciesClient } from "./clientDefinitions";

export function createClient(
  Endpoint: string,
  credentials: KeyCredential,
  options: ClientOptions = {}
): PurviewMetadataPoliciesClient {
  const baseUrl = options.baseUrl ?? `${Endpoint}/policyStore`;
  options.apiVersion = options.apiVersion ?? "2021-07-01-preview";
  options = {
    ...options,
    credentials: {
      apiKeyHeaderName: "CustomAuth"
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

  const client = getClient(
    baseUrl,
    credentials,
    options
  ) as PurviewMetadataPoliciesClient;

  return client;
}
