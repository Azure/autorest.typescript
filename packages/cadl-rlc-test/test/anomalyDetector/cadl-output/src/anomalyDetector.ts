// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { KeyCredential } from "@azure/core-auth";
import { AnomalyDetectorClient } from "./clientDefinitions";

export interface AnomalyDetectorClientOptions extends ClientOptions {
  ApiVersion?: string;
}

/**
 * Initialize a new instance of the class AnomalyDetectorClient class.
 * @param Endpoint type: string
 * @param credentials type: KeyCredential
 */
export default function createClient(
  Endpoint: string,
  credentials: KeyCredential,
  options: AnomalyDetectorClientOptions = {}
): AnomalyDetectorClient {
  const ApiVersion = options.ApiVersion ?? "v1.1";
  const baseUrl =
    options.baseUrl ?? `${Endpoint}/anomalydetector/${ApiVersion}`;

  options = {
    ...options,
    credentials: {
      apiKeyHeaderName: "Ocp-Apim-Subscription-Key",
    },
  };

  const userAgentInfo = `azsdk-js-ai-anomaly-detector-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
  };

  const client = getClient(
    baseUrl,
    credentials,
    options
  ) as AnomalyDetectorClient;

  return client;
}
