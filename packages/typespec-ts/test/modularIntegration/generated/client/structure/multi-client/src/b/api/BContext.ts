// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientType } from "../models/models.js";
import { ClientOptions } from "@azure-rest/core-client";
import { ServiceContext } from "../../rest/index.js";
import getClient from "../../rest/index.js";

export interface BClientOptions extends ClientOptions {}

export { ServiceContext } from "../../rest/index.js";

export function createB(
  client: ClientType,
  options: BClientOptions = {}
): ServiceContext {
  const baseUrl = client;
  const clientContext = getClient(baseUrl, options);
  return clientContext;
}
