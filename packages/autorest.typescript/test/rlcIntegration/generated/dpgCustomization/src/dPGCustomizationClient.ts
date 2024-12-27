// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { ClientOptions } from "@azure-rest/core-client";
import { getClient } from "@azure-rest/core-client";
import { logger } from "./logger";
import type { DPGCustomizationClient } from "./clientDefinitions";

/** The optional parameters for the client */
export interface DPGCustomizationClientOptions extends ClientOptions {}

/**
 * Initialize a new instance of `DPGCustomizationClient`
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  options: DPGCustomizationClientOptions = {},
): DPGCustomizationClient {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `http://localhost:3000`;
  const userAgentInfo = `azsdk-js-dpg-customization-rest/1.0.0-preview1`;
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
  const client = getClient(endpointUrl, options) as DPGCustomizationClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }

  return {
    ...client,
    ...{
      getModel: (mode, options) => {
        return client.path("/customization/model/{mode}", mode).get(options);
      },
      postModel: (mode, options) => {
        return client.path("/customization/model/{mode}", mode).post(options);
      },
      getPages: (mode, options) => {
        return client.path("/customization/paging/{mode}", mode).get(options);
      },
      lro: (mode, options) => {
        return client.path("/customization/lro/{mode}", mode).put(options);
      },
    },
  };
}
