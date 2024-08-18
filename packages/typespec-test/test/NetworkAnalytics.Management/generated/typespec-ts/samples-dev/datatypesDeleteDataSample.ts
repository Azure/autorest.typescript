// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete data for data type.
 *
 * @summary delete data for data type.
 * x-ms-original-file: 2023-11-15/DataTypes_DeleteData_MaximumSet_Gen.json
 */
async function dataTypesDeleteDataMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataTypes.deleteData(
    "aoiresourceGroupName",
    "dataproduct01",
    "datatypename",
    {},
  );
  console.log(result);
}

/**
 * This sample demonstrates how to delete data for data type.
 *
 * @summary delete data for data type.
 * x-ms-original-file: 2023-11-15/DataTypes_DeleteData_MinimumSet_Gen.json
 */
async function dataTypesDeleteDataMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataTypes.deleteData(
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
