// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to retrieve data type resource.
 *
 * @summary retrieve data type resource.
 * x-ms-original-file: 2023-11-15/DataProductsCatalogs_Get_MaximumSet_Gen.json
 */
async function dataProductsCatalogsGetMaximumSetGen() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataProductsCatalogs.get("aoiresourceGroupName");
  console.log(result);
}

async function main() {
  dataProductsCatalogsGetMaximumSetGen();
}

main().catch(console.error);
