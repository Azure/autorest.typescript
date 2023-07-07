// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { AzureLoadTestingClientContext } from "../../rest/index.js";
import { TokenCredential } from "@azure/core-auth";
import getClient from "../../rest/index.js";

export interface LoadTestAdministrationClientOptions extends ClientOptions {}

export { AzureLoadTestingClientContext } from "../../rest/index.js";

/** */
export function createLoadTestAdministration(
  endpoint: string,
  credential: TokenCredential,
  options: LoadTestAdministrationClientOptions = {}
): AzureLoadTestingClientContext {
  const baseUrl = endpoint;
  const clientContext = getClient(baseUrl, credential, options);
  return clientContext;
}
