// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { MultipleContext } from "../rest/index.js";
import getClient from "../rest/index.js";
import { Versions } from "../models/models.js";

export interface MultipleClientOptions extends ClientOptions {
  apiVersion?: Versions;
}

export { MultipleContext } from "../rest/index.js";

export function createMultiple(
  endpointParam: string,
  options: MultipleClientOptions = {}
): MultipleContext {
  const clientContext = getClient(endpointParam, options);
  return clientContext;
}
