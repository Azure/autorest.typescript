// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets information about a network function definition version.
 *
 * @summary gets information about a network function definition version.
 * x-ms-original-file: 2025-03-30/AzureCore/VirtualNetworkFunctionDefinitionVersionGet.json
 */
async function getNetworkFunctionDefinitionVersionResourceForAzureCoreVNF(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.networkFunctionDefinitionVersions.get(
    "rg",
    "TestPublisher",
    "TestNetworkFunctionDefinitionGroupName",
    "1.0.0",
  );
  console.log(result);
}

/**
 * This sample demonstrates how to gets information about a network function definition version.
 *
 * @summary gets information about a network function definition version.
 * x-ms-original-file: 2025-03-30/AzureOperatorNexus/VirtualNetworkFunctionDefinitionVersionGet.json
 */
async function getNetworkFunctionDefinitionVersionResourceForAzureOperatorNexusVNF(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.networkFunctionDefinitionVersions.get(
    "rg",
    "TestPublisher",
    "TestNetworkFunctionDefinitionGroupName",
    "1.0.0",
  );
  console.log(result);
}

/**
 * This sample demonstrates how to gets information about a network function definition version.
 *
 * @summary gets information about a network function definition version.
 * x-ms-original-file: 2025-03-30/NetworkFunctionDefinitionVersionGet.json
 */
async function getANetworkFunctionDefinitionVersionResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.networkFunctionDefinitionVersions.get(
    "rg",
    "TestPublisher",
    "TestNetworkFunctionDefinitionGroupName",
    "1.0.0",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getNetworkFunctionDefinitionVersionResourceForAzureCoreVNF();
  await getNetworkFunctionDefinitionVersionResourceForAzureOperatorNexusVNF();
  await getANetworkFunctionDefinitionVersionResource();
}

main().catch(console.error);
