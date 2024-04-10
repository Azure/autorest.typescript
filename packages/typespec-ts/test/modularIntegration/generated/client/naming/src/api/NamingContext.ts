// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { NamingContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface NamingClientOptions extends ClientOptions {}

export { NamingContext } from "../rest/index.js";

/** Describe changing names of types in a client with `@clientName` */
export function createNaming(options: NamingClientOptions = {}): NamingContext {
  const clientContext = getClient(options);
  return clientContext;
}
