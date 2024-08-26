// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list data catalog by resource group.
 *
 * @summary list data catalog by resource group.
 * x-ms-original-file: 2023-11-15/DataProductsCatalogs_ListByResourceGroup_MaximumSet_Gen.json
 */
async function dataProductsCatalogsListByResourceGroupMaximumSetGen() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.dataProductsCatalogs.listByResourceGroup(
    "aoiresourceGroupName",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  dataProductsCatalogsListByResourceGroupMaximumSetGen();
}

main().catch(console.error);
