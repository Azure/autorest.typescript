// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { AdditionalPropertiesContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface AdditionalPropertiesClientOptions extends ClientOptions {}

export { AdditionalPropertiesContext } from "../rest/index.js";

/** Tests for additional properties of models */
export function createAdditionalProperties(
  options: AdditionalPropertiesClientOptions = {},
): AdditionalPropertiesContext {
  const clientContext = getClient({
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-additional-property-api/1.0.0",
    },
    ...options,
  });
  return clientContext;
}
