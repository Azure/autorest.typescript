// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets the specified local network gateway in a resource group.
 *
 * @summary Gets the specified local network gateway in a resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/LocalNetworkGatewayGet.json
 */
async function getLocalNetworkGateway(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const localNetworkGatewayName = "localgw";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.localNetworkGateways.get(
    resourceGroupName,
    localNetworkGatewayName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getLocalNetworkGateway();
}

main().catch(console.error);
