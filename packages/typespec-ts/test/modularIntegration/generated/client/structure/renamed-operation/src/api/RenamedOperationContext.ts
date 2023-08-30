// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientType } from "../models/models.js";
import { ClientOptions } from "@azure-rest/core-client";
import { ServiceContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface RenamedOperationClientOptions extends ClientOptions {}

export { ServiceContext } from "../rest/index.js";

export function createRenamedOperation(
  client: ClientType,
  options: RenamedOperationClientOptions = {}
): ServiceContext {
  const baseUrl = client;
  const clientContext = getClient(baseUrl, options);
  return clientContext;
}
