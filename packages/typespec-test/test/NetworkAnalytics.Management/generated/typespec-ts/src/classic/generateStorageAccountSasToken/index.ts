// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsContext } from "../../api/networkAnalyticsContext.js";
import { generateStorageAccountSasToken } from "../../api/generateStorageAccountSasToken/index.js";
import { AccountSas, AccountSasToken } from "../../models/models.js";
import { GenerateStorageAccountSasTokenGenerateStorageAccountSasTokenOptionalParams } from "../../api/options.js";

/** Interface representing a GenerateStorageAccountSasToken operations. */
export interface GenerateStorageAccountSasTokenOperations {
  /** Generate sas token for storage account. */
  generateStorageAccountSasToken: (
    resourceGroupName: string,
    dataProductName: string,
    body: AccountSas,
    options?: GenerateStorageAccountSasTokenGenerateStorageAccountSasTokenOptionalParams,
  ) => Promise<AccountSasToken>;
}

export function getGenerateStorageAccountSasToken(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
) {
  return {
    generateStorageAccountSasToken: (
      resourceGroupName: string,
      dataProductName: string,
      body: AccountSas,
      options?: GenerateStorageAccountSasTokenGenerateStorageAccountSasTokenOptionalParams,
    ) =>
      generateStorageAccountSasToken(
        context,
        resourceGroupName,
        dataProductName,
        body,
        options,
      ),
  };
}

export function getGenerateStorageAccountSasTokenOperations(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
): GenerateStorageAccountSasTokenOperations {
  return {
    ...getGenerateStorageAccountSasToken(context, subscriptionId),
  };
}
