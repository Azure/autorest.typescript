// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "../src/networkAnalyticsClient.js";

/**
 * This sample demonstrates how to delete data product resource.
 *
 * @summary delete data product resource.
 * x-ms-original-file: 2023-11-15/DataProducts_Delete_MaximumSet_Gen.json
 */
async function dataProductsDeleteMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproducts.delete(
    "aoiresourceGroupName",
    "dataproduct01",
  );
  console.log(result);
}

/**
 * This sample demonstrates how to delete data product resource.
 *
 * @summary delete data product resource.
 * x-ms-original-file: 2023-11-15/DataProducts_Delete_MinimumSet_Gen.json
 */
async function dataProductsDeleteMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproducts.delete(
    "aoiresourceGroupName",
    "dataproduct01",
  );
  console.log(result);
}

async function main() {
  dataProductsDeleteMaximumSetGen();
  dataProductsDeleteMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
