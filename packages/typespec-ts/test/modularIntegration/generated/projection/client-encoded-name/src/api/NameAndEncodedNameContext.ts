// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { NameAndEncodedNameClientContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface NameAndEncodedNameClientOptions extends ClientOptions {}

export { NameAndEncodedNameClientContext } from "../rest/index.js";

/** Projection */
export function createNameAndEncodedName(
  options: NameAndEncodedNameClientOptions = {},
): NameAndEncodedNameClientContext {
  const clientContext = getClient(options);
  return clientContext;
}
