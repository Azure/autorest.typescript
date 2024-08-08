// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions, Client, getClient } from "@azure-rest/core-client";
import { logger } from "../logger.js";

export interface ServiceDrivenContext extends Client {}

/** Optional parameters for the client. */
export interface ServiceDrivenClientOptionalParams extends ClientOptions {
  /** Pass in 'v1'. This represents the API version of the service. Will grow up in the next deployment to be both 'v1' and 'v2' */
  apiVersion?: string;
}

/** Test that we can grow up a service spec and service deployment into a multi-versioned service with full client support. */
export function createServiceDriven(
  endpointParam: string,
  serviceDeploymentVersion: string,
  options: ServiceDrivenClientOptionalParams = {},
): ServiceDrivenContext {
  const apiVersion = options.apiVersion ?? "v1";
  const endpointUrl =
    options.endpoint ??
    options.baseUrl ??
    `${endpointParam}/resiliency/service-driven/client:v1/service:${serviceDeploymentVersion}/api-version:${apiVersion}`;

  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
  };
  const clientContext = getClient(endpointUrl, undefined, updatedOptions);
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  return clientContext;
}
