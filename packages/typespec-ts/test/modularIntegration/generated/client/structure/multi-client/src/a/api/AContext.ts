// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { ServiceContext } from "../../rest/index.js";
import getClient from "../../rest/index.js";
export { ServiceContext } from "../../rest/index.js";

export function createA(
  client: enum,
  options: AClientClientOptions = {}
): ServiceContext {
  const baseUrl = client;
  const clientContext = getClient(baseUrl, options);
  return clientContext;
}
