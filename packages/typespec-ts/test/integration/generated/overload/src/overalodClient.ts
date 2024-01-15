// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { OveralodClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `OveralodClient`
 * @param $host - A sequence of textual characters.
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  $host: string,
  options: ClientOptions = {},
): OveralodClient {
  const baseUrl = options.baseUrl ?? `${$host}`;

  const userAgentInfo = `azsdk-js-media-types-rest/1.0.0-beta.1`;
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

  const client = getClient(baseUrl, options) as OveralodClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });

  return client;
}
