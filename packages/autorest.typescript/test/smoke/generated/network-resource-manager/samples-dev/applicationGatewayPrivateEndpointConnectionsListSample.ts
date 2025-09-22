// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Lists all private endpoint connections on an application gateway.
 *
 * @summary Lists all private endpoint connections on an application gateway.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/ApplicationGatewayPrivateEndpointConnectionList.json
 */
async function listsAllPrivateEndpointConnectionsOnApplicationGateway(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const applicationGatewayName = "appgw";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.applicationGatewayPrivateEndpointConnections.list(
    resourceGroupName,
    applicationGatewayName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await listsAllPrivateEndpointConnectionsOnApplicationGateway();
}

main().catch(console.error);
