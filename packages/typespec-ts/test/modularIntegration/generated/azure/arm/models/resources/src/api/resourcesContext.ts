// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { ResourcesContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface ResourcesClientOptions extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { ResourcesContext } from "../rest/index.js";

/** Arm Resource Provider management API. */
export function createResources(
  credential: TokenCredential,
  options: ResourcesClientOptions = {},
): ResourcesContext {
  const clientContext = getClient(credential, options);
  return clientContext;
}
