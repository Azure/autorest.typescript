// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { BatchServiceClient } from "./clientDefinitions";

/**
 * Initialize a new instance of the class BatchServiceClient class.
 * @param batchUrl type: string
 */
export default function createClient(
  batchUrl: string,
  options: ClientOptions = {}
): BatchServiceClient {
  const baseUrl = options.baseUrl ?? `${batchUrl}`;
  options.apiVersion = options.apiVersion ?? "2022-01-01.15.0";

  const userAgentInfo = `azsdk-js-batch-rest/1.0.0-beta.1`;
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

  const client = getClient(baseUrl, options) as BatchServiceClient;

  return client;
}
