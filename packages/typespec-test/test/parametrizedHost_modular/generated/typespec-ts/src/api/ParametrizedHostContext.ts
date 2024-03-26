// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { ParametrizedHostContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface ParametrizedHostClientOptions extends ClientOptions {}

export { ParametrizedHostContext } from "../rest/index.js";

export function createParametrizedHost(
  host: string,
  subdomain: string,
  sufix: string,
  credential: TokenCredential,
  options: ParametrizedHostClientOptions = {},
): ParametrizedHostContext {
  const clientContext = getClient(host, subdomain, sufix, credential, options);
  return clientContext;
}
