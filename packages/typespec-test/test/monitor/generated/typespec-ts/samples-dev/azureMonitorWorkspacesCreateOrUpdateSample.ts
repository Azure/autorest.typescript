// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create or update a workspace
 *
 * @summary create or update a workspace
 * x-ms-original-file: 2023-10-01-preview/AzureMonitorWorkspaceCreate.json
 */
async function createsAnAzureMonitorWorkspace() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.azureMonitorWorkspaces.createOrUpdate(
    "myResourceGroup",
    "myAzureMonitorWorkspace",
    { location: "eastus", properties: {} },
  );
  console.log(result);
}

async function main() {
  createsAnAzureMonitorWorkspace();
}

main().catch(console.error);
