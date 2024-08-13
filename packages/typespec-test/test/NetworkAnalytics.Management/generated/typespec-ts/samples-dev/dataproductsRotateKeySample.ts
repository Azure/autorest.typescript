// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "../src/networkAnalyticsClient.js";

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
