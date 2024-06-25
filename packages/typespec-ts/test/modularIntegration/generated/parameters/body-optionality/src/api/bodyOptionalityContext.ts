// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { BodyOptionalityContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface BodyOptionalityClientOptions extends ClientOptions {}

export { BodyOptionalityContext } from "../rest/index.js";

/** Test describing optionality of the request body. */
export function createBodyOptionality(
  options: BodyOptionalityClientOptions = {},
): BodyOptionalityContext {
  const clientContext = getClient({
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-body-optionality-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
