// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { Versions } from "../models/models.js";
import { ClientOptions } from "@azure-rest/core-client";
import { FaceContext } from "../../rest/index.js";
import getClient from "../../rest/index.js";

/** Optional parameters for the client. */
export interface FaceClientOptions extends ClientOptions {
  /** API Version */
  apiVersion?: Versions;
}

export { FaceContext } from "../../rest/index.js";

export function createFace(
  endpointParam: string,
  credential: KeyCredential | TokenCredential,
  options: FaceClientOptions = {},
): FaceContext {
  const clientContext = getClient(endpointParam, credential, options);
  return clientContext;
}
