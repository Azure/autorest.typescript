// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Versions } from "../models/models.js";
import { ClientOptions } from "@azure-rest/core-client";
import { MultipleContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface MultipleClientOptions extends ClientOptions {
  /** Pass in v1.0 for API version. */
  apiVersion?: Versions;
}

export { MultipleContext } from "../rest/index.js";

export function createMultiple(
  endpointParam: string,
  options: MultipleClientOptions = {},
): MultipleContext {
  const clientContext = getClient(endpointParam, {
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-multipleparam-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
