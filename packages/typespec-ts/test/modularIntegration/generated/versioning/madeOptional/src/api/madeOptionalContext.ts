// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Versions } from "../models/models.js";
import { ClientOptions } from "@azure-rest/core-client";
import { MadeOptionalContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface MadeOptionalClientOptions extends ClientOptions {}

export { MadeOptionalContext } from "../rest/index.js";

/** Test for the `@madeOptional` decorator. */
export function createMadeOptional(
  endpointParam: string,
  version: Versions,
  options: MadeOptionalClientOptions = {},
): MadeOptionalContext {
  const clientContext = getClient(endpointParam, version, {
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-versionning-madeOptional-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
