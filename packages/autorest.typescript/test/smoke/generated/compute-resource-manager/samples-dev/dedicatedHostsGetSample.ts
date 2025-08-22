// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Retrieves information about a dedicated host.
 *
 * @summary Retrieves information about a dedicated host.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/compute/GetADedicatedHost.json
 */
async function getADedicatedHost(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscriptionId}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const hostGroupName = "myDedicatedHostGroup";
  const hostName = "myHost";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.dedicatedHosts.get(
    resourceGroupName,
    hostGroupName,
    hostName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getADedicatedHost();
}

main().catch(console.error);
