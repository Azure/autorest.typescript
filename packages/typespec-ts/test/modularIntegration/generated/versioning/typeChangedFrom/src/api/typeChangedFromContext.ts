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
  const clientContext = getClient(endpointParam, version, {
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-versionning-typeChangedFrom-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
