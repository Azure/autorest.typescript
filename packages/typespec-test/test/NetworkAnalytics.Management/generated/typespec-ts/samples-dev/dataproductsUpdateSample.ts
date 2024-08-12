// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "../src/networkAnalyticsClient.js";

async function dataProductsUpdateMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproducts.update(
    "aoiresourceGroupName",
    "dataproduct01",
    {} as any,
  );
  console.log(result);
}

async function main() {
  dataProductsUpdateMaximumSetGen();
}

main().catch(console.error);

async function dataProductsUpdateMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproducts.update(
    "aoiresourceGroupName",
    "dataproduct01",
    {} as any,
  );
  console.log(result);
}

async function main() {
  dataProductsUpdateMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
