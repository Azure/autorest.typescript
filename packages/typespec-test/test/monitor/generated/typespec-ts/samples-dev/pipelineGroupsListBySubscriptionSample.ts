// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to lists all workspaces in the specified subscription
 *
 * @summary lists all workspaces in the specified subscription
 * x-ms-original-file: 2023-10-01-preview/PipelineGroupListBySubscription.json
 */
async function listPipelineGroupsBySubscription() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new MonitorClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.pipelineGroups.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  listPipelineGroupsBySubscription();
}

main().catch(console.error);
