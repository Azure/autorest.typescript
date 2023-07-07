// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { Client } from "../../rest/loadTestAdministration/index.js";
import { TokenCredential } from "@azure/core-auth";
import { createClient as getClient } from "../../rest/loadTestAdministration/index.js";

export interface LoadTestAdministrationClientOptions extends ClientOptions {}

export { Client } from "../../rest/loadTestAdministration/index.js";

/** */
export function createLoadTestAdministration(
  endpoint: string,
  credential: TokenCredential,
  options: LoadTestAdministrationClientOptions = {}
): Client.LoadTestAdministrationContext {
  const baseUrl = endpoint;
  const clientContext = getClient(baseUrl, credential, options);
  return clientContext;
}
