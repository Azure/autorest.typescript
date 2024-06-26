// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientType } from "../models/models.js";
import { ClientOptions } from "@azure-rest/core-client";
import { ServiceContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface RenamedOperationClientOptions extends ClientOptions {}

export { ServiceContext } from "../rest/index.js";

export function createRenamedOperation(
  endpointParam: string,
  clientParam: ClientType,
  options: RenamedOperationClientOptions = {},
): ServiceContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-modular-api`
    : "azsdk-js-modular-api";

  const clientContext = getClient(endpointParam, clientParam, {
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
