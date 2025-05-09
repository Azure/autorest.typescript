/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a virtual network rule.
 *
 * @summary Gets a virtual network rule.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/VirtualNetworkRulesGet.json
 */
async function getsAVirtualNetworkRule(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "Default";
  const serverName = "vnet-test-svr";
  const virtualNetworkRuleName = "vnet-firewall-rule";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworkRules.get(
    resourceGroupName,
    serverName,
    virtualNetworkRuleName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getsAVirtualNetworkRule();
}

main().catch(console.error);
