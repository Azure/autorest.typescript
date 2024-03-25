// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { VersionedContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface VersionedClientOptions extends ClientOptions {}

export { VersionedContext } from "../rest/index.js";

/** Illustrates versioned server. */
export function createVersioned(
  endpoint: string,
  options: VersionedClientOptions = {},
): VersionedContext {
  const clientContext = getClient(endpoint, options);
  return clientContext;
}
