// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsApi } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create data product resource.
 *
 * @summary create data product resource.
 * x-ms-original-file: 2023-11-15/DataProducts_Create_MaximumSet_Gen.json
 */
async function dataProductsCreateMaximumSetGen(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsApi(credential, subscriptionId);
  const result = await client.dataProducts.create("aoiresourceGroupName", "dataproduct01", {
    properties: {},
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/subid/resourceGroups/resourceGroupName/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1":
          {},
      },
    },
    tags: { userSpecifiedKeyName: "userSpecifiedKeyValue" },
    location: "eastus",
  });
  console.log(result);
}

async function main(): Promise<void> {
  await dataProductsCreateMaximumSetGen();
}

main().catch(console.error);
