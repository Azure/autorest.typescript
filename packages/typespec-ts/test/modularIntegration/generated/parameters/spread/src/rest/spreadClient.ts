// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "../logger.js";
import { SpreadContext } from "./clientDefinitions.js";

/** The optional parameters for the client */
export interface SpreadContextOptions extends ClientOptions {}

/**
 * Initialize a new instance of `SpreadContext`
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  options: SpreadContextOptions = {},
): SpreadContext {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `http://localhost:3000`;
  const userAgentInfo = `azsdk-js-parameterSpread/1.0.0-beta.1`;
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
  const client = getClient(endpointUrl, options) as SpreadContext;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }

  return client;
}
