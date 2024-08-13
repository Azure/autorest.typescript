// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "../src/networkAnalyticsClient.js";

async function dataTypesDeleteDataMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.datatypes.deleteData(
    "aoiresourceGroupName",
    "dataproduct01",
    "datatypename",
    {},
  );
  console.log(result);
}

async function dataTypesDeleteDataMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.datatypes.deleteData(
    "aoiresourceGroupName",
    "dataproduct01",
    "datatypename",
    {},
  );
  console.log(result);
}

async function main() {
  dataTypesDeleteDataMaximumSetGen();
  dataTypesDeleteDataMinimumSetGen();
}

main().catch(console.error);
