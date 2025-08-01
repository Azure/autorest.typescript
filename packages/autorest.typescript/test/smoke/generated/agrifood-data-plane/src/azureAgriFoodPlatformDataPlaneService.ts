// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { ClientOptions } from "@azure-rest/core-client";
import { getClient } from "@azure-rest/core-client";
import { logger } from "./logger.js";
import type { KeyCredential } from "@azure/core-auth";
import type { AzureAgriFoodPlatformDataPlaneServiceClient } from "./clientDefinitions.js";

/** The optional parameters for the client */
export interface AzureAgriFoodPlatformDataPlaneServiceClientOptions
  extends ClientOptions {
  /** The api version option of the client */
  apiVersion?: string;
}

/**
 * Initialize a new instance of `AzureAgriFoodPlatformDataPlaneServiceClient`
 * @param endpoint - The endpoint of your FarmBeats resource (protocol and hostname, for example: https://{resourceName}.farmbeats.azure.net).
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  credentials: KeyCredential,
  {
    apiVersion = "2021-03-31-preview",
    ...options
  }: AzureAgriFoodPlatformDataPlaneServiceClientOptions = {},
): AzureAgriFoodPlatformDataPlaneServiceClient {
  const endpointUrl = options.endpoint ?? `${endpoint}`;
  const userAgentInfo = `azsdk-js-agrifood-data-plane-rest/1.0.0-beta.1`;
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
      apiKeyHeaderName:
        options.credentials?.apiKeyHeaderName ?? "Authorization",
    },
  };
  const client = getClient(
    endpointUrl,
    credentials,
    options,
  ) as AzureAgriFoodPlatformDataPlaneServiceClient;

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
