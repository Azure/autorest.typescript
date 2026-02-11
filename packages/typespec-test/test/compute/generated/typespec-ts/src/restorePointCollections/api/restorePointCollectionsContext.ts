// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureSupportedClouds } from "../../index.js";
import { logger } from "../../logger.js";
import { AzureSupportedClouds, getArmEndpoint } from "../../static-helpers/cloudSettingHelpers.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";

export interface RestorePointCollectionsContext extends Client {
  /** The ID of the target subscription. The value must be an UUID. */
  subscriptionId: string;
}

/** Optional parameters for the client. */
export interface RestorePointCollectionsOptionalParams extends ClientOptions {
  /** Specifies the Azure cloud environment for the client. */
  cloudSetting?: AzureSupportedClouds;
}

export function createRestorePointCollections(
  credential: TokenCredential,
  subscriptionId: string,
  options: RestorePointCollectionsOptionalParams = {},
): RestorePointCollectionsContext {
  const endpointUrl =
    options.endpoint ?? getArmEndpoint(options.cloudSetting) ?? "https://management.azure.com";
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentInfo = `azsdk-js-compute/1.0.0`;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api ${userAgentInfo}`
    : `azsdk-js-api ${userAgentInfo}`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
    credentials: { scopes: options.credentials?.scopes ?? [`${endpointUrl}/.default`] },
  };
  const clientContext = getClient(endpointUrl, credential, updatedOptions);

  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }
  return { ...clientContext, subscriptionId } as RestorePointCollectionsContext;
}
