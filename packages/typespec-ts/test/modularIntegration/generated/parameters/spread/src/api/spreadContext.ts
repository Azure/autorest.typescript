// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { SpreadContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface SpreadClientOptions extends ClientOptions {}

export { SpreadContext } from "../rest/index.js";

/** Test for the spread operator. */
export function createSpread(options: SpreadClientOptions = {}): SpreadContext {
  const clientContext = getClient(options);
  return clientContext;
}
