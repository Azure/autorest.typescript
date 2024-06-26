// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Versions } from "../models/models.js";
import { ClientOptions } from "@azure-rest/core-client";
import { TypeChangedFromContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface TypeChangedFromClientOptions extends ClientOptions {}

export { TypeChangedFromContext } from "../rest/index.js";

/** Test for the `@typeChangedFrom` decorator. */
export function createTypeChangedFrom(
  endpointParam: string,
  version: Versions,
  options: TypeChangedFromClientOptions = {},
): TypeChangedFromContext {
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
