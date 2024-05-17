// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { RecursiveContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface RecursiveClientOptions extends ClientOptions {}

export { RecursiveContext } from "../rest/index.js";

/** Illustrates inheritance recursion */
export function createRecursive(
  options: RecursiveClientOptions = {},
): RecursiveContext {
  const clientContext = getClient(options);
  return clientContext;
}
