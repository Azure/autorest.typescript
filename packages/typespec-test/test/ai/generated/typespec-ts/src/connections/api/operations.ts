// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ConnectionsContext as Client } from "./index.js";
import {
  GetWorkspaceResponse,
  getWorkspaceResponseDeserializer,
  ListConnectionsResponse,
  listConnectionsResponseDeserializer,
  GetConnectionResponse,
  getConnectionResponseDeserializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  GetConnectionWithSecretsOptionalParams,
  GetConnectionOptionalParams,
  ListConnectionsOptionalParams,
  GetWorkspaceOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getConnectionWithSecretsSend(
  context: Client,
  connectionName: string,
  ignored: string,
  options: GetConnectionWithSecretsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/connections/{connectionName}/listsecrets{?api%2Dversion}",
    {
      connectionName: connectionName,
      "api%2Dversion": context.apiVersion ?? "2024-07-01-preview",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: { ignored: ignored },
    });
}

export async function _getConnectionWithSecretsDeserialize(
  result: PathUncheckedResponse,
): Promise<GetConnectionResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return getConnectionResponseDeserializer(result.body);
}

/** Get the details of a single connection, including credentials (if available). */
export async function getConnectionWithSecrets(
  context: Client,
  connectionName: string,
  ignored: string,
  options: GetConnectionWithSecretsOptionalParams = { requestOptions: {} },
): Promise<GetConnectionResponse> {
  const result = await _getConnectionWithSecretsSend(context, connectionName, ignored, options);
  return _getConnectionWithSecretsDeserialize(result);
}

export function _getConnectionSend(
  context: Client,
  connectionName: string,
  options: GetConnectionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/connections/{connectionName}{?api%2Dversion}",
    {
      connectionName: connectionName,
      "api%2Dversion": context.apiVersion ?? "2024-07-01-preview",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getConnectionDeserialize(
  result: PathUncheckedResponse,
): Promise<GetConnectionResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return getConnectionResponseDeserializer(result.body);
}

/** Get the details of a single connection, without credentials. */
export async function getConnection(
  context: Client,
  connectionName: string,
  options: GetConnectionOptionalParams = { requestOptions: {} },
): Promise<GetConnectionResponse> {
  const result = await _getConnectionSend(context, connectionName, options);
  return _getConnectionDeserialize(result);
}

export function _listConnectionsSend(
  context: Client,
  options: ListConnectionsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/connections{?api%2Dversion,category,includeAll,target}",
    {
      "api%2Dversion": context.apiVersion ?? "2024-07-01-preview",
      category: options?.category,
      includeAll: options?.includeAll,
      target: options?.target,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _listConnectionsDeserialize(
  result: PathUncheckedResponse,
): Promise<ListConnectionsResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return listConnectionsResponseDeserializer(result.body);
}

/** List the details of all the connections (not including their credentials) */
export async function listConnections(
  context: Client,
  options: ListConnectionsOptionalParams = { requestOptions: {} },
): Promise<ListConnectionsResponse> {
  const result = await _listConnectionsSend(context, options);
  return _listConnectionsDeserialize(result);
}

export function _getWorkspaceSend(
  context: Client,
  options: GetWorkspaceOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{?api%2Dversion}",
    {
      "api%2Dversion": context.apiVersion ?? "2024-07-01-preview",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getWorkspaceDeserialize(
  result: PathUncheckedResponse,
): Promise<GetWorkspaceResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return getWorkspaceResponseDeserializer(result.body);
}

/** Gets the properties of the specified machine learning workspace. */
export async function getWorkspace(
  context: Client,
  options: GetWorkspaceOptionalParams = { requestOptions: {} },
): Promise<GetWorkspaceResponse> {
  const result = await _getWorkspaceSend(context, options);
  return _getWorkspaceDeserialize(result);
}
