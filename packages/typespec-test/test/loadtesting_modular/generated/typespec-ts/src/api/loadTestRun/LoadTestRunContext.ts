// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { AzureLoadTestingClientContext } from "../../rest/index.js";
import { TokenCredential } from "@azure/core-auth";
import getClient from "../../rest/index.js";

export interface LoadTestRunClientOptions extends ClientOptions {}

export { AzureLoadTestingClientContext } from "../../rest/index.js";

/** */
export function createLoadTestRun(
  endpoint: string,
  credential: TokenCredential,
  options: LoadTestRunClientOptions = {}
): AzureLoadTestingClientContext {
  const baseUrl = endpoint;
  const clientContext = getClient(baseUrl, credential, options);
  return clientContext;
}
