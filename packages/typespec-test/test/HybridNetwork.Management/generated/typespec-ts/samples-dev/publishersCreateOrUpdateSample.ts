// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to creates or updates a publisher.
 *
 * @summary creates or updates a publisher.
 * x-ms-original-file: 2025-03-30/PublisherCreate.json
 */
async function createOrUpdateAPublisherResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.publishers.createOrUpdate("rg", "TestPublisher", {
    parameters: { location: "eastus", properties: { scope: "Public" } },
  });
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateAPublisherResource();
}

main().catch(console.error);
