// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { StandardContext } from "../rest/index.js";
import getClient from "../rest/index.js";
import { ClientOptions } from "@azure-rest/core-client";

export { StandardContext } from "../rest/index.js";

/** Illustrates bodies templated with Azure Core with long-running operation */
export function createStandard(options: ClientOptions = {}): StandardContext {
  /**
   * FIXME
   */
  const clientContext = getClient(options);
  return clientContext;
}
