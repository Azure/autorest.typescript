// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Versions } from "../models/models.js";
import { ClientOptions } from "@azure-rest/core-client";
import { ReturnTypeChangedFromContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface ReturnTypeChangedFromClientOptions extends ClientOptions {}

export { ReturnTypeChangedFromContext } from "../rest/index.js";

/** Test for the `@returnTypeChangedFrom` decorator. */
export function createReturnTypeChangedFrom(
  endpointParam: string,
  version: Versions,
  options: ReturnTypeChangedFromClientOptions = {},
): ReturnTypeChangedFromContext {
  const clientContext = getClient(endpointParam, version, {
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-versionning-returnTypeChangedFrom-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
