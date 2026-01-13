
import { AzureSupportedClouds } from "../../static-helpers/cloudSettingHelpers.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";

/** Compute Client */
export interface ComputeDiskContext extends Client {
  /** The API version to use for this operation. */
  apiVersion?: string;
  /** The ID of the target subscription. The value must be an UUID. */
  subscriptionId: string;
}

/** Optional parameters for the client. */
export interface ComputeDiskClientOptionalParams extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
  /** Specifies the Azure cloud environment for the client. */
  cloudSetting?: AzureSupportedClouds;
}

/** Compute Client */
export function createComputeDisk(
  credential: TokenCredential,
  subscriptionId: string,
  options: ComputeDiskClientOptionalParams = {},
): ComputeDiskContext {
  const endpointUrl = options.endpoint ?? "https://management.azure.com";
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentInfo = `azsdk-js-compute/1.0.0-beta.1`;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api ${userAgentInfo}`
    : `azsdk-js-api ${userAgentInfo}`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    credentials: { scopes: options.credentials?.scopes ?? [`${endpointUrl}/.default`] },
  };
  const clientContext = getClient(endpointUrl, credential, updatedOptions);
  const apiVersion = options.apiVersion;
  return { ...clientContext, apiVersion, subscriptionId } as ComputeDiskContext;
}