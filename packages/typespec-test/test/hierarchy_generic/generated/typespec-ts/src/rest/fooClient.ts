// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "../logger.js";
import { FooContext } from "./clientDefinitions.js";

/**
 * Initialize a new instance of `FooContext`
 * @param endpointParam - The parameter endpointParam
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpointParam: string,
  options: ClientOptions = {},
): FooContext {
  const endpointUrl = options.endpoint ?? options.baseUrl ?? `${endpointParam}`;

  const userAgentInfo = `azsdk-js-hierarchy-generic-rest/1.0.0-beta.1`;
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

  const client = getClient(endpointUrl, options) as FooContext;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });

  return client;
}
