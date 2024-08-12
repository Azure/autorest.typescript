// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "../src/networkAnalyticsClient.js";

async function dataProductsCatalogsListBySubscriptionMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproductscatalogs.listBySubscription();
  console.log(result);
}

async function dataProductsCatalogsListBySubscriptionMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproductscatalogs.listBySubscription();
  console.log(result);
}

async function main() {
  dataProductsCatalogsListBySubscriptionMaximumSetGen();
  dataProductsCatalogsListBySubscriptionMinimumSetGen();
}

main().catch(console.error);
