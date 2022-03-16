// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { AzureAgriFoodPlatformDataPlaneServiceLike } from "./clientDefinitions";

export default function AzureAgriFoodPlatformDataPlaneService(
  Endpoint: string,
  options: ClientOptions = {}
): AzureAgriFoodPlatformDataPlaneServiceLike {
  const baseUrl = options.baseUrl ?? `${Endpoint}`;
  options.apiVersion = options.apiVersion ?? "2021-03-31-preview";

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
    options
  ) as AzureAgriFoodPlatformDataPlaneServiceLike;

  return client;
}
