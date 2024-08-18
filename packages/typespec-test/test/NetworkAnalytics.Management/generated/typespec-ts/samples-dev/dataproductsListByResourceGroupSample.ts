// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "../src/networkAnalyticsClient.js";

/**
 * This sample demonstrates how to list data products by resource group.
 *
 * @summary list data products by resource group.
 * x-ms-original-file: 2023-11-15/DataProducts_ListByResourceGroup_MaximumSet_Gen.json
 */
async function dataProductsListByResourceGroupMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproducts.listByResourceGroup(
    "aoiresourceGroupName",
  );
  console.log(result);
}

/**
 * This sample demonstrates how to list data products by resource group.
 *
 * @summary list data products by resource group.
 * x-ms-original-file: 2023-11-15/DataProducts_ListByResourceGroup_MinimumSet_Gen.json
 */
async function dataProductsListByResourceGroupMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproducts.listByResourceGroup(
    "aoiresourceGroupName",
  );
  console.log(result);
}

async function main() {
  dataProductsListByResourceGroupMaximumSetGen();
  dataProductsListByResourceGroupMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
