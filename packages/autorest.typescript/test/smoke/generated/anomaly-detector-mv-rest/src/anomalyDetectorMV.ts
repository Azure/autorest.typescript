// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { ClientOptions } from "@azure-rest/core-client";
import { getClient } from "@azure-rest/core-client";
import { logger } from "./logger.js";
import type { KeyCredential } from "@azure/core-auth";
import type { AnomalyDetectorMVClient } from "./clientDefinitions.js";

/** The optional parameters for the client */
export interface AnomalyDetectorMVClientOptions extends ClientOptions {
  /** Api Version */
  apiVersion?: "v1.1";
}

/**
 * Initialize a new instance of `AnomalyDetectorMVClient`
 * @param endpoint - Supported Cognitive Services endpoints (protocol and hostname, for example: https://westus2.api.cognitive.microsoft.com).
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  credentials: KeyCredential,
  { apiVersion = "v1.1", ...options }: AnomalyDetectorMVClientOptions = {},
): AnomalyDetectorMVClient {
  const endpointUrl =
    options.endpoint ?? `${endpoint}/anomalydetector/${apiVersion}`;
  const userAgentInfo = `azsdk-js-anomaly-detector-mv-rest/1.0.0-beta.1`;
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
      apiKeyHeaderName:
        options.credentials?.apiKeyHeaderName ?? "Ocp-Apim-Subscription-Key",
    },
  };
  const client = getClient(
    endpointUrl,
    credentials,
    options,
  ) as AnomalyDetectorMVClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });

  return client;
}
