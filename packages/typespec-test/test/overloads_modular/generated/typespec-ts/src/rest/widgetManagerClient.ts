// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "../logger.js";
import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { WidgetManagerContext } from "./clientDefinitions.js";

/**
 * Initialize a new instance of `WidgetManagerContext`
 * @param endpoint - Supported Widget Services endpoints (protocol and hostname, for example:
 * https://westus.api.widget.contoso.com).
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  credentials: TokenCredential | KeyCredential,
  options: ClientOptions = {},
): WidgetManagerContext {
  const baseUrl = options.baseUrl ?? `${endpoint}/widget`;
  options.apiVersion = options.apiVersion ?? "2022-08-30";
  const userAgentInfo = `azsdk-js-overload_modular-rest/1.0.0-beta.1`;
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
      scopes: options.credentials?.scopes ?? [
        "https://widget.contoso.com/.default",
      ],
      apiKeyHeaderName: options.credentials?.apiKeyHeaderName ?? "api-key",
    },
  };

  const client = getClient(
    baseUrl,
    credentials,
    options,
  ) as WidgetManagerContext;

  return client;
}
