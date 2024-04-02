// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { AzureLoadTestingContext } from "../../rest/index.js";
import getClient from "../../rest/index.js";

export interface TestRunOperationsClientOptions extends ClientOptions {}

export { AzureLoadTestingContext } from "../../rest/index.js";

export function createTestRunOperations(
  endpointParam: string,
  credential: TokenCredential,
  options: TestRunOperationsClientOptions = {},
): AzureLoadTestingContext {
  const clientContext = getClient(endpointParam, credential, options);
  return clientContext;
}
