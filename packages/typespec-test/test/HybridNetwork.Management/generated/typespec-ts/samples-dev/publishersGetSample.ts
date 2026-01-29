// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets information about the specified publisher.
 *
 * @summary gets information about the specified publisher.
 * x-ms-original-file: 2025-03-30/PublisherGet.json
 */
async function getAPublisherResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.publishers.get("rg", "TestPublisher");
  console.log(result);
}

async function main(): Promise<void> {
  await getAPublisherResource();
}

main().catch(console.error);
