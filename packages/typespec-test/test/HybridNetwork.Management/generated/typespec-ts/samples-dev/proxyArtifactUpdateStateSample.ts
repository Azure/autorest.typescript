// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to change artifact state defined in artifact store.
 *
 * @summary change artifact state defined in artifact store.
 * x-ms-original-file: 2025-03-30/PureProxyArtifact/ArtifactChangeState.json
 */
async function updateAnArtifactState(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.proxyArtifact.updateState(
    "TestResourceGroup",
    "TestPublisher",
    "TestArtifactStoreName",
    "fedrbac",
    "1.0.0",
    { properties: { artifactState: "Deprecated" } },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updateAnArtifactState();
}

main().catch(console.error);
