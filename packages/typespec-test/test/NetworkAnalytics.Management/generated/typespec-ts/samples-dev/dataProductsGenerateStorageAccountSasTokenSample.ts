// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to generate sas token for storage account.
 *
 * @summary generate sas token for storage account.
 * x-ms-original-file: 2023-11-15/DataProducts_GenerateStorageAccountSasToken_MaximumSet_Gen.json
 */
async function dataProductsGenerateStorageAccountSasTokenMaximumSetGen() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataProducts.generateStorageAccountSasToken(
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

async function main() {
  dataProductsGenerateStorageAccountSasTokenMaximumSetGen();
}

main().catch(console.error);
