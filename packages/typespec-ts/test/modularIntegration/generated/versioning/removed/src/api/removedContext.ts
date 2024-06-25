// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Versions } from "../models/models.js";
import { ClientOptions } from "@azure-rest/core-client";
import { RemovedContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface RemovedClientOptions extends ClientOptions {}

export { RemovedContext } from "../rest/index.js";

/** Test for the `@removed` decorator. */
export function createRemoved(
  endpointParam: string,
  version: Versions,
  options: RemovedClientOptions = {},
): RemovedContext {
  const clientContext = getClient(endpointParam, version, {
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-versionning-removed-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
