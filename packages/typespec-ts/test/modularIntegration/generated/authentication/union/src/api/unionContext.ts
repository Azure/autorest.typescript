// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { UnionContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface UnionClientOptions extends ClientOptions {}

export { UnionContext } from "../rest/index.js";

/** Illustrates clients generated with ApiKey and OAuth2 authentication. */
export function createUnion(
  credential: KeyCredential | TokenCredential,
  options: UnionClientOptions = {},
): UnionContext {
  const clientContext = getClient(credential, options);
  return clientContext;
}
