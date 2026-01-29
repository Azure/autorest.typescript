// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update network function definition version state.
 *
 * @summary update network function definition version state.
 * x-ms-original-file: 2025-03-30/NetworkFunctionDefinitionVersionUpdateState.json
 */
async function updateNetworkFunctionDefinitionVersionState(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.networkFunctionDefinitionVersions.updateState(
    "rg",
    "TestPublisher",
    "TestSkuGroup",
    "1.0.0",
    { versionState: "Active" },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updateNetworkFunctionDefinitionVersionState();
}

main().catch(console.error);
