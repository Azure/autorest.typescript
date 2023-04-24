// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { InternalPipelineOptions } from "@azure/core-rest-pipeline";
import { logger } from "./logger";
import { KeyCredential } from "@azure/core-auth";
import { AnomalyDetectorMVClient } from "./clientDefinitions";

export interface AnomalyDetectorMVClientOptions
  extends ClientOptions,
    InternalPipelineOptions {
  apiVersion?: "v1.1";
}

/**
 * Initialize a new instance of `AnomalyDetectorMVClient`
 * @param endpoint type: string, Supported Cognitive Services endpoints (protocol and hostname, for example: https://westus2.api.cognitive.microsoft.com).
 * @param credentials type: KeyCredential, uniquely identify client credential
 * @param options type: AnomalyDetectorMVClientOptions, the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  credentials: KeyCredential,
  options: AnomalyDetectorMVClientOptions = {}
): AnomalyDetectorMVClient {
  const apiVersion = options.apiVersion ?? "v1.1";
  const baseUrl =
    options.baseUrl ?? `${endpoint}/anomalydetector/${apiVersion}`;

  options = {
    ...options,
    credentials: {
      apiKeyHeaderName: "Ocp-Apim-Subscription-Key"
    }
  };

  const userAgentInfo = `azsdk-js-anomaly-detector-mv-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix
    },
    loggingOptions: {
      logger: logger.info
    }
  };

  const client = getClient(
    baseUrl,
    credentials,
    options
  ) as AnomalyDetectorMVClient;

  return client;
}
