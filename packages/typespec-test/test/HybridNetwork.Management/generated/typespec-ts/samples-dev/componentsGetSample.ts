// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets information about the specified application instance resource.
 *
 * @summary gets information about the specified application instance resource.
 * x-ms-original-file: 2025-03-30/ComponentGet.json
 */
async function getComponentResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.components.get("rg", "testNf", "testComponent");
  console.log(result);
}

async function main(): Promise<void> {
  await getComponentResource();
}

main().catch(console.error);
