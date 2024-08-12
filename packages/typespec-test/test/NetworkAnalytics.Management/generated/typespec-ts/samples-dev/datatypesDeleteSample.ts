// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "../src/networkAnalyticsClient.js";

async function dataTypesDeleteMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.datatypes.delete(
    "aoiresourceGroupName",
    "dataproduct01",
    "datatypename",
  );
  console.log(result);
}

async function dataTypesDeleteMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.datatypes.delete(
    "aoiresourceGroupName",
    "dataproduct01",
    "datatypename",
  );
  console.log(result);
}

async function main() {
  dataTypesDeleteMaximumSetGen();
  dataTypesDeleteMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
