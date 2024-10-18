// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { logger } from "../logger.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";

export interface DemoServiceContext extends Client {}

/** Optional parameters for the client. */
export interface DemoServiceClientOptionalParams extends ClientOptions {}

export function createDemoService(
  endpointParam: string,
  options: DemoServiceClientOptionalParams = {},
): DemoServiceContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
  };
  const clientContext = getClient(
    options.endpoint ?? options.baseUrl ?? String(endpointParam),
    undefined,
    updatedOptions,
  );
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }
  return clientContext;
}
