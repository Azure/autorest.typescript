// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { EventGridContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface EventGridClientOptions extends ClientOptions {}

export { EventGridContext } from "../rest/index.js";

/** Azure Messaging EventGrid Client */
export function createEventGrid(
  endpoint: string,
  credential: KeyCredential,
  options: EventGridClientOptions = {},
): EventGridContext {
  const clientContext = getClient(endpoint, credential, options);
  return clientContext;
}
