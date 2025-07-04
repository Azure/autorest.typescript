// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ConfluentContext as Client } from "../index.js";
import {
  APIKeyRecord,
  apiKeyRecordDeserializer,
  resourceProviderDefaultErrorResponseDeserializer,
} from "../../models/models.js";
import {
  OrganizationResourceAPIKeyActionsDeleteClusterAPIKeyOptionalParams,
  OrganizationResourceAPIKeyActionsGetClusterAPIKeyOptionalParams,
} from "./options.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _deleteClusterAPIKeySend(
  context: Client,
  resourceGroupName: string,
  organizationName: string,
  apiKeyId: string,
  options: OrganizationResourceAPIKeyActionsDeleteClusterAPIKeyOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/apiKeys/{apiKeyId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      organizationName: organizationName,
      apiKeyId: apiKeyId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _deleteClusterAPIKeyDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(
      result.body,
    );
    throw error;
  }

  return;
}

/** Deletes API key of a kafka or schema registry cluster */
export async function deleteClusterAPIKey(
  context: Client,
  resourceGroupName: string,
  organizationName: string,
  apiKeyId: string,
  options: OrganizationResourceAPIKeyActionsDeleteClusterAPIKeyOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _deleteClusterAPIKeySend(
    context,
    resourceGroupName,
    organizationName,
    apiKeyId,
    options,
  );
  return _deleteClusterAPIKeyDeserialize(result);
}

export function _getClusterAPIKeySend(
  context: Client,
  resourceGroupName: string,
  organizationName: string,
  apiKeyId: string,
  options: OrganizationResourceAPIKeyActionsGetClusterAPIKeyOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/apiKeys/{apiKeyId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      organizationName: organizationName,
      apiKeyId: apiKeyId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getClusterAPIKeyDeserialize(
  result: PathUncheckedResponse,
): Promise<APIKeyRecord> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(
      result.body,
    );
    throw error;
  }

  return apiKeyRecordDeserializer(result.body);
}

/** Get API key details of a kafka or schema registry cluster */
export async function getClusterAPIKey(
  context: Client,
  resourceGroupName: string,
  organizationName: string,
  apiKeyId: string,
  options: OrganizationResourceAPIKeyActionsGetClusterAPIKeyOptionalParams = {
    requestOptions: {},
  },
): Promise<APIKeyRecord> {
  const result = await _getClusterAPIKeySend(
    context,
    resourceGroupName,
    organizationName,
    apiKeyId,
    options,
  );
  return _getClusterAPIKeyDeserialize(result);
}
