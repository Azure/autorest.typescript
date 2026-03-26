// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { logger } from "../logger.js";
import { KnownApiVersion } from "../models/models.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";
import { KeyCredential } from "@azure/core-auth";

/** Azure AI Health Insights provides an API that serves insight models, specific for Health & Life Sciences, that perform analysis and provide inferences to be used by a human. */
export interface AzureHealthInsightsContext extends Client {
  /** The API version to use for this operation. */
  /** Known values of {@link KnownApiVersion} that the service accepts. */
  apiVersion?: string;
}

/** Optional parameters for the client. */
export interface AzureHealthInsightsClientOptionalParams extends ClientOptions {
  /** The API version to use for this operation. */
  /** Known values of {@link KnownApiVersion} that the service accepts. */
  apiVersion?: string;
}

/** Azure AI Health Insights provides an API that serves insight models, specific for Health & Life Sciences, that perform analysis and provide inferences to be used by a human. */
export function createAzureHealthInsights(
  endpointParam: string,
  credential: KeyCredential,
  options: AzureHealthInsightsClientOptionalParams = {},
): AzureHealthInsightsContext {
  const endpointUrl = options.endpoint ?? `${endpointParam}/health-insights`;
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentInfo = `azsdk-js-health-insights-radiologyinsights/1.0.0-beta.1`;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api ${userAgentInfo}`
    : `azsdk-js-api ${userAgentInfo}`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
    credentials: {
      apiKeyHeaderName: options.credentials?.apiKeyHeaderName ?? "Ocp-Apim-Subscription-Key",
    },
  };
  const clientContext = getClient(endpointUrl, credential, updatedOptions);
  const apiVersion = options.apiVersion;
  return { ...clientContext, apiVersion } as AzureHealthInsightsContext;
}
