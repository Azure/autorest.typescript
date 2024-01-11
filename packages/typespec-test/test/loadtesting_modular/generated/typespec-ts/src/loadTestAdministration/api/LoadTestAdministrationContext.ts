// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { AzureLoadTestingContext } from "../../rest/index.js";
import getClient from "../../rest/index.js";

export interface LoadTestAdministrationClientOptions extends ClientOptions {}

export { AzureLoadTestingContext } from "../../rest/index.js";

export function createLoadTestAdministration(
  endpoint: string,
  credential: TokenCredential,
  options: LoadTestAdministrationClientOptions = {},
): AzureLoadTestingContext {
  const clientContext = getClient(endpoint, credential, options);
  return clientContext;
}
