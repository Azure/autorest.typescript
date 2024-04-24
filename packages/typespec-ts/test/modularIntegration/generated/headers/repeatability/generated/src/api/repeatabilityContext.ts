// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { RepeatabilityContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface RepeatabilityClientOptions extends ClientOptions {}

export { RepeatabilityContext } from "../rest/index.js";

/** Illustrates OASIS repeatability headers */
export function createRepeatability(
  options: RepeatabilityClientOptions = {},
): RepeatabilityContext {
  const clientContext = getClient(options);
  return clientContext;
}
