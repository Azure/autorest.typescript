// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { ApiKeyContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface ApiKeyClientOptionalParams extends ClientOptions {}

export { ApiKeyContext } from "../rest/index.js";

/** Illustrates clients generated with ApiKey authentication. */
export function createApiKey(
  credential: KeyCredential,
  options: ApiKeyClientOptionalParams = {},
): ApiKeyContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";

  const clientContext = getClient(credential, {
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
