// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to creates or updates a artifact store.
 *
 * @summary creates or updates a artifact store.
 * x-ms-original-file: 2025-03-30/ArtifactStoreCreate.json
 */
async function createOrUpdateAnArtifactStoreOfPublisherResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.artifactStores.createOrUpdate(
    "rg",
    "TestPublisher",
    "TestArtifactStore",
    {
      location: "eastus",
      properties: {
        managedResourceGroupConfiguration: { name: "testRg", location: "eastus" },
        replicationStrategy: "SingleReplication",
        storeType: "AzureContainerRegistry",
      },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to creates or updates a artifact store.
 *
 * @summary creates or updates a artifact store.
 * x-ms-original-file: 2025-03-30/ArtifactStoreCreateContainer.json
 */
async function createOrUpdateAnArtifactStoreOfPublisherResourceWithContainerRegistry(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.artifactStores.createOrUpdate(
    "rg",
    "TestPublisher",
    "TestArtifactStore",
    {
      location: "eastus",
      properties: {
        backingResourcePublicNetworkAccess: "Disabled",
        managedResourceGroupConfiguration: { name: "testRg", location: "eastus" },
        replicationStrategy: "SingleReplication",
        storeType: "AzureContainerRegistry",
      },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to creates or updates a artifact store.
 *
 * @summary creates or updates a artifact store.
 * x-ms-original-file: 2025-03-30/ArtifactStoreCreateStorage.json
 */
async function createOrUpdateAnArtifactStoreOfPublisherResourceWithStorage(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.artifactStores.createOrUpdate(
    "rg",
    "TestPublisher",
    "TestArtifactStore",
    {
      location: "eastus",
      properties: {
        backingResourcePublicNetworkAccess: "Enabled",
        managedResourceGroupConfiguration: { name: "testRg", location: "eastus" },
        replicationStrategy: "SingleReplication",
        storeType: "AzureStorageAccount",
      },
    },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateAnArtifactStoreOfPublisherResource();
  await createOrUpdateAnArtifactStoreOfPublisherResourceWithContainerRegistry();
  await createOrUpdateAnArtifactStoreOfPublisherResourceWithStorage();
}

main().catch(console.error);
