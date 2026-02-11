// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { logger } from "../../logger.js";
import { KnownVersions } from "../../models/models.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";

export interface EvaluationsContext extends Client {
  /** The Azure subscription ID. */
  subscriptionId: string;
  /** The name of the Azure Resource Group. */
  resourceGroupName: string;
  /** The Azure AI Foundry project name. */
  projectName: string;
  /** The API version to use for this operation. */
  /** Known values of {@link KnownVersions} that the service accepts. */
  apiVersion?: string;
}

/** Optional parameters for the client. */
export interface EvaluationsOptionalParams extends ClientOptions {
  /** The API version to use for this operation. */
  /** Known values of {@link KnownVersions} that the service accepts. */
  apiVersion?: string;
}

export function createEvaluations(
  endpointParam: string,
  subscriptionId: string,
  resourceGroupName: string,
  projectName: string,
  credential: TokenCredential,
  options: EvaluationsOptionalParams = {},
): EvaluationsContext {
  const endpointUrl =
    options.endpoint ??
    `${endpointParam}/agents/v1.0/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/${projectName}`;
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentInfo = `azsdk-js-ai-client/1.0.0-beta.1`;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api ${userAgentInfo}`
    : `azsdk-js-api ${userAgentInfo}`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
    credentials: {
      scopes: options.credentials?.scopes ?? ["https://management.azure.com/.default"],
    },
  };
  const clientContext = getClient(endpointUrl, credential, updatedOptions);
  const apiVersion = options.apiVersion;
  return {
    ...clientContext,
    subscriptionId,
    resourceGroupName,
    projectName,
    apiVersion,
  } as EvaluationsContext;
}
