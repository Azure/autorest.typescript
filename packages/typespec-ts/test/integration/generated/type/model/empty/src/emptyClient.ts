// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger.js";
import { EmptyClient } from "./clientDefinitions.js";

/** The optional parameters for the client */
export interface EmptyClientOptions extends ClientOptions {}

/**
 * Initialize a new instance of `EmptyClient`
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  options: EmptyClientOptions = {},
): EmptyClient {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `http://localhost:3000`;
  const userAgentInfo = `azsdk-js-empty-model-rest/1.0.0-beta.1`;
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
  const client = getClient(endpointUrl, options) as EmptyClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }

  return client;
}
