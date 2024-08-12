// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "../src/networkAnalyticsClient.js";

async function dataProductsCatalogsListByResourceGroupMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproductscatalogs.listByResourceGroup(
    "aoiresourceGroupName",
  );
  console.log(result);
}

async function dataProductsCatalogsListByResourceGroupMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproductscatalogs.listByResourceGroup(
    "aoiresourceGroupName",
  );
  console.log(result);
}

async function main() {
  dataProductsCatalogsListByResourceGroupMaximumSetGen();
  dataProductsCatalogsListByResourceGroupMinimumSetGen();
}

main().catch(console.error);
