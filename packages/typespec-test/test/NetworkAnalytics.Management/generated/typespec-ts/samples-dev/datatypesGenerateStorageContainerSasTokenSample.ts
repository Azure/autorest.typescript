// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "../src/networkAnalyticsClient.js";

async function dataTypesGenerateStorageContainerSasTokenMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.datatypes.generateStorageContainerSasToken(
    "aoiresourceGroupName",
    "dataproduct01",
    "datatypename",
    {} as any,
  );
  console.log(result);
}

async function main() {
  dataTypesGenerateStorageContainerSasTokenMaximumSetGen();
}

main().catch(console.error);

async function dataTypesGenerateStorageContainerSasTokenMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.datatypes.generateStorageContainerSasToken(
    "aoiresourceGroupName",
    "dataproduct01",
    "datatypename",
    {} as any,
  );
  console.log(result);
}

async function main() {
  dataTypesGenerateStorageContainerSasTokenMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
