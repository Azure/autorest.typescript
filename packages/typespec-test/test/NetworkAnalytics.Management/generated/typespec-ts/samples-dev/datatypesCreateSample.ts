// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DefaultAzureCredential } from "@azure/identity";
import { NetworkAnalyticsClient } from "../src/networkAnalyticsClient.js";

/**
 * This sample demonstrates how to create data type resource.
 *
 * @summary create data type resource.
 * x-ms-original-file: 2023-11-15/DataTypes_Create_MaximumSet_Gen.json
 */
async function dataTypesCreateMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.datatypes.create(
    "aoiresourceGroupName",
    "dataproduct01",
    "datatypename",
    {
      properties: {
        provisioningState: "Succeeded",
        storageOutputRetention: 27,
        databaseCacheRetention: 23,
        databaseRetention: 6,
      },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to create data type resource.
 *
 * @summary create data type resource.
 * x-ms-original-file: 2023-11-15/DataTypes_Create_MinimumSet_Gen.json
 */
async function dataTypesCreateMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.datatypes.create(
    "aoiresourceGroupName",
    "dataproduct01",
    "datatypename",
    {},
  );
  console.log(result);
}

async function main() {
  dataTypesCreateMaximumSetGen();
  dataTypesCreateMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
