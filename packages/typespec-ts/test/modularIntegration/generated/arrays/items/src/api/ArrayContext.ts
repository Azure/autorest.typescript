// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { ArrayContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface ArrayClientOptions extends ClientOptions {}

export { ArrayContext } from "../rest/index.js";

/** Illustrates various of dictionaries. */
export function createArray(options: ArrayClientOptions = {}): ArrayContext {
  const clientContext = getClient(options);
  return clientContext;
}
