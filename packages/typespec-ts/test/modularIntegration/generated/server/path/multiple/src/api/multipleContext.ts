// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Versions } from "../models/models.js";
import { ClientOptions, Client, getClient } from "@azure-rest/core-client";
import { logger } from "../logger.js";

export interface MultipleContext extends Client {}

/** Optional parameters for the client. */
export interface MultipleClientOptionalParams extends ClientOptions {
  /** Pass in v1.0 for API version. */
  apiVersion?: Versions;
}

export function createMultiple(
  endpointParam: string,
  options: MultipleClientOptionalParams = {},
): MultipleContext {
  const apiVersion = options.apiVersion ?? "v1.0";
  const endpointUrl =
    options.endpoint ??
    options.baseUrl ??
    `${endpointParam}/server/path/multiple/${apiVersion}`;

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
  return clientContext;
}
