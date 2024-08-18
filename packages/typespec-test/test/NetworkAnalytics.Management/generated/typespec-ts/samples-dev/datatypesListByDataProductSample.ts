// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "../src/networkAnalyticsClient.js";

/**
 * This sample demonstrates how to list data type by parent resource.
 *
 * @summary list data type by parent resource.
 * x-ms-original-file: 2023-11-15/DataTypes_ListByDataProduct_MaximumSet_Gen.json
 */
async function dataTypesListByDataProductMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.datatypes.listByDataProduct(
    "aoiresourceGroupName",
    "dataproduct01",
  );
  console.log(result);
}

/**
 * This sample demonstrates how to list data type by parent resource.
 *
 * @summary list data type by parent resource.
 * x-ms-original-file: 2023-11-15/DataTypes_ListByDataProduct_MinimumSet_Gen.json
 */
async function dataTypesListByDataProductMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.datatypes.listByDataProduct(
    "aoiresourceGroupName",
    "dataproduct01",
  );
  console.log(result);
}

async function main() {
  dataTypesListByDataProductMaximumSetGen();
  dataTypesListByDataProductMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
