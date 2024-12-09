// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  NetworkAnalyticsContext as Client,
  GenerateStorageContainerSasTokenGenerateStorageContainerSasTokenOptionalParams,
} from "../index.js";
import {
  ContainerSaS,
  containerSaSSerializer,
  ContainerSasToken,
  containerSasTokenDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { json } from "stream/consumers";

export function _generateStorageContainerSasTokenSend(
  context: Client,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  body: ContainerSaS,
  options: GenerateStorageContainerSasTokenGenerateStorageContainerSasTokenOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/dataTypes/{dataTypeName}/generateStorageContainerSasToken",
      subscriptionId,
      resourceGroupName,
      dataProductName,
      dataTypeName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        generateStorageContainerSasTokenContentType: application / json,
        generateStorageContainerSasTokenContentType: application / json,
      },
      body: containerSaSSerializer(body),
    });
}

export async function _generateStorageContainerSasTokenDeserialize(
  result: PathUncheckedResponse,
): Promise<ContainerSasToken> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return containerSasTokenDeserializer(result.body);
}

/** Generate sas token for storage container. */
export async function generateStorageContainerSasToken(
  context: Client,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  body: ContainerSaS,
  options: GenerateStorageContainerSasTokenGenerateStorageContainerSasTokenOptionalParams = {
    requestOptions: {},
  },
): Promise<ContainerSasToken> {
  const result = await _generateStorageContainerSasTokenSend(
    context,
    resourceGroupName,
    dataProductName,
    dataTypeName,
    body,
    options,
  );
  return _generateStorageContainerSasTokenDeserialize(result);
}
