// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { SingleContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface SingleClientOptions extends ClientOptions {}

export { SingleContext } from "../rest/index.js";

/** Illustrates server with a single path parameter @server */
export function createSingle(
  endpoint: string,
  options: SingleClientOptions = {},
): SingleContext {
  const clientContext = getClient(endpoint, options);
  return clientContext;
}
