// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { DPGCustomizationClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `DPGCustomizationClient`
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  options: ClientOptions = {},
): DPGCustomizationClient {
  const baseUrl = options.baseUrl ?? `http://localhost:3000`;
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

  const client = getClient(baseUrl, options) as DPGCustomizationClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
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
