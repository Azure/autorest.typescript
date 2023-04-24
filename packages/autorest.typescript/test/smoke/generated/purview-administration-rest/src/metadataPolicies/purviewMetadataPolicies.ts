// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { InternalPipelineOptions } from "@azure/core-rest-pipeline";
import { logger } from "./logger";
import { KeyCredential } from "@azure/core-auth";
import { PurviewMetadataPoliciesClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `PurviewMetadataPoliciesClient`
 * @param endpoint type: string, The endpoint of your Purview account. Example: https://{accountName}.purview.azure.com.
 * @param credentials type: KeyCredential, uniquely identify client credential
 * @param options type: ClientOptions&InternalPipelineOptions, the parameter for all optional parameters
 */
export function createClient(
  endpoint: string,
  credentials: KeyCredential,
  options: ClientOptions & InternalPipelineOptions = {}
): PurviewMetadataPoliciesClient {
  const baseUrl = options.baseUrl ?? `${endpoint}/policyStore`;
  options.apiVersion = options.apiVersion ?? "2021-07-01-preview";
  options = {
    ...options,
    credentials: {
      apiKeyHeaderName: "CustomAuth"
    }
  };

  const userAgentInfo = `azsdk-js-purview-administration-rest/1.0.0-beta.2`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix
    },
    loggingOptions: {
      logger: logger.info
    }
  };

  const client = getClient(
    baseUrl,
    credentials,
    options
  ) as PurviewMetadataPoliciesClient;

  return client;
}
