// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "../logger.js";
import { BasicContext } from "./clientDefinitions.js";

/** The optional parameters for the client */
export interface BasicContextOptions extends ClientOptions {
  /** The api version option of the client */
  apiVersion?: string;
}

/**
 * Initialize a new instance of `BasicContext`
 * @param options - the parameter for all optional parameters
 */
export default function createClient({
  apiVersion = "2022-12-01-preview",
  ...options
}: BasicContextOptions = {}): BasicContext {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `http://localhost:3000`;
  const userAgentInfo = `azsdk-js-azure-core-basic-rest/1.0.0-beta.1`;
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
  const client = getClient(endpointUrl, options) as BasicContext;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  client.pipeline.addPolicy({
    name: "ClientApiVersionPolicy",
    sendRequest: (req, next) => {
      // Use the apiVersion defined in request url directly
      // Append one if there is no apiVersion and we have one at client options
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
