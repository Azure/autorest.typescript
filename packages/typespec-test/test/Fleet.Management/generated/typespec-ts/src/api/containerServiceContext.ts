// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { ContainerServiceContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface ContainerServiceClientOptions extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { ContainerServiceContext } from "../rest/index.js";

/** Azure Kubernetes Fleet Manager api client. */
export function createContainerService(
  credential: TokenCredential,
  options: ContainerServiceClientOptions = {},
): ContainerServiceContext {
  const clientContext = getClient(credential, options);
  return clientContext;
}
