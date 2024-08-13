// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "../src/networkAnalyticsClient.js";

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
