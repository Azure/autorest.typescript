// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { ClientOptions } from "@azure-rest/core-client";
import { getClient } from "@azure-rest/core-client";
import { logger } from "./logger";
import type { MediaTypesClient } from "./clientDefinitions";

/** The optional parameters for the client */
export interface MediaTypesClientOptions extends ClientOptions {}

/**
 * Initialize a new instance of `MediaTypesClient`
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  options: MediaTypesClientOptions = {},
): MediaTypesClient {
  const endpointUrl = options.endpoint ?? `http://localhost:3000`;
  const userAgentInfo = `azsdk-js-media-types-service-rest/1.0.0-preview1`;
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
  const client = getClient(endpointUrl, options) as MediaTypesClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }

  return client;
}
