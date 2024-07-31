// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { ManagedIdentityContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface ManagedIdentityClientOptionalParams extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { ManagedIdentityContext } from "../rest/index.js";

/** Arm Managed Identity Provider management API. */
export function createManagedIdentity(
  options: ManagedIdentityClientOptionalParams = {},
): ManagedIdentityContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";

  const clientContext = getClient({
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
