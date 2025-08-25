// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  SessionIds,
  NetworkManagementClient,
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Returns the list of currently active sessions on the Bastion.
 *
 * @summary Returns the list of currently active sessions on the Bastion.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/BastionSessionDelete.json
 */
async function deletesTheSpecifiedActiveSession(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const bastionHostName = "bastionhosttenant";
  const sessionIds: SessionIds = {};
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.listDisconnectActiveSessions(
    resourceGroupName,
    bastionHostName,
    sessionIds,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await deletesTheSpecifiedActiveSession();
}

main().catch(console.error);
