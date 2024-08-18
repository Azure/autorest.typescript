// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "../src/networkAnalyticsClient.js";

/**
 * This sample demonstrates how to update data product resource.
 *
 * @summary update data product resource.
 * x-ms-original-file: 2023-11-15/DataProducts_Update_MaximumSet_Gen.json
 */
async function dataProductsUpdateMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproducts.update(
    "aoiresourceGroupName",
    "dataproduct01",
    {
      identity: {
        type: "UserAssigned",
        userAssignedIdentities: {
          "/subscriptions/subid/resourceGroups/resourceGroupName/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1":
            {},
        },
      },
      tags: { userSpecifiedKeyName: "userSpecifiedKeyValue" },
      properties: {
        owners: ["abc@micros.com", "def@micros.com"],
        purviewAccount: "testpurview",
        purviewCollection: "134567890",
        privateLinksEnabled: "Disabled",
        currentMinorVersion: "1.0.1",
      },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to update data product resource.
 *
 * @summary update data product resource.
 * x-ms-original-file: 2023-11-15/DataProducts_Update_MinimumSet_Gen.json
 */
async function dataProductsUpdateMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproducts.update(
    "aoiresourceGroupName",
    "dataproduct01",
    {},
  );
  console.log(result);
}

async function main() {
  dataProductsUpdateMaximumSetGen();
  dataProductsUpdateMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
