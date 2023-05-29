// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client } from "../../rest/foo/index.js";
import { ClientOptions } from "@azure-rest/core-client";
import { createClient as getClient } from "../../rest/foo/index.js";

export { Client } from "../../rest/foo/index.js";

/** Cadl Foo */
export function createFoo(
  endpoint: string,
  apiVersion: string,
  options: FooClientOptions = {}
): Client.FooContext {
  const baseUrl = endpoint;
  const clientContext = getClient(baseUrl, options);
  return clientContext;
}

export interface FooClientOptions extends ClientOptions {}
