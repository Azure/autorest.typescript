// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Versions } from "../models/models.js";
import { ClientOptions } from "@azure-rest/core-client";
import { RenamedFromContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface RenamedFromClientOptions extends ClientOptions {}

export { RenamedFromContext } from "../rest/index.js";

/** Test for the `@renamedFrom` decorator. */
export function createRenamedFrom(
  endpointParam: string,
  version: Versions,
  options: RenamedFromClientOptions = {},
): RenamedFromContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-modular-api`
    : "azsdk-js-modular-api";

  const clientContext = getClient(endpointParam, version, {
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
