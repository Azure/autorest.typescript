// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { InternalPipelineOptions } from "@azure/core-rest-pipeline";
import { logger } from "./logger";
import { ResponseClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `ResponseClient`
 * @param endpoint type: string, The parameter endpoint
 * @param options type: ClientOptions&InternalPipelineOptions, the parameter for all optional parameters
 */
export function createClient(
  endpoint: string,
  options: ClientOptions & InternalPipelineOptions = {}
): ResponseClient {
  const baseUrl = options.baseUrl ?? `${endpoint}`;
  options.apiVersion = options.apiVersion ?? "1.0.0";

  const userAgentInfo = `azsdk-js-multiclient-rest/1.0.0-beta.1`;
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
      logger: logger.info,
    },
  };

  const client = getClient(baseUrl, options) as ResponseClient;

  return client;
}
