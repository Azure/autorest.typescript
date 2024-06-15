// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { PagingClient } from "./clientDefinitions";

export interface PagingClientOptions extends ClientOptions {
  apiVersion?: string;
}

/**
 * Initialize a new instance of `PagingClient`
 * @param {
 *     apiVersion = "1.0.0", ...options} - the parameter for all optional parameters
 */
export default function createClient({
  apiVersion = "1.0.0",
  ...options
}: PagingClientOptions = {}): PagingClient {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `http://localhost:3000`;
  const userAgentInfo = `azsdk-js-paging-service-rest/1.0.0-preview1`;
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

  const client = getClient(endpointUrl, options) as PagingClient;

  client.pipeline.addPolicy({
    name: "ClientApiVersionPolicy",
    sendRequest: (req, next) => {
      // Use the apiVesion defined in request url directly
      // Append one if there is no apiVesion and we have one at client options
      const url = new URL(req.url);
      if (!url.searchParams.get("api-version") && apiVersion) {
        req.url = `${req.url}${
          Array.from(url.searchParams.keys()).length > 0 ? "&" : "?"
        }api-version=${apiVersion}`;
      }

      return next(req);
    },
  });
  return client;
}
