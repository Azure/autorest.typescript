// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Versions } from "../models/models.js";
import { ClientOptions } from "@azure-rest/core-client";
import { MadeOptionalContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface MadeOptionalClientOptionalParams extends ClientOptions {}

export { MadeOptionalContext } from "../rest/index.js";

/** Test for the `@madeOptional` decorator. */
export function createMadeOptional(
  endpointParam: string,
  version: Versions,
  options: MadeOptionalClientOptionalParams = {},
): MadeOptionalContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";

  const clientContext = getClient(endpointParam, version, {
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
