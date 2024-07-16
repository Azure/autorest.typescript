// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { AVSContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface AVSClientOptionalParams extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { AVSContext } from "../rest/index.js";

/** Azure VMware Solution API */
export function createAVS(
  credential: TokenCredential,
  options: AVSClientOptionalParams = {},
): AVSContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";

  const clientContext = getClient(credential, {
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
