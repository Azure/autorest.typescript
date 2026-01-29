// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update a publisher resource.
 *
 * @summary update a publisher resource.
 * x-ms-original-file: 2025-03-30/PublisherUpdateTags.json
 */
async function updateAPublisherTags(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.publishers.update("rg", "TestPublisher", {
    parameters: { tags: { tag1: "value1", tag2: "value2" } },
  });
  console.log(result);
}

async function main(): Promise<void> {
  await updateAPublisherTags();
}

main().catch(console.error);
