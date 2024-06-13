// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { ScVmmContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface ScVmmClientOptions extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { ScVmmContext } from "../rest/index.js";

/** The Microsoft.ScVmm Rest API spec. */
export function createScVmm(
  credential: TokenCredential,
  options: ScVmmClientOptions = {},
): ScVmmContext {
  const clientContext = getClient(credential, options);
  return clientContext;
}
