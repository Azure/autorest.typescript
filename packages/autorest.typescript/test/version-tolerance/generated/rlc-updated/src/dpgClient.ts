// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { ClientOptions } from "@azure-rest/core-client";
import { getClient } from "@azure-rest/core-client";
import { logger } from "./logger";
import type { DPGClient } from "./clientDefinitions";

/** The optional parameters for the client */
export interface DPGClientOptions extends ClientOptions {}

/**
 * Initialize a new instance of `DPGClient`
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  options: DPGClientOptions = {},
): DPGClient {
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
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }

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
