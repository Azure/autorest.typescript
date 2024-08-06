// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientType } from "../models/models.js";
import { ClientOptions, Client, getClient } from "@azure-rest/core-client";
import { logger } from "../../logger.js";

export interface ServiceContext extends Client {}

/** Optional parameters for the client. */
export interface AClientOptionalParams extends ClientOptions {}

export function createA(
  endpointParam: string,
  clientParam: ClientType,
  options: AClientOptionalParams = {},
): ServiceContext {
  const endpointUrl =
    options.endpoint ??
    options.baseUrl ??
    `${endpointParam}/client/structure/${clientParam}`;

  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";
  const updatedOptions = {
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
