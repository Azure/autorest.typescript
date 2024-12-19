// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list the operations for the provider
 *
 * @summary list the operations for the provider
 * x-ms-original-file: 2023-10-01-preview/OperationsList.json
 */
async function listsTheMicrosoftMonitorResourceProviderOperations() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new MonitorClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.operations.list()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  listsTheMicrosoftMonitorResourceProviderOperations();
}

main().catch(console.error);
