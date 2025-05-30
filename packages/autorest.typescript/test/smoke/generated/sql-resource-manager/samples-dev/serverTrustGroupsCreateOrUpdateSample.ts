/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ServerTrustGroup,
  SqlManagementClient,
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates a server trust group.
 *
 * @summary Creates or updates a server trust group.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ServerTrustGroupCreate.json
 */
async function createServerTrustGroup(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "Default";
  const locationName = "Japan East";
  const serverTrustGroupName = "server-trust-group-test";
  const parameters: ServerTrustGroup = {
    groupMembers: [
      {
        serverId:
          "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default/providers/Microsoft.Sql/managedInstances/managedInstance-1",
      },
      {
        serverId:
          "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default/providers/Microsoft.Sql/managedInstances/managedInstance-2",
      },
    ],
    trustScopes: ["GlobalTransactions", "ServiceBroker"],
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.serverTrustGroups.beginCreateOrUpdateAndWait(
    resourceGroupName,
    locationName,
    serverTrustGroupName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createServerTrustGroup();
}

main().catch(console.error);
