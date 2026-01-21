// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { logger } from "../../logger.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";

/** Client for testing header parameter moved to client level. */
export interface HeaderParamContext extends Client {
  /** The name of the client. This parameter is used as a header in all operations. */
  name: string;
}

/** Optional parameters for the client. */
export interface HeaderParamClientOptionalParams extends ClientOptions {}

/** Client for testing header parameter moved to client level. */
export function createHeaderParam(
  name: string,
  options: HeaderParamClientOptionalParams = {},
): HeaderParamContext {
  const endpointUrl = options.endpoint ?? "http://localhost:3000";
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentInfo = `azsdk-js-client-generator-core-initialization/1.0.0-beta.1`;
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
  return { ...clientContext, name } as HeaderParamContext;
}
