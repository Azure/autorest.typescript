// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { RepeatabilityClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `RepeatabilityClient`
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  options: ClientOptions = {},
): RepeatabilityClient {
  const baseUrl = options.baseUrl ?? `http://localhost:3000`;
  const userAgentInfo = `azsdk-js-repeatable-header-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
    loggingOptions: {
      logger: options.loggingOptions?.logger ?? logger.info,
    },
  };

  const client = getClient(baseUrl, options) as RepeatabilityClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  return client;
}
