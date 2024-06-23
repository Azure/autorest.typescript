// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger.js";
import { ServiceClient } from "./clientDefinitions.js";
import { ClientType } from "./models.js";

/** The optional parameters for the client */
export interface ServiceClientOptions extends ClientOptions {}

/**
 * Initialize a new instance of `ServiceClient`
 * @param endpointParam - Need to be set as 'http://localhost:3000' in client.
 * @param clientParam - Need to be set as 'default', 'multi-client', 'renamed-operation', 'two-operation-group' in client.
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpointParam: string,
  clientParam: ClientType,
  options: ServiceClientOptions = {},
): ServiceClient {
  const endpointUrl =
    options.endpoint ??
    options.baseUrl ??
    `${endpointParam}/client/structure/${clientParam}`;
  const userAgentInfo = `azsdk-js-client-structure-default-rest/1.0.0`;
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
  const client = getClient(endpointUrl, options) as ServiceClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }

  return client;
}
