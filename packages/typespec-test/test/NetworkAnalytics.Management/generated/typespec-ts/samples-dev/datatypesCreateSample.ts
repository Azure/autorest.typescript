// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "../src/networkAnalyticsClient.js";

async function dataTypesCreateMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.datatypes.create(
    "aoiresourceGroupName",
    "dataproduct01",
    "datatypename",
    {} as any,
  );
  console.log(result);
}

async function main() {
  dataTypesCreateMaximumSetGen();
}

main().catch(console.error);

async function dataTypesCreateMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.datatypes.create(
    "aoiresourceGroupName",
    "dataproduct01",
    "datatypename",
    {} as any,
  );
  console.log(result);
}

async function main() {
  dataTypesCreateMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
