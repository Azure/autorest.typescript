// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { ContentSafetyContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface ContentSafetyClientOptions extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { ContentSafetyContext } from "../rest/index.js";

/** Analyze harmful content */
export function createContentSafety(
  endpointParam: string,
  credential: KeyCredential | TokenCredential,
  options: ContentSafetyClientOptions = {},
): ContentSafetyContext {
  const clientContext = getClient(endpointParam, credential, options);
  return clientContext;
}
