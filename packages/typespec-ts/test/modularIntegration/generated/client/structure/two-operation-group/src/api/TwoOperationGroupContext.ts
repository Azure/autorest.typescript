// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientType } from "../models/models.js";
import { ClientOptions } from "@azure-rest/core-client";
import { ServiceContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface TwoOperationGroupClientOptions extends ClientOptions {}

export { ServiceContext } from "../rest/index.js";

export function createTwoOperationGroup(
  endpoint: string,
  client: ClientType,
  options: TwoOperationGroupClientOptions = {},
): ServiceContext {
  const clientContext = getClient(endpoint, client, options);
  return clientContext;
}
