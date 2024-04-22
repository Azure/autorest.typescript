// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { FooContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface FooClientOptions extends ClientOptions {}

export { FooContext } from "../rest/index.js";

export function createFoo(
  endpoint: string,
  options: FooClientOptions = {},
): FooContext {
  const clientContext = getClient(endpoint, options);
  return clientContext;
}
