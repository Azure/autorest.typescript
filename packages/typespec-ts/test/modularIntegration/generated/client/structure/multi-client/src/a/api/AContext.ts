// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientType } from "../models/models.js";
import { ClientOptions } from "@azure-rest/core-client";
import { ServiceContext } from "../../rest/index.js";
import getClient from "../../rest/index.js";

export interface AClientOptions extends ClientOptions {}

export { ServiceContext } from "../../rest/index.js";

export function createA(
  endpoint: string,
  client: ClientType,
  options: AClientOptions = {},
): ServiceContext {
  const clientContext = getClient(endpoint, client, options);
  return clientContext;
}
