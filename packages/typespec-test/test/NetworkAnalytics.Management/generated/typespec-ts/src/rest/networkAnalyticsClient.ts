// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "../logger.js";
import { TokenCredential } from "@azure/core-auth";
import { NetworkAnalyticsContext } from "./clientDefinitions.js";

export interface NetworkAnalyticsContextOptions extends ClientOptions {
  apiVersion?: string;
}

/**
 * Initialize a new instance of `NetworkAnalyticsContext`
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  credentials: TokenCredential,
  options: NetworkAnalyticsContextOptions = {},
): NetworkAnalyticsContext {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `https://management.azure.com`;

  const apiVersion = options.apiVersion ?? "2023-11-15";
  delete options.apiVersion;

  const userAgentInfo = `azsdk-js-arm-networkanalytics-rest/1.0.0-beta.1`;
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
    credentials: {
      scopes: options.credentials?.scopes ?? [`${endpointUrl}/.default`],
    },
  };

  const client = getClient(
    endpointUrl,
    credentials,
    options,
  ) as NetworkAnalyticsContext;

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
