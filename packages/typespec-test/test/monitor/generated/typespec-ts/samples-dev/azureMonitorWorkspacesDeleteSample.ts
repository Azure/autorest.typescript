// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete a workspace
 *
 * @summary delete a workspace
 * x-ms-original-file: 2023-10-01-preview/AzureMonitorWorkspaceDelete.json
 */
async function deletesAnAzureMonitorWorkspaceAsynchronously() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "703362b3-f278-4e4b-9179-c76eaf41ffc2";
  const client = new MonitorClient(credential, subscriptionId);
  await client.azureMonitorWorkspaces.delete(
    "myResourceGroup",
    "myAzureMonitorWorkspace",
  );
}

async function main() {
  deletesAnAzureMonitorWorkspaceAsynchronously();
}

main().catch(console.error);
