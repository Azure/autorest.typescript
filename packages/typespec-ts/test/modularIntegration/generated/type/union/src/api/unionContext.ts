// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { UnionContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface UnionClientOptions extends ClientOptions {}

export { UnionContext } from "../rest/index.js";

/** Describe scenarios for various combinations of unions. */
export function createUnion(options: UnionClientOptions = {}): UnionContext {
  const clientContext = getClient(options);
  return clientContext;
}
