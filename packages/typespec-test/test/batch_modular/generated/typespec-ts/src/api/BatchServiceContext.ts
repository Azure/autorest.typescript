// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "../common/interfaces.js";
import getClient, { BatchServiceContext } from "../rest/index.js";

export { BatchServiceContext } from "../rest/index.js";

/** A client for issuing REST requests to the Azure Batch service. */
export function createBatchService(
  endpoint: string,
  credential: TokenCredential,
  apiVersion: string,
  options: ClientOptions = {}
): BatchServiceContext {
  const baseUrl = endpoint;
  const clientContext = getClient(baseUrl, credential, options);
  return clientContext;
}
