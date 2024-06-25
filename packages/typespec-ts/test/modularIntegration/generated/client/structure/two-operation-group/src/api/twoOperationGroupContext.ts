// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientType } from "../models/models.js";
import { ClientOptions } from "@azure-rest/core-client";
import { ServiceContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface TwoOperationGroupClientOptions extends ClientOptions {}

export { ServiceContext } from "../rest/index.js";

export function createTwoOperationGroup(
  endpointParam: string,
  clientParam: ClientType,
  options: TwoOperationGroupClientOptions = {},
): ServiceContext {
  const clientContext = getClient(endpointParam, clientParam, {
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-client-structure-twoopgroup-api/1.0.0",
    },
    ...options,
  });
  return clientContext;
}
