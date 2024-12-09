// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsContext } from "../../api/networkAnalyticsContext.js";
import { RotateKeyRotateKeyOptionalParams } from "../../api/options.js";
import { rotateKey } from "../../api/rotateKey/index.js";
import { KeyVaultInfo } from "../../models/models.js";

/** Interface representing a RotateKey operations. */
export interface RotateKeyOperations {
  /** Initiate key rotation on Data Product. */
  rotateKey: (
    resourceGroupName: string,
    dataProductName: string,
    body: KeyVaultInfo,
    options?: RotateKeyRotateKeyOptionalParams,
  ) => Promise<void>;
}

export function getRotateKey(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
) {
  return {
    rotateKey: (
      resourceGroupName: string,
      dataProductName: string,
      body: KeyVaultInfo,
      options?: RotateKeyRotateKeyOptionalParams,
    ) => rotateKey(context, resourceGroupName, dataProductName, body, options),
  };
}

export function getRotateKeyOperations(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
): RotateKeyOperations {
  return {
    ...getRotateKey(context, subscriptionId),
  };
}
