// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientType } from "../models/models.js";
import { ClientOptions } from "@azure-rest/core-client";
import { ServiceContext } from "../../rest/index.js";
import getClient from "../../rest/index.js";

/** Optional parameters for the client. */
export interface AClientOptions extends ClientOptions {}

export { ServiceContext } from "../../rest/index.js";

export function createA(
  endpointParam: string,
  clientParam: ClientType,
  options: AClientOptions = {},
): ServiceContext {
  const clientContext = getClient(endpointParam, clientParam, options);
  return clientContext;
}
