// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { BodyComplexRestClient } from "./clientDefinitions";

export interface BodyComplexRestClientOptions extends ClientOptions {
  apiVersion?: string;
}

/**
 * Initialize a new instance of `BodyComplexRestClient`
 * @param {
 *     apiVersion = apiVersionParam, ...options} - the parameter for all optional parameters
 */
export default function createClient({
  apiVersion = apiVersionParam,
  ...options
}: BodyComplexRestClientOptions = {}): BodyComplexRestClient {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `http://localhost:3000`;
  const userAgentInfo = `azsdk-js-body-complex-rest/1.0.0-preview1`;
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

  const client = getClient(endpointUrl, options) as BodyComplexRestClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }

  return client;
}
