// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { BatchContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface BatchClientOptions extends ClientOptions {}

export { BatchContext } from "../rest/index.js";

/** Azure Batch provides Cloud-scale job scheduling and compute management. */
export function createBatch(
  endpointParam: string,
  credential: TokenCredential,
  options: BatchClientOptions = {},
): BatchContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-modular-api`
    : "azsdk-js-modular-api";

  const clientContext = getClient(endpointParam, credential, {
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
