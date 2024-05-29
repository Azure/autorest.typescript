// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "../logger.js";
import { TokenCredential } from "@azure/core-auth";
import { AppComplianceAutomationContext } from "./clientDefinitions.js";

/**
 * Initialize a new instance of `AppComplianceAutomationContext`
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  credentials: TokenCredential,
  options: ClientOptions = {},
): AppComplianceAutomationContext {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `https://management.azure.com`;
  options.apiVersion = options.apiVersion ?? "2024-06-27";
  const userAgentInfo = `azsdk-js-arm-appcompliance-rest/1.0.0-beta.1`;
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
  ) as AppComplianceAutomationContext;

  return client;
}
