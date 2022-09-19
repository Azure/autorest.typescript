// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { CustomUrlRestClient } from "./clientDefinitions";

/**
 * Initialize a new instance of the class CustomUrlRestClient class.
 * @param host type: string A string value that is used as a global part of the parameterized host
 */
export default function createClient(
  host: string,
  options: ClientOptions = {}
): CustomUrlRestClient {
  const baseUrl = options.baseUrl ?? `http://{accountName}${host}`;
  const userAgentInfo = `azsdk-js-custom-url-rest/1.0.0-preview1`;
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

  const client = getClient(baseUrl, options) as CustomUrlRestClient;

  return {
    ...client,
    paths: {
      getEmpty: (options) => {
        return client.path("/customuri").get(options);
      }
    }
  };
}
