// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsContext } from "../../api/networkAnalyticsContext.js";
import { generateStorageContainerSasToken } from "../../api/generateStorageContainerSasToken/index.js";
import { ContainerSaS, ContainerSasToken } from "../../models/models.js";
import { GenerateStorageContainerSasTokenGenerateStorageContainerSasTokenOptionalParams } from "../../api/options.js";

/** Interface representing a GenerateStorageContainerSasToken operations. */
export interface GenerateStorageContainerSasTokenOperations {
  /** Generate sas token for storage container. */
  generateStorageContainerSasToken: (
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    body: ContainerSaS,
    options?: GenerateStorageContainerSasTokenGenerateStorageContainerSasTokenOptionalParams,
  ) => Promise<ContainerSasToken>;
}

export function getGenerateStorageContainerSasToken(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
) {
  return {
    generateStorageContainerSasToken: (
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      body: ContainerSaS,
      options?: GenerateStorageContainerSasTokenGenerateStorageContainerSasTokenOptionalParams,
    ) =>
      generateStorageContainerSasToken(
        context,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        body,
        options,
      ),
  };
}

export function getGenerateStorageContainerSasTokenOperations(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
): GenerateStorageContainerSasTokenOperations {
  return {
    ...getGenerateStorageContainerSasToken(context, subscriptionId),
  };
}
