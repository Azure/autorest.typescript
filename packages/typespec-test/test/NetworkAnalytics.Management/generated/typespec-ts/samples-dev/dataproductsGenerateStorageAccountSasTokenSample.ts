// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DefaultAzureCredential } from "@azure/identity";
import { NetworkAnalyticsClient } from "../src/networkAnalyticsClient.js";

/**
 * This sample demonstrates how to generate sas token for storage account.
 *
 * @summary generate sas token for storage account.
 * x-ms-original-file: 2023-11-15/DataProducts_GenerateStorageAccountSasToken_MaximumSet_Gen.json
 */
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

/**
 * This sample demonstrates how to generate sas token for storage account.
 *
 * @summary generate sas token for storage account.
 * x-ms-original-file: 2023-11-15/DataProducts_GenerateStorageAccountSasToken_MinimumSet_Gen.json
 */
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
