// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "../src/networkAnalyticsClient.js";

/**
 * This sample demonstrates how to list data catalog by subscription.
 *
 * @summary list data catalog by subscription.
 * x-ms-original-file: 2023-11-15/DataProductsCatalogs_ListBySubscription_MaximumSet_Gen.json
 */
async function dataProductsCatalogsListBySubscriptionMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproductscatalogs.listBySubscription();
  console.log(result);
}

/**
 * This sample demonstrates how to list data catalog by subscription.
 *
 * @summary list data catalog by subscription.
 * x-ms-original-file: 2023-11-15/DataProductsCatalogs_ListBySubscription_MinimumSet_Gen.json
 */
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
