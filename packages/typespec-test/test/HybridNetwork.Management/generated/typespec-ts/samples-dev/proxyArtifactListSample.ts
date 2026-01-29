// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to lists all the available artifacts in the parent Artifact Store.
 *
 * @summary lists all the available artifacts in the parent Artifact Store.
 * x-ms-original-file: 2025-03-30/PureProxyArtifact/ArtifactList.json
 */
async function listArtifactsUnderAnArtifactStore(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.proxyArtifact.list(
    "TestResourceGroup",
    "TestPublisher",
    "TestArtifactStoreName",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await listArtifactsUnderAnArtifactStore();
}

main().catch(console.error);
