// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "../../common/interfaces.js";
import { Client } from "../../rest/bar/index.js";
import { createClient as getClient } from "../../rest/bar/index.js";

export { Client } from "../../rest/bar/index.js";

/** Bar */
export function createBar(
  endpoint: string,
  apiVersion: string,
  options: ClientOptions = {}
): Client.BarContext {
  const baseUrl = endpoint;
  const clientContext = getClient(baseUrl, options);
  return clientContext;
}
