// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../rest/index.js";
import { AzureKeyCredential } from "@azure/core-auth";
import { TokenCredential } from "@azure/core-auth";
import getClient from "../rest/index.js";
import { ClientOptions } from "../common/interfaces.js";

export { OpenAIContext } from "../rest/index.js";

/** Azure OpenAI APIs for completions and search */
export function createOpenAI(
  endpoint: string,
  credential: AzureKeyCredential | TokenCredential,
  options: ClientOptions = {}
): OpenAIContext {
  const baseUrl = endpoint;
  const clientContext = getClient(baseUrl, credential, options);
  return clientContext;
}
