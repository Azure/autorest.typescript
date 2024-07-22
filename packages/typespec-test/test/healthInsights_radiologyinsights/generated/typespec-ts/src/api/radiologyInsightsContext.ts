// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { AzureHealthInsightsContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface RadiologyInsightsClientOptions extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { AzureHealthInsightsContext } from "../rest/index.js";

export function createRadiologyInsights(
  endpointParam: string,
  credential: KeyCredential,
  options: RadiologyInsightsClientOptions = {},
): AzureHealthInsightsContext {
  const clientContext = getClient(endpointParam, credential, options);
  return clientContext;
}
