// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a Artifact overview information.
 *
 * @summary get a Artifact overview information.
 * x-ms-original-file: 2025-03-30/PureProxyArtifact/ArtifactGet.json
 */
async function getAnArtifactOverview(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.proxyArtifact.get(
    "TestResourceGroup",
    "TestPublisher",
    "TestArtifactStoreName",
    "fedrbac",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await getAnArtifactOverview();
}

main().catch(console.error);
