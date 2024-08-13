// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "../src/networkAnalyticsClient.js";

async function dataProductsGenerateStorageAccountSasTokenMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproducts.generateStorageAccountSasToken(
    "aoiresourceGroupName",
    "dataproduct01",
    {
      startTimeStamp: new Date("2023-08-24T05:34:58.151Z"),
      expiryTimeStamp: new Date("2023-08-24T05:34:58.151Z"),
      ipAddress: "1.1.1.1",
    },
  );
  console.log(result);
}

async function dataProductsGenerateStorageAccountSasTokenMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproducts.generateStorageAccountSasToken(
    "aoiresourceGroupName",
    "dataproduct01",
    {
      startTimeStamp: new Date("2023-08-24T05:35:17.051Z"),
      expiryTimeStamp: new Date("2023-08-24T05:35:17.051Z"),
      ipAddress: "1.1.1.1",
    },
  );
  console.log(result);
}

async function main() {
  dataProductsGenerateStorageAccountSasTokenMaximumSetGen();
  dataProductsGenerateStorageAccountSasTokenMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
