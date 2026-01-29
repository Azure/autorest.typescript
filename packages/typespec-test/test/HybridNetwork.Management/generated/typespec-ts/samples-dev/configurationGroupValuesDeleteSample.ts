// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to deletes the specified hybrid configuration group value.
 *
 * @summary deletes the specified hybrid configuration group value.
 * x-ms-original-file: 2025-03-30/ConfigurationGroupValueDelete.json
 */
async function deleteHybridConfigurationGroupResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  await client.configurationGroupValues.delete("rg1", "testConfigurationGroupValue");
}

async function main(): Promise<void> {
  await deleteHybridConfigurationGroupResource();
}

main().catch(console.error);
