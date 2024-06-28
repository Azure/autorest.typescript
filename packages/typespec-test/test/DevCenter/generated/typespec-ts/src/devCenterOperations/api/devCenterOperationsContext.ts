// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { DevCenterServiceContext } from "../../rest/index.js";
import getClient from "../../rest/index.js";

export interface DevCenterOperationsClientOptions extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { DevCenterServiceContext } from "../../rest/index.js";

export function createDevCenterOperations(
  endpointParam: string,
  credential: TokenCredential,
  options: DevCenterOperationsClientOptions = {},
): DevCenterServiceContext {
  const clientContext = getClient(endpointParam, credential, options);
  return clientContext;
}
