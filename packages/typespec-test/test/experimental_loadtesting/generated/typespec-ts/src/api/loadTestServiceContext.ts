// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { logger } from "../logger.js";
import { KnownAPIVersions } from "../models/models.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";

/** These APIs allow end users to create, view and run load tests using Azure Load Test Service. */
export interface LoadTestServiceContext extends Client {
  /** The API version to use for this operation. */
  /** Known values of {@link KnownAPIVersions} that the service accepts. */
  apiVersion?: string;
}

/** Optional parameters for the client. */
export interface LoadTestServiceClientOptionalParams extends ClientOptions {
  /** The API version to use for this operation. */
  /** Known values of {@link KnownAPIVersions} that the service accepts. */
  apiVersion?: string;
}

/** These APIs allow end users to create, view and run load tests using Azure Load Test Service. */
export function createLoadTestService(
  endpointParam: string,
  credential: TokenCredential,
  options: LoadTestServiceClientOptionalParams = {},
): LoadTestServiceContext {
  const endpointUrl = options.endpoint ?? `https://${endpointParam}`;
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentInfo = `azsdk-js-load-testing-experimental/1.0.0`;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api ${userAgentInfo}`
    : `azsdk-js-api ${userAgentInfo}`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
    credentials: {
      scopes: options.credentials?.scopes ?? ["https://cnt-prod.loadtesting.azure.com/.default"],
    },
  };
  const clientContext = getClient(endpointUrl, credential, updatedOptions);
  const apiVersion = options.apiVersion;
  return { ...clientContext, apiVersion } as LoadTestServiceContext;
}
