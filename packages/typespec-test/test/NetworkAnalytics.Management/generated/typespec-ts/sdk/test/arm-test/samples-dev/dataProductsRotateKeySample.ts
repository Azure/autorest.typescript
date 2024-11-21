// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to initiate key rotation on Data Product.
 *
 * @summary initiate key rotation on Data Product.
 * x-ms-original-file: 2023-11-15/DataProducts_RotateKey_MaximumSet_Gen.json
 */
async function dataProductsRotateKeyMaximumSetGen() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  await client.dataProducts.rotateKey("aoiresourceGroupName", "dataproduct01", {
    keyVaultUrl: "https://myKeyVault.vault.azure.net",
  });
}

async function main() {
  dataProductsRotateKeyMaximumSetGen();
}

main().catch(console.error);
