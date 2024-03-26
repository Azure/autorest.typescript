// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { FaceContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface FaceClientOptions extends ClientOptions {}

export { FaceContext } from "../rest/index.js";

export function createFace(
  endpoint: string,
  credential: KeyCredential,
  apiVersion: string,
  options: FaceClientOptions = {},
): FaceContext {
  const clientContext = getClient(endpoint, credential, apiVersion, options);
  return clientContext;
}
