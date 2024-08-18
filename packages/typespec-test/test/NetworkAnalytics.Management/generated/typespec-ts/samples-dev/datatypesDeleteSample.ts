// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete data type resource.
 *
 * @summary delete data type resource.
 * x-ms-original-file: 2023-11-15/DataTypes_Delete_MaximumSet_Gen.json
 */
async function dataTypesDeleteMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataTypes.delete(
    "aoiresourceGroupName",
    "dataproduct01",
    "datatypename",
  );
  console.log(result);
}

/**
 * This sample demonstrates how to delete data type resource.
 *
 * @summary delete data type resource.
 * x-ms-original-file: 2023-11-15/DataTypes_Delete_MinimumSet_Gen.json
 */
async function dataTypesDeleteMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataTypes.delete(
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
