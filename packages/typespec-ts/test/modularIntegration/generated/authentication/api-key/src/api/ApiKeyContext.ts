// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { ApiKeyContext } from "../rest/index.js";
import { KeyCredential } from "@azure/core-auth";
import getClient from "../rest/index.js";

export interface ApiKeyClientOptions extends ClientOptions {}

export { ApiKeyContext } from "../rest/index.js";

/** Illustrates clients generated with ApiKey authentication. */
export function createApiKey(
  credential: KeyCredential,
  options: ApiKeyClientOptions = {}
): ApiKeyContext {
  options.credentials = {
    ...options.credentials,
    apiKeyHeaderName: "x-ms-api-key",
  };
  const clientContext = getClient(credential, options);
  return clientContext;
}
