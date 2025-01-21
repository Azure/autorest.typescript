// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsApi } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete data product resource.
 *
 * @summary delete data product resource.
 * x-ms-original-file: 2023-11-15/DataProducts_Delete_MaximumSet_Gen.json
 */
async function dataProductsDeleteMaximumSetGen() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsApi(credential, subscriptionId);
  await client.dataProducts.delete("aoiresourceGroupName", "dataproduct01");
}

async function main() {
  await dataProductsDeleteMaximumSetGen();
}

main().catch(console.error);
