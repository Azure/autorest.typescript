// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { VersionedContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface VersionedClientOptionalParams extends ClientOptions {}

export { VersionedContext } from "../rest/index.js";

/** Illustrates versioned server. */
export function createVersioned(
  endpointParam: string,
  options: VersionedClientOptionalParams = {},
): VersionedContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";

  const clientContext = getClient(endpointParam, {
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
