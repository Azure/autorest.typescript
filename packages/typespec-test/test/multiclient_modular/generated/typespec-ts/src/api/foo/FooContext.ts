// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "../../common/interfaces.js";
import { Client } from "../../rest/foo/index.js";
import { createClient as getClient } from "../../rest/foo/index.js";

export { Client } from "../../rest/foo/index.js";

/** Cadl Foo */
export function createFoo(
  endpoint: string,
  apiVersion: string,
  options: ClientOptions = {}
): Client.FooContext {
  const baseUrl = endpoint;
  const clientContext = getClient(baseUrl, options);
  return clientContext;
}
