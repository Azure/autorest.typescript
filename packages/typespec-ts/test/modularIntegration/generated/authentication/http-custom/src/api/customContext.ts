// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { CustomContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface CustomClientOptions extends ClientOptions {}

export { CustomContext } from "../rest/index.js";

/** Illustrates clients generated with generic HTTP auth. */
export function createCustom(
  credential: KeyCredential,
  options: CustomClientOptions = {},
): CustomContext {
  const clientContext = getClient(credential, options);
  return clientContext;
}
