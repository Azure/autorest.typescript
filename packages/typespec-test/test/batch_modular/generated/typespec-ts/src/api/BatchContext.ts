// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { BatchContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface BatchClientOptions extends ClientOptions {}

export { BatchContext } from "../rest/index.js";

/** Azure Batch provides Cloud-scale job scheduling and compute management. */
export function createBatch(
  endpoint: string,
  credential: TokenCredential,
  options: BatchClientOptions = {},
): BatchContext {
  const clientContext = getClient(endpoint, credential, options);
  return clientContext;
}
