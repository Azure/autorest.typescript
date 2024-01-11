// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { ServiceDrivenNewClient } from "./clientDefinitions";

export interface ServiceDrivenNewClientOptions extends ClientOptions {
  apiVersion?: string;
}

/**
 * Initialize a new instance of `ServiceDrivenNewClient`
 * @param endpoint - Need to be set as 'http://localhost:3000' in client.
 * @param serviceDeploymentVersion - Pass in either 'v1' or 'v2'. This represents a version of the service deployment in history. 'v1' is for the deployment when the service had only one api version. 'v2' is for the deployment when the service had api-versions 'v1' and 'v2'.
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  serviceDeploymentVersion: string,
  options: ServiceDrivenNewClientOptions = {},
): ServiceDrivenNewClient {
  const apiVersion = options.apiVersion ?? "v2";
  const baseUrl =
    options.baseUrl ??
    `${endpoint}/resiliency/service-driven/client:v2/service:${serviceDeploymentVersion}/api-version:${apiVersion}`;

  const userAgentInfo = `azsdk-js-srv-driven-2-rest/1.0.0`;
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
  };

  const client = getClient(baseUrl, options) as ServiceDrivenNewClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });

  return client;
}
