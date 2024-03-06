// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { JsonContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface JsonClientOptions extends ClientOptions {}

export { JsonContext } from "../rest/index.js";

/** Projection */
export function createJson(options: JsonClientOptions = {}): JsonContext {
  const clientContext = getClient(options);
  return clientContext;
}
