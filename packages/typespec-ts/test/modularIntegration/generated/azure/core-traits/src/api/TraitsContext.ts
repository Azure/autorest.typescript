// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { TraitsContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface TraitsClientOptions extends ClientOptions {}

export { TraitsContext } from "../rest/index.js";

/** Illustrates Azure Core operation customizations by traits */
export function createTraits(options: TraitsClientOptions = {}): TraitsContext {
  const clientContext = getClient(options);
  return clientContext;
}
