// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to lists all workspaces in the specified subscription
 *
 * @summary lists all workspaces in the specified subscription
 * x-ms-original-file: 2023-10-01-preview/AzureMonitorWorkspacesListBySubscription.json
 */
async function listAzureMonitorWorkspacesBySubscription() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "703362b3-f278-4e4b-9179-c76eaf41ffc2";
  const client = new MonitorClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.azureMonitorWorkspaces.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  listAzureMonitorWorkspacesBySubscription();
}

main().catch(console.error);
