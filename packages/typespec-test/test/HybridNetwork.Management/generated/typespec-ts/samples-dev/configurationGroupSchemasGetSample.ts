// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets information about the specified configuration group schema.
 *
 * @summary gets information about the specified configuration group schema.
 * x-ms-original-file: 2025-03-30/ConfigurationGroupSchemaGet.json
 */
async function getANetworkFunctionDefinitionGroupResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.configurationGroupSchemas.get(
    "rg1",
    "testPublisher",
    "testConfigurationGroupSchema",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getANetworkFunctionDefinitionGroupResource();
}

main().catch(console.error);
