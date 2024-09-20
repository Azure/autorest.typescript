// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to returns the specific Azure Monitor workspace
 *
 * @summary returns the specific Azure Monitor workspace
 * x-ms-original-file: 2023-10-01-preview/AzureMonitorWorkspaceGet.json
 */
async function retrievesAnAzureMonitorWorkspace() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "703362b3-f278-4e4b-9179-c76eaf41ffc2";
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.azureMonitorWorkspaces.get(
    "myResourceGroup",
    "myAzureMonitorWorkspace",
  );
  console.log(result);
}

async function main() {
  retrievesAnAzureMonitorWorkspace();
}

main().catch(console.error);
