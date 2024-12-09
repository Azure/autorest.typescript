// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  NetworkAnalyticsContext as Client,
  RotateKeyRotateKeyOptionalParams,
} from "../index.js";
import { KeyVaultInfo, keyVaultInfoSerializer } from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { json } from "stream/consumers";

export function _rotateKeySend(
  context: Client,
  resourceGroupName: string,
  dataProductName: string,
  body: KeyVaultInfo,
  options: RotateKeyRotateKeyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/rotateKey",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        rotateKeyContentType: application / json,
        rotateKeyContentType: application / json,
      },
      body: keyVaultInfoSerializer(body),
    });
}

export async function _rotateKeyDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Initiate key rotation on Data Product. */
export async function rotateKey(
  context: Client,
  resourceGroupName: string,
  dataProductName: string,
  body: KeyVaultInfo,
  options: RotateKeyRotateKeyOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _rotateKeySend(
    context,
    resourceGroupName,
    dataProductName,
    body,
    options,
  );
  return _rotateKeyDeserialize(result);
}
