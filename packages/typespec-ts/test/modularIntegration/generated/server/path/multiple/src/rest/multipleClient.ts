// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "../logger.js";
import { MultipleContext } from "./clientDefinitions.js";

export interface MultipleContextOptions extends ClientOptions {
  apiVersion?: string;
}

/**
 * Initialize a new instance of `MultipleContext`
 * @param endpoint - Pass in http://localhost:3000 for endpoint.
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  options: MultipleContextOptions = {},
): MultipleContext {
  const apiVersion = options.apiVersion ?? "v1.0";
  const baseUrl =
    options.baseUrl ?? `${endpoint}/server/path/multiple/${apiVersion}`;

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

  const client = getClient(baseUrl, options) as MultipleContext;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });

  return client;
}
