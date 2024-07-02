// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { VersionedContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface VersionedClientOptions extends ClientOptions {}

export { VersionedContext } from "../rest/index.js";

/** Illustrates versioned server. */
export function createVersioned(
  endpointParam: string,
  options: VersionedClientOptions = {},
): VersionedContext {
  const clientContext = getClient(endpointParam, options);
  return clientContext;
}
