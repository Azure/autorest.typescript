// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { AccessContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface AccessClientOptions extends ClientOptions {}

export { AccessContext } from "../rest/index.js";

/** Test for internal decorator. */
export function createAccess(options: AccessClientOptions = {}): AccessContext {
  const clientContext = getClient({
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-clientGeneratorCore-access-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
