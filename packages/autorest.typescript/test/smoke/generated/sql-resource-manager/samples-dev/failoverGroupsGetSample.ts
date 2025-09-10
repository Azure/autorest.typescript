// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a failover group.
 *
 * @summary Gets a failover group.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/FailoverGroupGet.json
 */
async function getFailoverGroup(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "Default";
  const serverName = "failover-group-primary-server";
  const failoverGroupName = "failover-group-test";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.failoverGroups.get(
    resourceGroupName,
    serverName,
    failoverGroupName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getFailoverGroup();
}

main().catch(console.error);
