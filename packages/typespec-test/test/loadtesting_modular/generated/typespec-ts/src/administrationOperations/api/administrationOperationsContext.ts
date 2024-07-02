// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { AzureLoadTestingContext } from "../../rest/index.js";
import getClient from "../../rest/index.js";

/** Optional parameters for the client. */
export interface AdministrationOperationsClientOptions extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { AzureLoadTestingContext } from "../../rest/index.js";

export function createAdministrationOperations(
  endpointParam: string,
  credential: TokenCredential,
  options: AdministrationOperationsClientOptions = {},
): AzureLoadTestingContext {
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
