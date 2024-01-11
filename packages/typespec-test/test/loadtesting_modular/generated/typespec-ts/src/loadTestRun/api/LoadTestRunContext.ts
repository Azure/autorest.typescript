// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { AzureLoadTestingContext } from "../../rest/index.js";
import getClient from "../../rest/index.js";

export interface LoadTestRunClientOptions extends ClientOptions {}

export { AzureLoadTestingContext } from "../../rest/index.js";

export function createLoadTestRun(
  endpoint: string,
  credential: TokenCredential,
  options: LoadTestRunClientOptions = {},
): AzureLoadTestingContext {
  const clientContext = getClient(endpoint, credential, options);
  return clientContext;
}
