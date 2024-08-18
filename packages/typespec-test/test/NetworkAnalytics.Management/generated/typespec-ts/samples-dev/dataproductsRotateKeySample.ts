// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DefaultAzureCredential } from "@azure/identity";
import { NetworkAnalyticsClient } from "../src/networkAnalyticsClient.js";

/**
 * This sample demonstrates how to initiate key rotation on Data Product.
 *
 * @summary initiate key rotation on Data Product.
 * x-ms-original-file: 2023-11-15/DataProducts_RotateKey_MaximumSet_Gen.json
 */
async function dataProductsRotateKeyMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproducts.rotateKey(
    "aoiresourceGroupName",
    "dataproduct01",
    { keyVaultUrl: "https://myKeyVault.vault.azure.net" },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to initiate key rotation on Data Product.
 *
 * @summary initiate key rotation on Data Product.
 * x-ms-original-file: 2023-11-15/DataProducts_RotateKey_MinimumSet_Gen.json
 */
async function dataProductsRotateKeyMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproducts.rotateKey(
    "aoiresourceGroupName",
    "dataproduct01",
    { keyVaultUrl: "https://myKeyVault.vault.azure.net" },
  );
  console.log(result);
}

async function main() {
  dataProductsRotateKeyMaximumSetGen();
  dataProductsRotateKeyMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
