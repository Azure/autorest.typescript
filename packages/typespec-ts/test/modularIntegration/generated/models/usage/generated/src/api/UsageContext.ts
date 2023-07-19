// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UsageContext } from "../rest/index.js";
import { ClientOptions } from "@azure-rest/core-client";
import getClient from "../rest/index.js";

export { UsageContext } from "../rest/index.js";

export interface UsageClientOptions extends ClientOptions {}

/** Illustrates usage of Record in different places(Operation parameters, return type or both). */
export function createUsage(options: UsageClientOptions = {}): UsageContext {
  const baseUrl = endpoint;
  const clientContext = getClient(baseUrl, options);
  return clientContext;
}
