// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { StandbyPoolContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface StandbyPoolClientOptions extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { StandbyPoolContext } from "../rest/index.js";

export function createStandbyPool(
  credential: TokenCredential,
  options: StandbyPoolClientOptions = {},
): StandbyPoolContext {
  const clientContext = getClient(credential, options);
  return clientContext;
}
