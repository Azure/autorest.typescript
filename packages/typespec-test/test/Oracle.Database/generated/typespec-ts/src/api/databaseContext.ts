// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { DatabaseContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface DatabaseClientOptions extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { DatabaseContext } from "../rest/index.js";

export function createDatabase(
  credential: TokenCredential,
  options: DatabaseClientOptions = {},
): DatabaseContext {
  const clientContext = getClient(credential, options);
  return clientContext;
}
