// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { TodoContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface TodoClientOptions extends ClientOptions {}

export { TodoContext } from "../rest/index.js";

export function createTodo(
  endpoint: string,
  credential: KeyCredential,
  options: TodoClientOptions = {},
): TodoContext {
  const clientContext = getClient(endpoint, credential, options);
  return clientContext;
}
