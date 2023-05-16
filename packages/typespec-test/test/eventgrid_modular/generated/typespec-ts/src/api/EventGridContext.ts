// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { EventGridContext } from "../rest/index.js";
import { AzureKeyCredential } from "@azure/core-auth";
import getClient from "../rest/index.js";
import { ClientOptions } from "../common/interfaces.js";

export { EventGridContext } from "../rest/index.js";

/** Azure Messaging EventGrid Client */
export function createEventGrid(
  endpoint: string,
  credential: AzureKeyCredential,
  options: ClientOptions = {}
): EventGridContext {
  const baseUrl = endpoint;
  options.credentials = {
    ...options.credentials,
    apiKeyHeaderName: "SharedAccessKey",
  };
  const clientContext = getClient(baseUrl, credential, options);
  return clientContext;
}
