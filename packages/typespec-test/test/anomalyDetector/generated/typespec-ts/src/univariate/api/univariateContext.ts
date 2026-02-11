// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { logger } from "../../logger.js";
import { APIVersion } from "../../models/models.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";
import { KeyCredential } from "@azure/core-auth";

export interface UnivariateContext extends Client {
  /** Api Version */
  apiVersion?: APIVersion;
}

/** Optional parameters for the client. */
export interface UnivariateOptionalParams extends ClientOptions {
  /** Api Version */
  apiVersion?: string;
}

export function createUnivariate(
  endpointParam: string,
  credential: KeyCredential,
  options: UnivariateOptionalParams = {},
): UnivariateContext {
  const apiVersion = options.apiVersion ?? "v1.1";
  const endpointUrl = options.endpoint ?? `${endpointParam}/anomalydetector/${apiVersion}`;
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentInfo = `azsdk-js-ai-anomaly-detector/1.0.0-beta.1`;
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
  return { ...clientContext, apiVersion } as UnivariateContext;
}
