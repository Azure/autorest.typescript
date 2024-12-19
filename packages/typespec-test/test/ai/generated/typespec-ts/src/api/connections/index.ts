// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AzureAIContext as Client,
  ConnectionsGetOptionalParams,
  ConnectionsListOptionalParams,
  ConnectionsListSecretsOptionalParams,
} from "../index.js";
import {
  ConnectionsListResponse,
  connectionsListResponseDeserializer,
  ConnectionsListSecretsResponse,
  connectionsListSecretsResponseDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listSecretsSend(
  context: Client,
  connectionName: string,
  ignored: string,
  options: ConnectionsListSecretsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/connections/{connectionName}/listsecrets", connectionName)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "application/json",
      headers: { accept: "application/json" },
      body: { ignored: ignored },
    });
}

export async function _listSecretsDeserialize(
  result: PathUncheckedResponse,
): Promise<ConnectionsListSecretsResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return connectionsListSecretsResponseDeserializer(result.body);
}

/** Get the details of a single connection, including credentials (if available). */
export async function listSecrets(
  context: Client,
  connectionName: string,
  ignored: string,
  options: ConnectionsListSecretsOptionalParams = { requestOptions: {} },
): Promise<ConnectionsListSecretsResponse> {
  const result = await _listSecretsSend(
    context,
    connectionName,
    ignored,
    options,
  );
  return _listSecretsDeserialize(result);
}

export function _getSend(
  context: Client,
  connectionName: string,
  options: ConnectionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/connections/{connectionName}", connectionName)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json" },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<ConnectionsListSecretsResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return connectionsListSecretsResponseDeserializer(result.body);
}

/** Get the details of a single connection, without credentials. */
export async function get(
  context: Client,
  connectionName: string,
  options: ConnectionsGetOptionalParams = { requestOptions: {} },
): Promise<ConnectionsListSecretsResponse> {
  const result = await _getSend(context, connectionName, options);
  return _getDeserialize(result);
}

export function _listSend(
  context: Client,
  options: ConnectionsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/connections")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json" },
      queryParameters: {
        category: options?.category,
        includeAll: options?.includeAll,
        target: options?.target,
      },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<ConnectionsListResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return connectionsListResponseDeserializer(result.body);
}

/** List the details of all the connections (not including their credentials) */
export async function list(
  context: Client,
  options: ConnectionsListOptionalParams = { requestOptions: {} },
): Promise<ConnectionsListResponse> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}
