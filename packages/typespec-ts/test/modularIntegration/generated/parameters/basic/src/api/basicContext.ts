// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { BasicContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface BasicClientOptions extends ClientOptions {}

export { BasicContext } from "../rest/index.js";

/** Test for basic parameters cases. */
export function createBasic(options: BasicClientOptions = {}): BasicContext {
  const clientContext = getClient(options);
  return clientContext;
}
