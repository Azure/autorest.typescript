// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger.js";
import { SingleParamInServerPathClient } from "./clientDefinitions.js";

/** The optional parameters for the client */
export interface SingleParamInServerPathClientOptions extends ClientOptions {}

/**
 * Initialize a new instance of `SingleParamInServerPathClient`
 * @param endpointParam - Need to be set as 'http://localhost:3000' in client.
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpointParam: string,
  options: SingleParamInServerPathClientOptions = {},
): SingleParamInServerPathClient {
  const endpointUrl = options.endpoint ?? options.baseUrl ?? `${endpointParam}`;
  const userAgentInfo = `azsdk-js-singleparam-rest/1.0.0-beta.1`;
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
  const client = getClient(
    endpointUrl,
    options,
  ) as SingleParamInServerPathClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }

  return client;
}
