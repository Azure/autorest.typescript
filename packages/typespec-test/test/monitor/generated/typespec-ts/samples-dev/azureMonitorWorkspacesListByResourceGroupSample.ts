// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to lists all workspaces in the specified resource group
 *
 * @summary lists all workspaces in the specified resource group
 * x-ms-original-file: 2023-10-01-preview/AzureMonitorWorkspacesListByResourceGroup.json
 */
async function listAzureMonitorWorkspacesByResourceGroup() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "703362b3-f278-4e4b-9179-c76eaf41ffc2";
  const client = new MonitorClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.azureMonitorWorkspaces.listByResourceGroup(
    "myResourceGroup",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  listAzureMonitorWorkspacesByResourceGroup();
}

main().catch(console.error);
