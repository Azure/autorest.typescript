// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { logger } from "../logger.js";
import { KnownServiceApiVersions } from "../models/models.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";
import { KeyCredential, TokenCredential } from "@azure/core-auth";

export interface OpenAIContext extends Client {
  /** The API version to use for this operation. */
  /** Known values of {@link KnownServiceApiVersions} that the service accepts. */
  apiVersion?: string;
}

/** Optional parameters for the client. */
export interface OpenAIClientOptionalParams extends ClientOptions {
  /** The API version to use for this operation. */
  /** Known values of {@link KnownServiceApiVersions} that the service accepts. */
  apiVersion?: string;
}

export function createOpenAI(
  endpointParam: string,
  credential: KeyCredential | TokenCredential,
  options: OpenAIClientOptionalParams = {},
): OpenAIContext {
  const endpointUrl = options.endpoint ?? `${endpointParam}/openai`;
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentInfo = `azsdk-js-openai_modular/1.0.0-beta.1`;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api ${userAgentInfo}`
    : `azsdk-js-api ${userAgentInfo}`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
    credentials: {
      scopes: options.credentials?.scopes ?? ["https://cognitiveservices.azure.com/.default"],
      apiKeyHeaderName: options.credentials?.apiKeyHeaderName ?? "api-key",
    },
  };
  const clientContext = getClient(endpointUrl, credential, updatedOptions);
  const apiVersion = options.apiVersion;
  return { ...clientContext, apiVersion } as OpenAIContext;
}
