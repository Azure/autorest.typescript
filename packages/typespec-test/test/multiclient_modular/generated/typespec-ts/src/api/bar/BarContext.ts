// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client } from "../../rest/bar/index.js";
import { ClientOptions } from "@azure-rest/core-client";
import { createClient as getClient } from "../../rest/bar/index.js";

export { Client } from "../../rest/bar/index.js";

/** Bar */
export function createBar(
  endpoint: string,
  apiVersion: string,
  options: BarClientOptions = {}
): Client.BarContext {
  const baseUrl = endpoint;
  const clientContext = getClient(baseUrl, options);
  return clientContext;
}

export interface BarClientOptions extends ClientOptions {}
