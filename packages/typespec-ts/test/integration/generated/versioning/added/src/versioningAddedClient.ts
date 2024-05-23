// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger.js";
import { VersioningAddedClient } from "./clientDefinitions.js";
import { Versions } from "./models.js";

/**
 * Initialize a new instance of `VersioningAddedClient`
 * @param endpointParam - Need to be set as 'http://localhost:3000' in client.
 * @param version - Need to be set as 'v1' or 'v2' in client.
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpointParam: string,
  version: Versions,
  options: ClientOptions = {},
): VersioningAddedClient {
  const endpointUrl =
    options.endpoint ??
    options.baseUrl ??
    `${endpointParam}/versioning/added/api-version:${version}`;

  const userAgentInfo = `azsdk-js-versioning-added-rest/1.0.0-beta.1`;
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

  const client = getClient(endpointUrl, options) as VersioningAddedClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });

  return client;
}
