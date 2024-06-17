// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { LoadTestServiceContext } from "../../rest/index.js";
import getClient from "../../rest/index.js";

export interface AdministrationOperationsClientOptions extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { LoadTestServiceContext } from "../../rest/index.js";

export function createAdministrationOperations(
  endpointParam: string,
  credential: TokenCredential,
  options: AdministrationOperationsClientOptions = {},
): LoadTestServiceContext {
  const clientContext = getClient(endpointParam, credential, options);
  return clientContext;
}
