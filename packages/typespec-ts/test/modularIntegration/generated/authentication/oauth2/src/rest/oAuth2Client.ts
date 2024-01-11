// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "../logger.js";
import { TokenCredential } from "@azure/core-auth";
import { OAuth2Context } from "./clientDefinitions.js";

/**
 * Initialize a new instance of `OAuth2Context`
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  credentials: TokenCredential,
  options: ClientOptions = {},
): OAuth2Context {
  const baseUrl = options.baseUrl ?? `http://localhost:3000`;
  const userAgentInfo = `azsdk-js-azure-oauth2-rest/1.0.0-beta.1`;
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
        "https://security.microsoft.com/.default",
      ],
    },
  };

  const client = getClient(baseUrl, credentials, options) as OAuth2Context;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  return client;
}
