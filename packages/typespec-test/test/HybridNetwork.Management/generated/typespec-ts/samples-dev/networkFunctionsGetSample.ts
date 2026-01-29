// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets information about the specified network function resource.
 *
 * @summary gets information about the specified network function resource.
 * x-ms-original-file: 2025-03-30/AzureCore/VirtualNetworkFunctionGet.json
 */
async function getVirtualNetworkFunctionResourceOnAzureCore(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.networkFunctions.get("rg", "testNf");
  console.log(result);
}

/**
 * This sample demonstrates how to gets information about the specified network function resource.
 *
 * @summary gets information about the specified network function resource.
 * x-ms-original-file: 2025-03-30/AzureOperatorNexus/VirtualNetworkFunctionGet.json
 */
async function getVirtualNetworkFunctionResourceOnAzureOperatorNexus(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.networkFunctions.get("rg", "testNf");
  console.log(result);
}

/**
 * This sample demonstrates how to gets information about the specified network function resource.
 *
 * @summary gets information about the specified network function resource.
 * x-ms-original-file: 2025-03-30/NetworkFunctionGet.json
 */
async function getNetworkFunctionResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.networkFunctions.get("rg", "testNf");
  console.log(result);
}

async function main(): Promise<void> {
  await getVirtualNetworkFunctionResourceOnAzureCore();
  await getVirtualNetworkFunctionResourceOnAzureOperatorNexus();
  await getNetworkFunctionResource();
}

main().catch(console.error);
