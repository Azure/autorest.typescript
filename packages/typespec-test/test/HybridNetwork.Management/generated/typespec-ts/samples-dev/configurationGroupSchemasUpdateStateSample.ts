// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update configuration group schema state.
 *
 * @summary update configuration group schema state.
 * x-ms-original-file: 2025-03-30/ConfigurationGroupSchemaVersionUpdateState.json
 */
async function updateNetworkServiceDesignVersionState(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.configurationGroupSchemas.updateState(
    "rg1",
    "testPublisher",
    "testConfigurationGroupSchema",
    { versionState: "Active" },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updateNetworkServiceDesignVersionState();
}

main().catch(console.error);
