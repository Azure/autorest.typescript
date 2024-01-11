// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { MultipleContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface MultipleClientOptions extends ClientOptions {}

export { MultipleContext } from "../rest/index.js";

export function createMultiple(
  endpoint: string,
  options: MultipleClientOptions = {},
): MultipleContext {
  const clientContext = getClient(endpoint, options);
  return clientContext;
}
