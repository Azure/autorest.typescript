// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  NetworkAnalyticsContext as Client,
  GenerateStorageAccountSasTokenGenerateStorageAccountSasTokenOptionalParams,
} from "../index.js";
import {
  AccountSas,
  accountSasSerializer,
  AccountSasToken,
  accountSasTokenDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { json } from "stream/consumers";

export function _generateStorageAccountSasTokenSend(
  context: Client,
  resourceGroupName: string,
  dataProductName: string,
  body: AccountSas,
  options: GenerateStorageAccountSasTokenGenerateStorageAccountSasTokenOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/generateStorageAccountSasToken",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        generateStorageAccountSasTokenContentType: application / json,
        generateStorageAccountSasTokenContentType: application / json,
      },
      body: accountSasSerializer(body),
    });
}

export async function _generateStorageAccountSasTokenDeserialize(
  result: PathUncheckedResponse,
): Promise<AccountSasToken> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return accountSasTokenDeserializer(result.body);
}

/** Generate sas token for storage account. */
export async function generateStorageAccountSasToken(
  context: Client,
  resourceGroupName: string,
  dataProductName: string,
  body: AccountSas,
  options: GenerateStorageAccountSasTokenGenerateStorageAccountSasTokenOptionalParams = {
    requestOptions: {},
  },
): Promise<AccountSasToken> {
  const result = await _generateStorageAccountSasTokenSend(
    context,
    resourceGroupName,
    dataProductName,
    body,
    options,
  );
  return _generateStorageAccountSasTokenDeserialize(result);
}
