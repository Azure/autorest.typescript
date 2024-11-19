// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureAIContext } from "../../api/azureAIContext.js";
import { list, get, listSecrets } from "../../api/connections/index.js";
import {
  ConnectionsListOptionalParams,
  ConnectionsGetOptionalParams,
  ConnectionsListSecretsOptionalParams,
} from "../../api/options.js";
import {
  ConnectionsListResponse,
  ConnectionsListSecretsResponse,
} from "../../models/models.js";

/** Interface representing a Connections operations. */
export interface ConnectionsOperations {
  /** List the details of all the connections (not including their credentials) */
  list: (
    options?: ConnectionsListOptionalParams,
  ) => Promise<ConnectionsListResponse>;
  /** Get the details of a single connection, without credentials. */
  get: (
    connectionName: string,
    options?: ConnectionsGetOptionalParams,
  ) => Promise<ConnectionsListSecretsResponse>;
  /** Get the details of a single connection, including credentials (if available). */
  listSecrets: (
    connectionName: string,
    ignored: string,
    options?: ConnectionsListSecretsOptionalParams,
  ) => Promise<ConnectionsListSecretsResponse>;
}

export function getConnections(context: AzureAIContext) {
  return {
    list: (options?: ConnectionsListOptionalParams) => list(context, options),
    get: (connectionName: string, options?: ConnectionsGetOptionalParams) =>
      get(context, connectionName, options),
    listSecrets: (
      connectionName: string,
      ignored: string,
      options?: ConnectionsListSecretsOptionalParams,
    ) => listSecrets(context, connectionName, ignored, options),
  };
}

export function getConnectionsOperations(
  context: AzureAIContext,
): ConnectionsOperations {
  return {
    ...getConnections(context),
  };
}
