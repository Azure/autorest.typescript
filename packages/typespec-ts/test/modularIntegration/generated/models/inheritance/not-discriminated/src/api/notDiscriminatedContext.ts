// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { NotDiscriminatedContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface NotDiscriminatedClientOptions extends ClientOptions {}

export { NotDiscriminatedContext } from "../rest/index.js";

/** Illustrates not-discriminated inheritance model. */
export function createNotDiscriminated(
  options: NotDiscriminatedClientOptions = {},
): NotDiscriminatedContext {
  const clientContext = getClient(options);
  return clientContext;
}
