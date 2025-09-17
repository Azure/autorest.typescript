// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets information about a private endpoint connection under a disk access resource.
 *
 * @summary Gets information about a private endpoint connection under a disk access resource.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/GetInformationAboutAPrivateEndpointConnection.json
 */
async function getInformationAboutAPrivateEndpointConnectionUnderADiskAccessResource(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const diskAccessName = "myDiskAccess";
  const privateEndpointConnectionName = "myPrivateEndpointConnection";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.diskAccesses.getAPrivateEndpointConnection(
    resourceGroupName,
    diskAccessName,
    privateEndpointConnectionName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getInformationAboutAPrivateEndpointConnectionUnderADiskAccessResource();
}

main().catch(console.error);
