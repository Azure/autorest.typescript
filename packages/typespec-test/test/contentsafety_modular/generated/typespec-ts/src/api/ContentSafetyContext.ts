// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { ContentSafetyContext } from "../rest/index.js";
import { KeyCredential } from "@azure/core-auth";
import { TokenCredential } from "@azure/core-auth";
import getClient from "../rest/index.js";

export interface ContentSafetyClientOptions extends ClientOptions {}

export { ContentSafetyContext } from "../rest/index.js";

/** Analyze harmful content */
export function createContentSafety(
  endpoint: string,
  credential: KeyCredential | TokenCredential,
  options: ContentSafetyClientOptions = {}
): ContentSafetyContext {
  const baseUrl = endpoint;
  const clientContext = getClient(baseUrl, credential, options);
  return clientContext;
}
