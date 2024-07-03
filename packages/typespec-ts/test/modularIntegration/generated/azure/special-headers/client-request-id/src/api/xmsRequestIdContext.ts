// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { XmsRequestIdClientContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface XmsRequestIdClientOptions extends ClientOptions {}

export { XmsRequestIdClientContext } from "../rest/index.js";

/** Azure client request id header configurations. */
export function createXmsRequestId(
  options: XmsRequestIdClientOptions = {},
): XmsRequestIdClientContext {
  const clientContext = getClient(options);
  return clientContext;
}
