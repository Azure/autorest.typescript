// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to generate sas token for storage container.
 *
 * @summary generate sas token for storage container.
 * x-ms-original-file: 2023-11-15/DataTypes_GenerateStorageContainerSasToken_MaximumSet_Gen.json
 */
async function dataTypesGenerateStorageContainerSasTokenMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.datatypes.generateStorageContainerSasToken(
    "aoiresourceGroupName",
    "dataproduct01",
    "datatypename",
    {
      startTimeStamp: new Date("2023-08-24T05:34:58.039Z"),
      expiryTimeStamp: new Date("2023-08-24T05:34:58.039Z"),
      ipAddress: "1.1.1.1",
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to generate sas token for storage container.
 *
 * @summary generate sas token for storage container.
 * x-ms-original-file: 2023-11-15/DataTypes_GenerateStorageContainerSasToken_MinimumSet_Gen.json
 */
async function dataTypesGenerateStorageContainerSasTokenMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.datatypes.generateStorageContainerSasToken(
    "aoiresourceGroupName",
    "dataproduct01",
    "datatypename",
    {
      startTimeStamp: new Date("2023-08-24T05:35:16.887Z"),
      expiryTimeStamp: new Date("2023-08-24T05:35:16.887Z"),
      ipAddress: "1.1.1.1",
    },
  );
  console.log(result);
}

async function main() {
  dataTypesGenerateStorageContainerSasTokenMaximumSetGen();
  dataTypesGenerateStorageContainerSasTokenMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
