// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { SingleContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface SingleClientOptions extends ClientOptions {}

export { SingleContext } from "../rest/index.js";

/** Illustrates server with a single path parameter @server */
export function createSingle(
  endpointParam: string,
  options: SingleClientOptions = {},
): SingleContext {
  const clientContext = getClient(endpointParam, {
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-singleparam-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
