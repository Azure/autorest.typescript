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
  const clientContext = getClient(endpointParam, version, {
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-versionning-renamedFrom-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
