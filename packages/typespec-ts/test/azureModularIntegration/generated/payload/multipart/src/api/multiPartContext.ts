// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { logger } from "../logger.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";

/** Test for multipart */
export interface MultiPartContext extends Client {}

/** Optional parameters for the client. */
export interface MultiPartClientOptionalParams extends ClientOptions {}

/** Test for multipart */
export function createMultiPart(
  options: MultiPartClientOptionalParams = {},
): MultiPartContext {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? "http://localhost:3000";
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentInfo = `azsdk-js-payload-multipart/1.0.0-beta.1`;
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
  return clientContext;
}
