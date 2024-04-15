// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { UsageContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface UsageClientOptions extends ClientOptions {}

export { UsageContext } from "../rest/index.js";

/** Test for internal decorator. */
export function createUsage(options: UsageClientOptions = {}): UsageContext {
  const clientContext = getClient(options);
  return clientContext;
}
