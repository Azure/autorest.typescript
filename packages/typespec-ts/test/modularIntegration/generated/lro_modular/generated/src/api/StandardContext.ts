// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { StandardContext } from "../rest/index.js";
import { ClientOptions } from "@azure-rest/core-client";
import getClient from "../rest/index.js";

export { StandardContext } from "../rest/index.js";

export interface StandardClientOptions extends ClientOptions {}

/** Illustrates bodies templated with Azure Core with long-running operation */
export function createStandard(
  options: StandardClientOptions = {}
): StandardContext {
  const clientContext = getClient(options);
  return clientContext;
}
