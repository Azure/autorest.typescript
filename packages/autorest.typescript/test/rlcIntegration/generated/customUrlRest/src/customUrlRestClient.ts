// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { ClientOptions } from "@azure-rest/core-client";
import { getClient } from "@azure-rest/core-client";
import { logger } from "./logger";
import type { CustomUrlRestClient } from "./clientDefinitions";

/** The optional parameters for the client */
export interface CustomUrlRestClientOptions extends ClientOptions {}

/**
 * Initialize a new instance of `CustomUrlRestClient`
 * @param host - A string value that is used as a global part of the parameterized host
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  host: string,
  options: CustomUrlRestClientOptions = {},
): CustomUrlRestClient {
  const endpointUrl = options.endpoint ?? `http://{accountName}${host}`;
  const userAgentInfo = `azsdk-js-custom-url-rest/1.0.0-preview1`;
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
  const client = getClient(endpointUrl, options) as CustomUrlRestClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }

  return {
    ...client,
    paths: {
      getEmpty: (options) => {
        return client.path("/customuri").get(options);
      },
    },
  };
}
