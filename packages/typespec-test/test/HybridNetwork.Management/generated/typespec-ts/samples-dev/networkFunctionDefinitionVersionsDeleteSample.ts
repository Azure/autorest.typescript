// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to deletes the specified network function definition version.
 *
 * @summary deletes the specified network function definition version.
 * x-ms-original-file: 2025-03-30/AzureCore/VirtualNetworkFunctionDefinitionVersionDelete.json
 */
async function deleteANetworkFunctionDefinitionVersionForAzureCoreVNF(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  await client.networkFunctionDefinitionVersions.delete(
    "rg",
    "TestPublisher",
    "TestNetworkFunctionDefinitionGroupName",
    "1.0.0",
  );
}

/**
 * This sample demonstrates how to deletes the specified network function definition version.
 *
 * @summary deletes the specified network function definition version.
 * x-ms-original-file: 2025-03-30/AzureOperatorNexus/VirtualNetworkFunctionDefinitionVersionDelete.json
 */
async function deleteANetworkFunctionDefinitionVersionForAzureOperatorNexusVNF(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  await client.networkFunctionDefinitionVersions.delete(
    "rg",
    "TestPublisher",
    "TestNetworkFunctionDefinitionGroupName",
    "1.0.0",
  );
}

/**
 * This sample demonstrates how to deletes the specified network function definition version.
 *
 * @summary deletes the specified network function definition version.
 * x-ms-original-file: 2025-03-30/NetworkFunctionDefinitionVersionDelete.json
 */
async function deleteANetworkFunctionDefinitionVersion(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  await client.networkFunctionDefinitionVersions.delete(
    "rg",
    "TestPublisher",
    "TestNetworkFunctionDefinitionGroupName",
    "1.0.0",
  );
}

async function main(): Promise<void> {
  await deleteANetworkFunctionDefinitionVersionForAzureCoreVNF();
  await deleteANetworkFunctionDefinitionVersionForAzureOperatorNexusVNF();
  await deleteANetworkFunctionDefinitionVersion();
}

main().catch(console.error);
