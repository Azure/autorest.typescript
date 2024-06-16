// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "../logger";
import { KeyCredential } from "@azure/core-auth";
import { PurviewMetadataPoliciesClient } from "./clientDefinitions";

export interface PurviewMetadataPoliciesClientOptions extends ClientOptions {
  apiVersion?: string;
}

/**
 * Initialize a new instance of `PurviewMetadataPoliciesClient`
 * @param endpoint - The endpoint of your Purview account. Example: https://{accountName}.purview.azure.com.
 * @param credentials - uniquely identify client credential
 * @param {
 *     apiVersion = "2021-07-01-preview", ...options} - the parameter for all optional parameters
 */
export function createClient(
  endpoint: string,
  credentials: KeyCredential,
  {
    apiVersion = "2021-07-01-preview",
    ...options
  }: PurviewMetadataPoliciesClientOptions = {},
): PurviewMetadataPoliciesClient {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `${endpoint}/policyStore`;
  const userAgentInfo = `azsdk-js-purview-administration-rest/1.0.0-beta.2`;
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
      apiKeyHeaderName: options.credentials?.apiKeyHeaderName ?? "CustomAuth",
    },
  };
  const client = getClient(
    endpointUrl,
    credentials,
    options,
  ) as PurviewMetadataPoliciesClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
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
