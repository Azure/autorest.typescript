// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { DPGClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `DPGClient`
 * @param options - the parameter for all optional parameters
 */
export default function createClient(options: ClientOptions = {}): DPGClient {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `http://localhost:3000`;
  const userAgentInfo = `azsdk-js-rlcClient-rest/1.0.0-beta.1`;
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

  const client = getClient(endpointUrl, options) as DPGClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  return {
    ...client,
    params: {
      headNoParams: (options) => {
        return client.path("/serviceDriven/parameters").head(options);
      },
      getRequired: (options) => {
        return client.path("/serviceDriven/parameters").get(options);
      },
      putRequiredOptional: (options) => {
        return client.path("/serviceDriven/parameters").put(options);
      },
      postParameters: (options) => {
        return client.path("/serviceDriven/parameters").post(options);
      },
      deleteParameters: (options) => {
        return client.path("/serviceDriven/parameters").delete(options);
      },
      getOptional: (options) => {
        return client.path("/serviceDriven/moreParameters").get(options);
      },
      getNewOperation: (options) => {
        return client.path("/serviceDriven/newPath").get(options);
      },
    },
  };
}
