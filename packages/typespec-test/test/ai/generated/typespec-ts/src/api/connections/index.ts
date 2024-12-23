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
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listSend(
  context: Client,
  options: ConnectionsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/connections{?api-version,category,includeAll,target}",
    {
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
    .get({ ...operationOptionsToRequestParameters(options) });
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

export function _getSend(
  context: Client,
  connectionName: string,
  options: ConnectionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/connections/{connectionName}{?api-version}",
    {
      connectionName: connectionName,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({ ...operationOptionsToRequestParameters(options) });
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

export function _listSecretsSend(
  context: Client,
  connectionName: string,
  ignored: string,
  options: ConnectionsListSecretsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/connections/{connectionName}/listsecrets{?api-version}",
    {
      connectionName: connectionName,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
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
