// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { RequestIdClientContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface RequestIdClientOptions extends ClientOptions {}

export { RequestIdClientContext } from "../rest/index.js";

/** Azure client request id header configurations. */
export function createRequestId(
  options: RequestIdClientOptions = {},
): RequestIdClientContext {
  const clientContext = getClient(options);
  return clientContext;
}
