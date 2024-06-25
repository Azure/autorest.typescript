// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Versions } from "../models/models.js";
import { ClientOptions } from "@azure-rest/core-client";
import { AddedContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface AddedClientOptions extends ClientOptions {}

export { AddedContext } from "../rest/index.js";

/** Test for the `@added` decorator. */
export function createAdded(
  endpointParam: string,
  version: Versions,
  options: AddedClientOptions = {},
): AddedContext {
  const clientContext = getClient(endpointParam, version, {
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-versionning-added-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
