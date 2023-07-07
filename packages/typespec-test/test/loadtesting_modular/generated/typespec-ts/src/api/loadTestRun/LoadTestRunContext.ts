// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { Client } from "../../rest/loadTestRun/index.js";
import { TokenCredential } from "@azure/core-auth";
import { createClient as getClient } from "../../rest/loadTestRun/index.js";

export interface LoadTestRunClientOptions extends ClientOptions {}

export { Client } from "../../rest/loadTestRun/index.js";

/** */
export function createLoadTestRun(
  endpoint: string,
  credential: TokenCredential,
  options: LoadTestRunClientOptions = {}
): Client.LoadTestRunContext {
  const baseUrl = endpoint;
  const clientContext = getClient(baseUrl, credential, options);
  return clientContext;
}
