// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { TranslatorClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `TranslatorClient`
 * @param endpoint - Supported Text Translation endpoints (protocol and hostname, for example:
 *     https://api.cognitive.microsofttranslator.com).
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  options: ClientOptions = {},
): TranslatorClient {
  const baseUrl = options.baseUrl ?? `${endpoint}`;
  options.apiVersion = options.apiVersion ?? "3.0";
  const userAgentInfo = `azsdk-js-cognitiveservices-translator-rest/1.0.0-beta.1`;
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

  const client = getClient(baseUrl, options) as TranslatorClient;

  return client;
}
