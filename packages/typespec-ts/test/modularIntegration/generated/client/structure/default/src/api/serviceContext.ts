// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientType } from "../models/models.js";
import { ClientOptions, Client, getClient } from "@azure-rest/core-client";
import { logger } from "../logger.js";

export interface ServiceContext extends Client {}

/** Optional parameters for the client. */
export interface ServiceClientOptionalParams extends ClientOptions {}

/**
 * Test that we can use @client and @operationGroup decorators to customize client side code structure, such as:
 * 1. have everything as default.
 * 2. to rename client or operation group
 * 3. one client can have more than one operations groups
 * 4. split one interface into two clients
 * 5. have two clients with operations come from different interfaces
 * 6. have two clients with a hierarchy relation.
 */
export function createService(
  endpointParam: string,
  clientParam: ClientType,
  options: ServiceClientOptionalParams = {},
): ServiceContext {
  const endpointUrl =
    options.endpoint ??
    options.baseUrl ??
    `${endpointParam}/client/structure/${clientParam}`;

  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
  };
  const clientContext = getClient(endpointUrl, undefined, updatedOptions);
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }
  return clientContext;
}
