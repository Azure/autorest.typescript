// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { ApiKeyContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface ApiKeyClientOptions extends ClientOptions {}

export { ApiKeyContext } from "../rest/index.js";

/** Illustrates clients generated with ApiKey authentication. */
export function createApiKey(
  credential: KeyCredential,
  options: ApiKeyClientOptions = {},
): ApiKeyContext {
  const clientContext = getClient(credential, options);
  return clientContext;
}
