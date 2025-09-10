// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets the backend health of the specified application gateway in a resource group.
 *
 * @summary Gets the backend health of the specified application gateway in a resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/ApplicationGatewayBackendHealthGet.json
 */
async function getBackendHealth(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "appgw";
  const applicationGatewayName = "appgw";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.applicationGateways.beginBackendHealthAndWait(
    resourceGroupName,
    applicationGatewayName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getBackendHealth();
}

main().catch(console.error);
