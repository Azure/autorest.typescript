// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { ParametrizedHostContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface ParametrizedHostClientOptionalParams extends ClientOptions {
  host?: string;
  subdomain?: string;
  sufix?: string;
  apiVersion?: string;
}

export { ParametrizedHostContext } from "../rest/index.js";

export function createParametrizedHost(
  credential: TokenCredential,
  options: ParametrizedHostClientOptionalParams = {},
): ParametrizedHostContext {
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
