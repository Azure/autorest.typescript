// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { logger } from "../logger.js";
import { KnownVersions } from "../models/models.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";

/** Azure Batch provides Cloud-scale job scheduling and compute management. */
export interface BatchContext extends Client {}

/** Optional parameters for the client. */
export interface BatchClientOptionalParams extends ClientOptions {
  /** The API version to use for this operation. */
  /** Known values of {@link KnownVersions} that the service accepts. */
  apiVersion?: string;
}

/** Azure Batch provides Cloud-scale job scheduling and compute management. */
export function createBatch(
  endpointParam: string,
  credential: TokenCredential,
  options: BatchClientOptionalParams = {},
): BatchContext {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? String(endpointParam);
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentInfo = `azsdk-js-batch/1.0.0-beta.1`;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api ${userAgentInfo}`
    : `azsdk-js-api ${userAgentInfo}`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
    credentials: {
      scopes: options.credentials?.scopes ?? [
        "https://batch.core.windows.net//.default",
      ],
    },
  };
  const clientContext = getClient(endpointUrl, credential, updatedOptions);
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  return clientContext;
}
