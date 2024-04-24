// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { PageableContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface PageableClientOptions extends ClientOptions {}

export { PageableContext } from "../rest/index.js";

/** Test describing pageable. */
export function createPageable(
  options: PageableClientOptions = {},
): PageableContext {
  const clientContext = getClient(options);
  return clientContext;
}
