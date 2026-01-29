// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets information about the specified hybrid configuration group values.
 *
 * @summary gets information about the specified hybrid configuration group values.
 * x-ms-original-file: 2025-03-30/ConfigurationGroupValueGet.json
 */
async function getHybridConfigurationGroup(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.configurationGroupValues.get("rg1", "testConfigurationGroupValue");
  console.log(result);
}

async function main(): Promise<void> {
  await getHybridConfigurationGroup();
}

main().catch(console.error);
