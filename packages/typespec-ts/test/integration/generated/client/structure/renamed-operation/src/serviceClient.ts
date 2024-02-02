// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { ServiceClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `ServiceClient`
 * @param endpoint - Need to be set as 'http://localhost:3000' in client.
 * @param clientParam - Need to be set as 'default', 'multi-client', 'renamed-operation', 'two-operation-group' in client. Possible values: "default", "multi-client", "renamed-operation", "two-operation-group"
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  clientParam: string,
  options: ClientOptions = {},
): ServiceClient {
  const baseUrl =
    options.baseUrl ?? `${endpoint}/client/structure/${clientParam}`;

  const userAgentInfo = `azsdk-js-client-structure-renamed-rest/1.0.0`;
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

  const client = getClient(baseUrl, options) as ServiceClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });

  return client;
}
