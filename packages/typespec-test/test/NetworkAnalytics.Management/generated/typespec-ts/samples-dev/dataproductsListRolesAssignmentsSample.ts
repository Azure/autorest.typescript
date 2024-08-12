// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "../src/networkAnalyticsClient.js";

async function dataProductsListRolesAssignmentsMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproducts.listRolesAssignments(
    "aoiresourceGroupName",
    "dataproduct01",
    {} as any,
  );
  console.log(result);
}

async function dataProductsListRolesAssignmentsMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproducts.listRolesAssignments(
    "aoiresourceGroupName",
    "dataproduct01",
    {} as any,
  );
  console.log(result);
}

async function main() {
  dataProductsListRolesAssignmentsMaximumSetGen();
  dataProductsListRolesAssignmentsMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
