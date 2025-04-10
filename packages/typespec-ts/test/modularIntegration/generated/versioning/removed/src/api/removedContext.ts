// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { logger } from "../logger.js";
import { Versions } from "../models/models.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";

/** Test for the `@removed` decorator. */
export interface RemovedContext extends Client {
  /** Need to be set as 'v1', 'v2preview' or 'v2' in client. */
  version: Versions;
}

/** Optional parameters for the client. */
export interface RemovedClientOptionalParams extends ClientOptions {}

/** Test for the `@removed` decorator. */
export function createRemoved(
  endpointParam: string,
  version: Versions,
  options: RemovedClientOptionalParams = {},
): RemovedContext {
  const endpointUrl =
    options.endpoint ??
    options.baseUrl ??
    `${endpointParam}/versioning/removed/api-version:${version}`;
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentInfo = `azsdk-js-versionning-removed/1.0.0-beta.1`;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api ${userAgentInfo}`
    : `azsdk-js-api ${userAgentInfo}`;
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
  return { ...clientContext, version } as RemovedContext;
}
