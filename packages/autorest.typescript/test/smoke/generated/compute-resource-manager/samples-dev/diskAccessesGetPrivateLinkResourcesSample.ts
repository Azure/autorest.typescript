// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets the private link resources possible under disk access resource
 *
 * @summary Gets the private link resources possible under disk access resource
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/GetDiskAccessPrivateLinkResources.json
 */
async function listAllPossiblePrivateLinkResourcesUnderDiskAccessResource(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const diskAccessName = "myDiskAccess";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.diskAccesses.getPrivateLinkResources(
    resourceGroupName,
    diskAccessName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await listAllPossiblePrivateLinkResourcesUnderDiskAccessResource();
}

main().catch(console.error);
