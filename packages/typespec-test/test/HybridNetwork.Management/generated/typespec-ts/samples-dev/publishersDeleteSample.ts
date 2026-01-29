// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to deletes the specified publisher.
 *
 * @summary deletes the specified publisher.
 * x-ms-original-file: 2025-03-30/PublisherDelete.json
 */
async function deleteAPublisherResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  await client.publishers.delete("rg", "TestPublisher");
}

async function main(): Promise<void> {
  await deleteAPublisherResource();
}

main().catch(console.error);
