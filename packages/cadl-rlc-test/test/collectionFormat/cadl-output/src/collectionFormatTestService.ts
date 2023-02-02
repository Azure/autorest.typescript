// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { CollectionFormatTestServiceClient } from "./clientDefinitions";

/**
 * Initialize a new instance of the class CollectionFormatTestServiceClient class.
 * @param endpoint type: string
 */
export default function createClient(
  endpoint: string,
  options: ClientOptions = {}
): CollectionFormatTestServiceClient {
  const baseUrl = options.baseUrl ?? `${endpoint}`;
  options.apiVersion = options.apiVersion ?? "2022-12-16-preview";

  const userAgentInfo = `azsdk-js-collection-format-rest/1.0.0-beta.1`;
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

  const client = getClient(
    baseUrl,
    options
  ) as CollectionFormatTestServiceClient;

  return client;
}
