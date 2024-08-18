// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DefaultAzureCredential } from "@azure/identity";
import { NetworkAnalyticsClient } from "../src/networkAnalyticsClient.js";

/**
 * This sample demonstrates how to update data type resource.
 *
 * @summary update data type resource.
 * x-ms-original-file: 2023-11-15/DataTypes_Update_MaximumSet_Gen.json
 */
async function dataTypesUpdateMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.datatypes.update(
    "aoiresourceGroupName",
    "dataproduct01",
    "datatypename",
    {
      properties: {
        storageOutputRetention: 30,
        databaseCacheRetention: 16,
        databaseRetention: 9,
      },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to update data type resource.
 *
 * @summary update data type resource.
 * x-ms-original-file: 2023-11-15/DataTypes_Update_MinimumSet_Gen.json
 */
async function dataTypesUpdateMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.datatypes.update(
    "aoiresourceGroupName",
    "dataproduct01",
    "datatypename",
    {},
  );
  console.log(result);
}

async function main() {
  dataTypesUpdateMaximumSetGen();
  dataTypesUpdateMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
