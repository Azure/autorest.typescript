// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { XmsRequestIdClientContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface XmsRequestIdClientOptionalParams extends ClientOptions {}

export { XmsRequestIdClientContext } from "../rest/index.js";

/** Azure client request id header configurations. */
export function createXmsRequestId(
  options: XmsRequestIdClientOptionalParams = {},
): XmsRequestIdClientContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";

  const clientContext = getClient({
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
