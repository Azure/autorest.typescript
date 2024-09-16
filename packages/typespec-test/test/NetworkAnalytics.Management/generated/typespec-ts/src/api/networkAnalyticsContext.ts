// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { logger } from "../logger.js";
import {
  _DataProductListResult,
  _dataProductListResultSerializer,
  _dataProductListResultDeserializer,
  _DataTypeListResult,
  _dataTypeListResultSerializer,
  _dataTypeListResultDeserializer,
  _DataProductsCatalogListResult,
  _dataProductsCatalogListResultSerializer,
  _dataProductsCatalogListResultDeserializer,
  _OperationListResult,
  _operationListResultSerializer,
  _operationListResultDeserializer,
} from "../models/models.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";

export interface NetworkAnalyticsContext extends Client {}

/** Optional parameters for the client. */
export interface NetworkAnalyticsClientOptionalParams extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export function createNetworkAnalytics(
  credential: TokenCredential,
  options: NetworkAnalyticsClientOptionalParams = {},
): NetworkAnalyticsContext {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `https://management.azure.com`;

  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
    credentials: {
      scopes: options.credentials?.scopes ?? [`${endpointUrl}/.default`],
    },
  };
  const clientContext = getClient(endpointUrl, credential, updatedOptions);
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  return clientContext;
}
