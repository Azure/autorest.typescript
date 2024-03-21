// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { StandardContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface StandardClientOptions extends ClientOptions {}

export { StandardContext } from "../rest/index.js";

/** Illustrates bodies templated with Azure Core with long-running operation */
export function createStandard(
  options: StandardClientOptions = {},
): StandardContext {
  const clientContext = getClient(options);
  return clientContext;
}
