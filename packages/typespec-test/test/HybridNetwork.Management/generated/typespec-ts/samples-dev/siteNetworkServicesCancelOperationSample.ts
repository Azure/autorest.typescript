// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to cancels an ongoing long-running PUT operation for the specified Site Network Service resource. Other operations are not supported for cancellation at this time.
 *
 * @summary cancels an ongoing long-running PUT operation for the specified Site Network Service resource. Other operations are not supported for cancellation at this time.
 * x-ms-original-file: 2025-03-30/SiteNetworkServicesCancelOngoingPUTOperation.json
 */
async function cancelAnInProgressSNSPUT(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "sub1";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  await client.siteNetworkServices.cancelOperation({
    longRunningOperation: "Put",
    siteNetworkServiceReference: {
      id: "/subscriptions/sub1/resourceGroups/rg/providers/Microsoft.HybridNetwork/siteNetworkServices/TestSNS1",
    },
  });
}

async function main(): Promise<void> {
  await cancelAnInProgressSNSPUT();
}

main().catch(console.error);
