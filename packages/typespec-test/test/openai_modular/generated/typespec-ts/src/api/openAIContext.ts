// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { logger } from "../logger.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";
import { KeyCredential, TokenCredential } from "@azure/core-auth";

export interface OpenAIContext extends Client {}

/** Optional parameters for the client. */
export interface OpenAIClientOptionalParams extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export function createOpenAI(
  endpointParam: string,
  credential: KeyCredential | TokenCredential,
  options: OpenAIClientOptionalParams = {},
): OpenAIContext {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `${endpointParam}/openai`;

  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
    credentials: {
      scopes: options.credentials?.scopes ?? [
        "https://cognitiveservices.azure.com/.default",
      ],
      apiKeyHeaderName: options.credentials?.apiKeyHeaderName ?? "api-key",
    },
  };
  const clientContext = getClient(endpointUrl, credential, updatedOptions);
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  const apiVersion = options.apiVersion ?? "2024-06-01";
  clientContext.pipeline.addPolicy({
    name: "ClientApiVersionPolicy",
    sendRequest: (req, next) => {
      // Use the apiVersion defined in request url directly
      // Append one if there is no apiVersion and we have one at client options
      const url = new URL(req.url);
      if (!url.searchParams.get("api-version")) {
        req.url = `${req.url}${
          Array.from(url.searchParams.keys()).length > 0 ? "&" : "?"
        }api-version=${apiVersion}`;
      }

      return next(req);
    },
  });
  return clientContext;
}
