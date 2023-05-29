// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { EventGridContext } from "../rest/index.js";
import { ClientOptions } from "@azure-rest/core-client";
import { KeyCredential } from "@azure/core-auth";
import getClient from "../rest/index.js";

export { EventGridContext } from "../rest/index.js";

export interface EventGridClientOptions extends ClientOptions {}

/** Azure Messaging EventGrid Client */
export function createEventGrid(
  endpoint: string,
  credential: KeyCredential,
  options: EventGridClientOptions = {}
): EventGridContext {
  const baseUrl = endpoint;
  options.credentials = {
    ...options.credentials,
    apiKeyHeaderName: "SharedAccessKey",
  };
  const clientContext = getClient(baseUrl, credential, options);
  return clientContext;
}
