// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "../src/networkAnalyticsClient.js";

/**
 * This sample demonstrates how to retrieve data type resource.
 *
 * @summary retrieve data type resource.
 * x-ms-original-file: 2023-11-15/DataProductsCatalogs_Get_MaximumSet_Gen.json
 */
async function dataProductsCatalogsGetMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproductscatalogs.get("aoiresourceGroupName");
  console.log(result);
}

/**
 * This sample demonstrates how to retrieve data type resource.
 *
 * @summary retrieve data type resource.
 * x-ms-original-file: 2023-11-15/DataProductsCatalogs_Get_MinimumSet_Gen.json
 */
async function dataProductsCatalogsGetMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproductscatalogs.get("aoiresourceGroupName");
  console.log(result);
}

async function main() {
  dataProductsCatalogsGetMaximumSetGen();
  dataProductsCatalogsGetMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
