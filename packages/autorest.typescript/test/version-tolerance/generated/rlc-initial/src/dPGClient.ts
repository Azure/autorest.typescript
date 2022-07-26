// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { DPGClient } from "./clientDefinitions";

export default function createClient(options: ClientOptions = {}): DPGClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const userAgentInfo = `azsdk-js-rlcClient-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix
    }
  };

  const client = getClient(baseUrl, options) as DPGClient;

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
      getOptional: (options) => {
        return client.path("/serviceDriven/moreParameters").get(options);
      }
    }
  };
}
