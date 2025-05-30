/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  LocalNetworkGateway,
  NetworkManagementClient,
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates a local network gateway in the specified resource group.
 *
 * @summary Creates or updates a local network gateway in the specified resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/LocalNetworkGatewayCreate.json
 */
async function createLocalNetworkGateway(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const localNetworkGatewayName = "localgw";
  const parameters: LocalNetworkGateway = {
    fqdn: "site1.contoso.com",
    gatewayIpAddress: "11.12.13.14",
    localNetworkAddressSpace: { addressPrefixes: ["10.1.0.0/16"] },
    location: "Central US",
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.localNetworkGateways.beginCreateOrUpdateAndWait(
    resourceGroupName,
    localNetworkGatewayName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createLocalNetworkGateway();
}

main().catch(console.error);
