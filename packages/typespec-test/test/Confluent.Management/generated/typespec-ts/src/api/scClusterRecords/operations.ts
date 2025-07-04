// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ConfluentContext as Client } from "../index.js";
import {
  APIKeyRecord,
  apiKeyRecordDeserializer,
  resourceProviderDefaultErrorResponseDeserializer,
  CreateAPIKeyModel,
  createAPIKeyModelSerializer,
} from "../../models/models.js";
import { SCClusterRecordsCreateAPIKeyOptionalParams } from "./options.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _createAPIKeySend(
  context: Client,
  resourceGroupName: string,
  organizationName: string,
  environmentId: string,
  clusterId: string,
  body: CreateAPIKeyModel,
  options: SCClusterRecordsCreateAPIKeyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}/environments/{environmentId}/clusters/{clusterId}/createAPIKey{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      organizationName: organizationName,
      environmentId: environmentId,
      clusterId: clusterId,
      "api%2Dversion": context.apiVersion,
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
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: createAPIKeyModelSerializer(body),
    });
}

export async function _createAPIKeyDeserialize(
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

/** Creates API key for a schema registry Cluster ID or Kafka Cluster ID under a environment */
export async function createAPIKey(
  context: Client,
  resourceGroupName: string,
  organizationName: string,
  environmentId: string,
  clusterId: string,
  body: CreateAPIKeyModel,
  options: SCClusterRecordsCreateAPIKeyOptionalParams = { requestOptions: {} },
): Promise<APIKeyRecord> {
  const result = await _createAPIKeySend(
    context,
    resourceGroupName,
    organizationName,
    environmentId,
    clusterId,
    body,
    options,
  );
  return _createAPIKeyDeserialize(result);
}
