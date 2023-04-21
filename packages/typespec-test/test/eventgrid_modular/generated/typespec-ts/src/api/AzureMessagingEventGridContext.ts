// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureMessagingEventGridContext } from "../rest/index.js";
import { AzureKeyCredential } from "@azure/core-auth";
import { TokenCredential } from "@azure/core-auth";
import getClient from "../rest/index.js";
import { ClientOptions } from "../common/interfaces.js";

export { AzureMessagingEventGridContext } from "../rest/index.js";

/** Azure Messaging EventGrid Client */
export function createAzureMessagingEventGrid(
  endpoint: string,
  credential: AzureKeyCredential | TokenCredential,
  options: ClientOptions = {}
): AzureMessagingEventGridContext {
  const baseUrl = endpoint;
  const clientContext = getClient(baseUrl, credential, options);
  return clientContext;
}
