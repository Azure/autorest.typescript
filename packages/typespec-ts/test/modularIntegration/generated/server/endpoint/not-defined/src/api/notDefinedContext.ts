// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { NotDefinedContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface NotDefinedClientOptions extends ClientOptions {}

export { NotDefinedContext } from "../rest/index.js";

/** Illustrates server doesn't define endpoint. Client should automatically add an endpoint to let user pass in. */
export function createNotDefined(
  endpoint: string,
  options: NotDefinedClientOptions = {},
): NotDefinedContext {
  const clientContext = getClient(endpoint, options);
  return clientContext;
}
