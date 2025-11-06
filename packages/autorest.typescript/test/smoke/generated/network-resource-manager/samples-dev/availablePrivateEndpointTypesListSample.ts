// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Returns all of the resource types that can be linked to a Private Endpoint in this subscription in this region.
 *
 * @summary Returns all of the resource types that can be linked to a Private Endpoint in this subscription in this region.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/AvailablePrivateEndpointTypesGet.json
 */
async function getAvailablePrivateEndpointTypes(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subId";
  const location = "regionName";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.availablePrivateEndpointTypes.list(
    location,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await getAvailablePrivateEndpointTypes();
}

main().catch(console.error);
