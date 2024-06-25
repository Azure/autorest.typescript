// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { CustomContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface CustomClientOptions extends ClientOptions {}

export { CustomContext } from "../rest/index.js";

/** Illustrates clients generated with generic HTTP auth. */
export function createCustom(
  credential: KeyCredential,
  options: CustomClientOptions = {},
): CustomContext {
  const clientContext = getClient(credential, {
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-azure-http-custom-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
