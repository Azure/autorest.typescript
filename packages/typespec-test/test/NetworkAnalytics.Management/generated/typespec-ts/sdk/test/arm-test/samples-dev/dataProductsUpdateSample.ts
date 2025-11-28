// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsApi } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update data product resource.
 *
 * @summary update data product resource.
 * x-ms-original-file: 2023-11-15/DataProducts_Update_MaximumSet_Gen.json
 */
async function dataProductsUpdateMaximumSetGen(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsApi(credential, subscriptionId);
  const result = await client.dataProducts.update("aoiresourceGroupName", "dataproduct01", {
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/subid/resourceGroups/resourceGroupName/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1":
          {},
      },
    },
    tags: { userSpecifiedKeyName: "userSpecifiedKeyValue" },
    properties: {},
  });
  console.log(result);
}

async function main(): Promise<void> {
  await dataProductsUpdateMaximumSetGen();
}

main().catch(console.error);
