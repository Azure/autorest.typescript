// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions, Client, getClient } from "@azure-rest/core-client";
import { logger } from "../logger.js";

export interface ServiceDrivenContext extends Client {}

/** Optional parameters for the client. */
export interface ServiceDrivenClientOptionalParams extends ClientOptions {
  /** Pass in either 'v1' or 'v2'. This represents the API version of a service. */
  apiVersion?: string;
}

/**
 * Test that we can grow up a service spec and service deployment into a multi-versioned service with full client support.
 *
 * There are three concepts that should be clarified:
 * 1. Client spec version: refers to the spec that the client is generated from. 'v1' is a client generated from old.tsp and 'v2' is a client generated from main.tsp.
 * 2. Service deployment version: refers to a deployment version of the service. 'v1' represents the initial deployment of the service with a single api version. 'v2' represents the new deployment of a service with multiple api versions
 * 3. Api version: The initial deployment of the service only supports api version 'v1'. The new deployment of the service supports api versions 'v1' and 'v2'.
 *
 * We test the following configurations from this service spec:
 * - A client generated from the second service spec can call the second deployment of a service with api version v1
 * - A client generated from the second service spec can call the second deployment of a service with api version v2
 */
export function createServiceDriven(
  endpointParam: string,
  serviceDeploymentVersion: string,
  options: ServiceDrivenClientOptionalParams = {},
): ServiceDrivenContext {
  const apiVersion = options.apiVersion ?? "v2";
  const endpointUrl =
    options.endpoint ??
    options.baseUrl ??
    `${endpointParam}/resiliency/service-driven/client:v2/service:${serviceDeploymentVersion}/api-version:${apiVersion}`;

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
