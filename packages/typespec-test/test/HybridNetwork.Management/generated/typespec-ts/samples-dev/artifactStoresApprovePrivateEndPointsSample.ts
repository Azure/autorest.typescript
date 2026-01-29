// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to approve manual private endpoints on artifact stores
 *
 * @summary approve manual private endpoints on artifact stores
 * x-ms-original-file: 2025-03-30/ArtifactStoreApprovePrivateEndPoints.json
 */
async function approveManualPrivateEndpoints(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  await client.artifactStores.approvePrivateEndPoints("rg", "TestPublisher", "TestArtifactStore", {
    manualPrivateEndPointConnections: [
      {
        id: "/subscriptions/testSub/resourceGroups/testRG/providers/Microsoft.Network/privateEndpoints/newpetest",
      },
    ],
  });
}

async function main(): Promise<void> {
  await approveManualPrivateEndpoints();
}

main().catch(console.error);
