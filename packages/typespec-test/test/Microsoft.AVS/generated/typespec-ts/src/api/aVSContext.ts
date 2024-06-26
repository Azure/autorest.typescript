// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { AVSContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface AVSClientOptions extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { AVSContext } from "../rest/index.js";

/** Azure VMware Solution API */
export function createAVS(
  credential: TokenCredential,
  options: AVSClientOptions = {},
): AVSContext {
  const clientContext = getClient(credential, options);
  return clientContext;
}
