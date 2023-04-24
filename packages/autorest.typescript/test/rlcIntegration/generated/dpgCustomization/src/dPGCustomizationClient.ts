// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { InternalPipelineOptions } from "@azure/core-rest-pipeline";
import { logger } from "./logger";
import { DPGCustomizationClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `DPGCustomizationClient`
 * @param options type: ClientOptions&InternalPipelineOptions, the parameter for all optional parameters
 */
export default function createClient(
  options: ClientOptions & InternalPipelineOptions = {}
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
      userAgentPrefix
    },
    loggingOptions: {
      logger: logger.info
    }
  };

  const client = getClient(baseUrl, options) as DPGCustomizationClient;

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
      }
    }
  };
}
