// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { KeyCredential } from "@azure/core-auth";
import { AnomalyDetectorMVClient } from "./clientDefinitions";

export interface AnomalyDetectorMVClientOptions extends ClientOptions {
  apiVersion?: "v1.1";
}

/**
 * Initialize a new instance of `AnomalyDetectorMVClient`
 * @param endpoint Supported Cognitive Services endpoints (protocol and hostname, for example: https://westus2.api.cognitive.microsoft.com).
 * @param credentials KeyCredential which uniquely identify client credential.
 * @param options The parameter options
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
    }
  };

  const client = getClient(
    baseUrl,
    credentials,
    options
  ) as AnomalyDetectorMVClient;

  return client;
}
