// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { ExtensibleContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface ExtensibleClientOptions extends ClientOptions {}

export { ExtensibleContext } from "../rest/index.js";

export function createExtensible(
  options: ExtensibleClientOptions = {},
): ExtensibleContext {
  const clientContext = getClient(options);
  return clientContext;
}
