// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientType } from "../models/models.js";
import { ClientOptions } from "@azure-rest/core-client";
import { ServiceContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface ServiceClientOptions extends ClientOptions {}

export { ServiceContext } from "../rest/index.js";

/**
 * Test that we can use @client and @operationGroup decorators to customize client side code structure, such as:
 * 1. have everything as default.
 * 2. to rename client or operation group
 * 3. one client can have more than one operations groups
 * 4. split one interface into two clients
 * 5. have two clients with operations come from different interfaces
 * 6. have two clients with a hierarchy relation.
 */
export function createService(
  endpoint: string,
  client: ClientType,
  options: ServiceClientOptions = {},
): ServiceContext {
  const clientContext = getClient(endpoint, client, options);
  return clientContext;
}
