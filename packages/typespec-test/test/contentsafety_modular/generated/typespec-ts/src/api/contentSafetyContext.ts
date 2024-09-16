// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { logger } from "../logger.js";
import {
  _PagedTextBlocklist,
  _pagedTextBlocklistSerializer,
  _pagedTextBlocklistDeserializer,
  _PagedTextBlockItem,
  _pagedTextBlockItemSerializer,
  _pagedTextBlockItemDeserializer,
} from "../models/models.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";
import { KeyCredential, TokenCredential } from "@azure/core-auth";

/** Analyze harmful content */
export interface ContentSafetyContext extends Client {}

/** Optional parameters for the client. */
export interface ContentSafetyClientOptionalParams extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

/** Analyze harmful content */
export function createContentSafety(
  endpointParam: string,
  credential: KeyCredential | TokenCredential,
  options: ContentSafetyClientOptionalParams = {},
): ContentSafetyContext {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `${endpointParam}/contentsafety`;

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
      apiKeyHeaderName:
        options.credentials?.apiKeyHeaderName ?? "Ocp-Apim-Subscription-Key",
    },
  };
  const clientContext = getClient(endpointUrl, credential, updatedOptions);
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  return clientContext;
}
