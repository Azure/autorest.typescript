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
    {} as any,
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
    {} as any,
  );
  console.log(result);
}

async function main() {
  dataTypesUpdateMaximumSetGen();
  dataTypesUpdateMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
