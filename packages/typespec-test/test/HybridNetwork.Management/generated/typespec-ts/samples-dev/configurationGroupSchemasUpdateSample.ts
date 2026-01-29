// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to updates a configuration group schema resource.
 *
 * @summary updates a configuration group schema resource.
 * x-ms-original-file: 2025-03-30/ConfigurationGroupSchemaUpdateTags.json
 */
async function createOrUpdateTheConfigurationGroupSchemaResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.configurationGroupSchemas.update(
    "rg1",
    "testPublisher",
    "testConfigurationGroupSchema",
    { tags: { tag1: "value1", tag2: "value2" } },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateTheConfigurationGroupSchemaResource();
}

main().catch(console.error);
