// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger.js";
import { MediaTypesClient } from "./clientDefinitions.js";

/** The optional parameters for the client */
export interface MediaTypesClientOptions extends ClientOptions {}

/**
 * Initialize a new instance of `MediaTypesClient`
 * @param $host - A sequence of textual characters.
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  $host: string,
  options: MediaTypesClientOptions = {},
): MediaTypesClient {
  const endpointUrl = options.endpoint ?? options.baseUrl ?? `${$host}`;
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
  const client = getClient(endpointUrl, options) as MediaTypesClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }

  return client;
}
