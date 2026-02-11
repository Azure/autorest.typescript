// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createConnections, ConnectionsContext, ConnectionsOptionalParams } from "./api/index.js";
import {
  GetWorkspaceResponse,
  ListConnectionsResponse,
  GetConnectionResponse,
} from "../models/models.js";
import {
  getConnectionWithSecrets,
  getConnection,
  listConnections,
  getWorkspace,
} from "./api/operations.js";
import {
  GetConnectionWithSecretsOptionalParams,
  GetConnectionOptionalParams,
  ListConnectionsOptionalParams,
  GetWorkspaceOptionalParams,
} from "./api/options.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { ConnectionsOptionalParams } from "./api/connectionsContext.js";

export class Connections {
  private _client: ConnectionsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    subscriptionId: string,
    resourceGroupName: string,
    projectName: string,
    credential: TokenCredential,
    options: ConnectionsOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createConnections(
      endpointParam,
      subscriptionId,
      resourceGroupName,
      projectName,
      credential,
      { ...options, userAgentOptions: { userAgentPrefix } },
    );
    this.pipeline = this._client.pipeline;
  }

  /** Get the details of a single connection, including credentials (if available). */
  getConnectionWithSecrets(
    connectionName: string,
    ignored: string,
    options: GetConnectionWithSecretsOptionalParams = { requestOptions: {} },
  ): Promise<GetConnectionResponse> {
    return getConnectionWithSecrets(this._client, connectionName, ignored, options);
  }

  /** Get the details of a single connection, without credentials. */
  getConnection(
    connectionName: string,
    options: GetConnectionOptionalParams = { requestOptions: {} },
  ): Promise<GetConnectionResponse> {
    return getConnection(this._client, connectionName, options);
  }

  /** List the details of all the connections (not including their credentials) */
  listConnections(
    options: ListConnectionsOptionalParams = { requestOptions: {} },
  ): Promise<ListConnectionsResponse> {
    return listConnections(this._client, options);
  }

  /** Gets the properties of the specified machine learning workspace. */
  getWorkspace(
    options: GetWorkspaceOptionalParams = { requestOptions: {} },
  ): Promise<GetWorkspaceResponse> {
    return getWorkspace(this._client, options);
  }
}
