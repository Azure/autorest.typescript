// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets information about a list of network service design versions under a network service design group.
 *
 * @summary gets information about a list of network service design versions under a network service design group.
 * x-ms-original-file: 2025-03-30/NetworkServiceDesignVersionListByNetworkServiceDesignGroup.json
 */
async function getPublisherResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.networkServiceDesignVersions.listByNetworkServiceDesignGroup(
    "rg",
    "TestPublisher",
    "TestNetworkServiceDesignGroupName",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await getPublisherResource();
}

main().catch(console.error);
