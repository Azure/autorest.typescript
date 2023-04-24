// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BatchServiceContext } from "../rest/index.js";
import { TokenCredential } from "@azure/core-auth";
import getClient from "../rest/index.js";
import { ClientOptions } from "../common/interfaces.js";

export { BatchServiceContext } from "../rest/index.js";

/** A client for issuing REST requests to the Azure Batch service. */
export function createBatchService(
  endpoint: string,
  credential: TokenCredential,
  options: ClientOptions = {}
): BatchServiceContext {
  const baseUrl = endpoint;
  const clientContext = getClient(baseUrl, credential, options);
  return clientContext;
}
