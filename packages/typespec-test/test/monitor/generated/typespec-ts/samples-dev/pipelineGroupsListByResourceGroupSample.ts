// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to lists all workspaces in the specified resource group
 *
 * @summary lists all workspaces in the specified resource group
 * x-ms-original-file: 2023-10-01-preview/PipelineGroupListByResourceGroup.json
 */
async function listPipelineGroupsByResourceGroup() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new MonitorClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.pipelineGroups.listByResourceGroup(
    "myResourceGroup",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  listPipelineGroupsByResourceGroup();
}

main().catch(console.error);
