// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { TraitsContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface TraitsClientOptions extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { TraitsContext } from "../rest/index.js";

/** Illustrates Azure Core operation customizations by traits */
export function createTraits(options: TraitsClientOptions = {}): TraitsContext {
  const clientContext = getClient(options);
  return clientContext;
}
