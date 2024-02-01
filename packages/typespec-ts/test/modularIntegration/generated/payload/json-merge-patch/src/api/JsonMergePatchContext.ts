// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { JsonMergePatchContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface JsonMergePatchClientOptions extends ClientOptions {}

export { JsonMergePatchContext } from "../rest/index.js";

/** Test for merge-patch+json content-type */
export function createJsonMergePatch(
  options: JsonMergePatchClientOptions = {},
): JsonMergePatchContext {
  const clientContext = getClient(options);
  return clientContext;
}
