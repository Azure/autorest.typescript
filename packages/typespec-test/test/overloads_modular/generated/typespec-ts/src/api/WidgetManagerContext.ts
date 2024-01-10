// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { WidgetManagerContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface WidgetManagerClientOptions extends ClientOptions {}

export { WidgetManagerContext } from "../rest/index.js";

export function createWidgetManager(
  endpoint: string,
  credential: KeyCredential | TokenCredential,
  options: WidgetManagerClientOptions = {},
): WidgetManagerContext {
  const clientContext = getClient(endpoint, credential, options);
  return clientContext;
}
