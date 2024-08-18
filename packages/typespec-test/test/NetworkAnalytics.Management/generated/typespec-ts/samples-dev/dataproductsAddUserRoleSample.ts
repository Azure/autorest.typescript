// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "../src/networkAnalyticsClient.js";

/**
 * This sample demonstrates how to assign role to the data product.
 *
 * @summary assign role to the data product.
 * x-ms-original-file: 2023-11-15/DataProducts_AddUserRole_MaximumSet_Gen.json
 */
async function dataProductsAddUserRoleMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproducts.addUserRole(
    "aoiresourceGroupName",
    "dataproduct01",
    {
      roleId: "00000000-0000-0000-0000-00000000000",
      principalId: "00000000-0000-0000-0000-00000000000",
      userName: "UserName",
      dataTypeScope: ["scope"],
      principalType: "User",
      role: "Reader",
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to assign role to the data product.
 *
 * @summary assign role to the data product.
 * x-ms-original-file: 2023-11-15/DataProducts_AddUserRole_MinimumSet_Gen.json
 */
async function dataProductsAddUserRoleMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproducts.addUserRole(
    "aoiresourceGroupName",
    "dataproduct01",
    {
      roleId: "00000000-0000-0000-0000-00000000000",
      principalId: "00000000-0000-0000-0000-00000000000",
      userName: "userName",
      dataTypeScope: ["scope"],
      principalType: "User",
      role: "Reader",
    },
  );
  console.log(result);
}

async function main() {
  dataProductsAddUserRoleMaximumSetGen();
  dataProductsAddUserRoleMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
