// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to List shared galleries by subscription id or tenant id.
 *
 * @summary List shared galleries by subscription id or tenant id.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/sharedGallery/ListSharedGalleries.json
 */
async function getAGallery(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const location = "myLocation";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.sharedGalleries.list(location)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await getAGallery();
}

main().catch(console.error);
