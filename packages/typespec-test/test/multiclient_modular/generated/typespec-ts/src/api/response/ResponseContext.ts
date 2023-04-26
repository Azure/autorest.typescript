// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client } from "../../rest/response/index.js";
import { createClient } from "../../rest/response/index.js";
import { ClientOptions } from "../../common/interfaces.js";

export { Client } from "../../rest/response/index.js";

/** Azure Messaging EventGrid Client */
export function createResponse(
  endpoint: string,
  options: ClientOptions = {}
): Client.ResponseContext {
  const baseUrl = endpoint;
  const clientContext = createClient(baseUrl, options);
  return clientContext;
}
