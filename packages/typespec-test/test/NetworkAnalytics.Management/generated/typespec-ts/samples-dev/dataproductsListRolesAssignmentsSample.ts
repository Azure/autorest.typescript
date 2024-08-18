// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "../src/networkAnalyticsClient.js";

/**
 * This sample demonstrates how to list user roles associated with the data product.
 *
 * @summary list user roles associated with the data product.
 * x-ms-original-file: 2023-11-15/DataProducts_ListRolesAssignments_MaximumSet_Gen.json
 */
async function dataProductsListRolesAssignmentsMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproducts.listRolesAssignments(
    "aoiresourceGroupName",
    "dataproduct01",
    {},
  );
  console.log(result);
}

/**
 * This sample demonstrates how to list user roles associated with the data product.
 *
 * @summary list user roles associated with the data product.
 * x-ms-original-file: 2023-11-15/DataProducts_ListRolesAssignments_MinimumSet_Gen.json
 */
async function dataProductsListRolesAssignmentsMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproducts.listRolesAssignments(
    "aoiresourceGroupName",
    "dataproduct01",
    {},
  );
  console.log(result);
}

async function main() {
  dataProductsListRolesAssignmentsMaximumSetGen();
  dataProductsListRolesAssignmentsMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
