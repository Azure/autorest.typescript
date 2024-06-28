// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { DevCenterServiceContext } from "../../rest/index.js";
import getClient from "../../rest/index.js";

export interface EnvironmentOperationsClientOptions extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { DevCenterServiceContext } from "../../rest/index.js";

export function createEnvironmentOperations(
  endpointParam: string,
  credential: TokenCredential,
  options: EnvironmentOperationsClientOptions = {},
): DevCenterServiceContext {
  const clientContext = getClient(endpointParam, credential, options);
  return clientContext;
}
