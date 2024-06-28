// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Versions } from "../models/models.js";
import { ClientOptions } from "@azure-rest/core-client";
import { MultipleContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface MultipleClientOptions extends ClientOptions {
  /** Pass in v1.0 for API version. */
  apiVersion?: Versions;
}

export { MultipleContext } from "../rest/index.js";

export function createMultiple(
  endpointParam: string,
  options: MultipleClientOptions = {},
): MultipleContext {
  const clientContext = getClient(endpointParam, options);
  return clientContext;
}
