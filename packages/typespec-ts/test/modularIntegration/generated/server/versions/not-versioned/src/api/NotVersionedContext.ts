// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { NotVersionedContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface NotVersionedClientOptions extends ClientOptions {}

export { NotVersionedContext } from "../rest/index.js";

/** Illustrates not-versioned server. */
export function createNotVersioned(
  endpoint: string,
  options: NotVersionedClientOptions = {},
): NotVersionedContext {
  const clientContext = getClient(endpoint, options);
  return clientContext;
}
