// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to updates part of a workspace
 *
 * @summary updates part of a workspace
 * x-ms-original-file: 2023-10-01-preview/AzureMonitorWorkspaceUpdate.json
 */
async function updatesAnAzureMonitorWorkspace() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "703362b3-f278-4e4b-9179-c76eaf41ffc2";
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.azureMonitorWorkspaces.update(
    "myResourceGroup",
    "myAzureMonitorWorkspace",
    { tags: { tag1: "A", tag2: "B", tag3: "C" } },
  );
  console.log(result);
}

async function main() {
  updatesAnAzureMonitorWorkspace();
}

main().catch(console.error);
