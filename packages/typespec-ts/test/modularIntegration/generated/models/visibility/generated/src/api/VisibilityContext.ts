// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { VisibilityContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface VisibilityClientOptions extends ClientOptions {}

export { VisibilityContext } from "../rest/index.js";

/** Illustrates models with visibility properties. */
export function createVisibility(
  options: VisibilityClientOptions = {}
): VisibilityContext {
  const clientContext = getClient(options);
  return clientContext;
}
