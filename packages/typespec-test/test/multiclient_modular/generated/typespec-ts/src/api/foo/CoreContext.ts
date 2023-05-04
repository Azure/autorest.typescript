// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client } from "../../rest/core/index.js";
import { createClient } from "../../rest/core/index.js";
import { ClientOptions } from "../../common/interfaces.js";

export { Client } from "../../rest/core/index.js";

/** Azure Messaging EventGrid Client */
export function createCore(
  endpoint: string,
  options: ClientOptions = {}
): Client.CoreContext {
  const baseUrl = endpoint;
  const clientContext = createClient(baseUrl, options);
  return clientContext;
}
