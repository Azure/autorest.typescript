// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureAIContext } from "../../api/azureAIContext.js";
import { listSecrets, get, list } from "../../api/connections/index.js";
import {
  ConnectionsListResponse,
  ConnectionsListSecretsResponse,
} from "../../models/models.js";
import {
  ConnectionsListSecretsOptionalParams,
  ConnectionsGetOptionalParams,
  ConnectionsListOptionalParams,
} from "../../api/options.js";

/** Interface representing a Connections operations. */
export interface ConnectionsOperations {
  /** Get the details of a single connection, including credentials (if available). */
  listSecrets: (
    connectionName: string,
    ignored: string,
    options?: ConnectionsListSecretsOptionalParams,
  ) => Promise<ConnectionsListSecretsResponse>;
  /** Get the details of a single connection, without credentials. */
  get: (
    connectionName: string,
    options?: ConnectionsGetOptionalParams,
  ) => Promise<ConnectionsListSecretsResponse>;
  /** List the details of all the connections (not including their credentials) */
  list: (
    options?: ConnectionsListOptionalParams,
  ) => Promise<ConnectionsListResponse>;
}

function _getConnections(context: AzureAIContext) {
  return {
    listSecrets: (
      connectionName: string,
      ignored: string,
      options?: ConnectionsListSecretsOptionalParams,
    ) => listSecrets(context, connectionName, ignored, options),
    get: (connectionName: string, options?: ConnectionsGetOptionalParams) =>
      get(context, connectionName, options),
    list: (options?: ConnectionsListOptionalParams) => list(context, options),
  };
}

export function getConnectionsOperations(
  context: AzureAIContext,
): ConnectionsOperations {
  return {
    ..._getConnections(context),
  };
}
