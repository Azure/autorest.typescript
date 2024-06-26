// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { WidgetManagerContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface WidgetManagerClientOptions extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { WidgetManagerContext } from "../rest/index.js";

export function createWidgetManager(
  endpointParam: string,
  credential: KeyCredential | TokenCredential,
  options: WidgetManagerClientOptions = {},
): WidgetManagerContext {
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
