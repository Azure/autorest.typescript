// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Versions } from "../models/models.js";
import { ClientOptions } from "@azure-rest/core-client";
import { MultipleContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface MultipleClientOptionalParams extends ClientOptions {
  /** Pass in v1.0 for API version. */
  apiVersion?: Versions;
}

export { MultipleContext } from "../rest/index.js";

export function createMultiple(
  endpointParam: string,
  options: MultipleClientOptionalParams = {},
): MultipleContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";

  const clientContext = getClient(endpointParam, {
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
