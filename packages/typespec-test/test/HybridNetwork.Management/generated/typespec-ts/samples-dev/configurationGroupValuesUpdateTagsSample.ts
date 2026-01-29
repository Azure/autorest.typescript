// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to updates a hybrid configuration group tags.
 *
 * @summary updates a hybrid configuration group tags.
 * x-ms-original-file: 2025-03-30/ConfigurationGroupValueUpdateTags.json
 */
async function updateHybridConfigurationGroupTags(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.configurationGroupValues.updateTags(
    "rg1",
    "testConfigurationGroupValue",
    { tags: { tag1: "value1", tag2: "value2" } },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updateHybridConfigurationGroupTags();
}

main().catch(console.error);
