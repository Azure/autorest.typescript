// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger.js";
import { MultipleParamInServerPathClient } from "./clientDefinitions.js";
import { Versions } from "./models.js";

/** The optional parameters for the client */
export interface MultipleParamInServerPathClientOptions extends ClientOptions {
  /** Pass in v1.0 for API version. */
  apiVersion?: Versions;
}

/**
 * Initialize a new instance of `MultipleParamInServerPathClient`
 * @param endpointParam - Pass in http://localhost:3000 for endpoint.
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpointParam: string,
  {
    apiVersion = "v1.0",
    ...options
  }: MultipleParamInServerPathClientOptions = {},
): MultipleParamInServerPathClient {
  const endpointUrl =
    options.endpoint ??
    options.baseUrl ??
    `${endpointParam}/server/path/multiple/${apiVersion}`;
  const userAgentInfo = `azsdk-js-multipleparam-rest/1.0.0-beta.1`;
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
  ) as MultipleParamInServerPathClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });

  return client;
}
