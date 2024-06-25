// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { DurationContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface DurationClientOptions extends ClientOptions {}

export { DurationContext } from "../rest/index.js";

/** Test for encode decorator on duration. */
export function createDuration(
  options: DurationClientOptions = {},
): DurationContext {
  const clientContext = getClient({
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-encode-duration-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
