// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { KeyCredential } from "@azure/core-auth";
import { AnomalyDetectorRestClient } from "./clientDefinitions";

/** The optional parameters for the client */
export interface AnomalyDetectorRestClientOptions extends ClientOptions {}

/**
 * Initialize a new instance of `AnomalyDetectorRestClient`
 * @param endpoint - Supported Cognitive Services endpoints (protocol and hostname, for example: https://westus2.api.cognitive.microsoft.com).
 * @param apiVersion - Anomaly Detector API version (for example, v1.1).
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  apiVersion: string,
  credentials: KeyCredential,
  options: AnomalyDetectorRestClientOptions = {},
): AnomalyDetectorRestClient {
  const endpointUrl =
    options.endpoint ??
    options.baseUrl ??
    `${endpoint}/anomalydetector/${apiVersion}`;
  const userAgentInfo = `azsdk-js-anomaly-detector-rest/1.0.0-beta.1`;
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
  ) as AnomalyDetectorRestClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support to set api-version in options, please change it at positional argument",
    );
  }

  return client;
}
