// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger.js";
import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { OpenAIClient } from "./clientDefinitions.js";

export interface OpenAIClientOptions extends ClientOptions {
  apiVersion?: string;
}

/**
 * Initialize a new instance of `OpenAIClient`
 * @param endpointParam - Supported Cognitive Services endpoints (protocol and hostname, for example:
 * https://westus.api.cognitive.microsoft.com).
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpointParam: string,
  credentials: TokenCredential | KeyCredential,
  options: OpenAIClientOptions = {},
): OpenAIClient {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `${endpointParam}/openai`;

  const apiVersion = options.apiVersion ?? "2023-08-01-preview";
  delete options.apiVersion;

  const userAgentInfo = `azsdk-js-openai-rest/1.0.0-beta.1`;
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
        "https://cognitiveservices.azure.com/.default",
      ],
      apiKeyHeaderName: options.credentials?.apiKeyHeaderName ?? "api-key",
    },
  };

  const client = getClient(endpointUrl, credentials, options) as OpenAIClient;

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
