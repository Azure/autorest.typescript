// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to retrieve data product resource.
 *
 * @summary retrieve data product resource.
 * x-ms-original-file: 2023-11-15/DataProducts_Get_MaximumSet_Gen.json
 */
async function dataProductsGetMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproducts.get(
    "aoiresourceGroupName",
    "dataproduct01",
  );
  console.log(result);
}

/**
 * This sample demonstrates how to retrieve data product resource.
 *
 * @summary retrieve data product resource.
 * x-ms-original-file: 2023-11-15/DataProducts_Get_MinimumSet_Gen.json
 */
async function dataProductsGetMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproducts.get(
    "aoiresourceGroupName",
    "dataproduct01",
  );
  console.log(result);
}

async function main() {
  dataProductsGetMaximumSetGen();
  dataProductsGetMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
