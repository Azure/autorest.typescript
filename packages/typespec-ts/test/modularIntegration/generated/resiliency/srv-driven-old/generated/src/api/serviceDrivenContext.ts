// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { ServiceDrivenContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface ServiceDrivenClientOptionalParams extends ClientOptions {
  /** Pass in 'v1'. This represents the API version of the service. Will grow up in the next deployment to be both 'v1' and 'v2' */
  apiVersion?: string;
}

export { ServiceDrivenContext } from "../rest/index.js";

/** Test that we can grow up a service spec and service deployment into a multi-versioned service with full client support. */
export function createServiceDriven(
  endpointParam: string,
  serviceDeploymentVersion: string,
  options: ServiceDrivenClientOptionalParams = {},
): ServiceDrivenContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";

  const clientContext = getClient(endpointParam, serviceDeploymentVersion, {
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
