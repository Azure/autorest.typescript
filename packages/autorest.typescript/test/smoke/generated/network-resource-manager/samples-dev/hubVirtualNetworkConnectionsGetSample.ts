// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Retrieves the details of a HubVirtualNetworkConnection.
 *
 * @summary Retrieves the details of a HubVirtualNetworkConnection.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/HubVirtualNetworkConnectionGet.json
 */
async function hubVirtualNetworkConnectionGet(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const virtualHubName = "virtualHub1";
  const connectionName = "connection1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.hubVirtualNetworkConnections.get(
    resourceGroupName,
    virtualHubName,
    connectionName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await hubVirtualNetworkConnectionGet();
}

main().catch(console.error);
