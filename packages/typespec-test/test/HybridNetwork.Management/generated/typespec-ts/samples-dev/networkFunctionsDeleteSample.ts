// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to deletes the specified network function resource.
 *
 * @summary deletes the specified network function resource.
 * x-ms-original-file: 2025-03-30/AzureCore/VirtualNetworkFunctionDelete.json
 */
async function deleteVirtualNetworkFunctionResourceOnAzureCore(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  await client.networkFunctions.delete("rg", "testNf");
}

/**
 * This sample demonstrates how to deletes the specified network function resource.
 *
 * @summary deletes the specified network function resource.
 * x-ms-original-file: 2025-03-30/AzureOperatorNexus/VirtualNetworkFunctionDelete.json
 */
async function deleteVirtualNetworkFunctionResourceOnAzureOperatorNexus(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  await client.networkFunctions.delete("rg", "testNf");
}

/**
 * This sample demonstrates how to deletes the specified network function resource.
 *
 * @summary deletes the specified network function resource.
 * x-ms-original-file: 2025-03-30/NetworkFunctionDelete.json
 */
async function deleteNetworkFunctionResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  await client.networkFunctions.delete("rg", "testNf");
}

async function main(): Promise<void> {
  await deleteVirtualNetworkFunctionResourceOnAzureCore();
  await deleteVirtualNetworkFunctionResourceOnAzureOperatorNexus();
  await deleteNetworkFunctionResource();
}

main().catch(console.error);
