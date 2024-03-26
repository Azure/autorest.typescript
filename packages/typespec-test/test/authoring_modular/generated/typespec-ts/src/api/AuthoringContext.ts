// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { AuthoringContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface AuthoringClientOptions extends ClientOptions {}

export { AuthoringContext } from "../rest/index.js";

export function createAuthoring(
  endpoint: string,
  credential: KeyCredential,
  options: AuthoringClientOptions = {},
): AuthoringContext {
  const clientContext = getClient(endpoint, credential, options);
  return clientContext;
}
