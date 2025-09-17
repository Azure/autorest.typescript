// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to The operation to reapply a virtual machine's state.
 *
 * @summary The operation to reapply a virtual machine's state.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/compute/ReapplyVirtualMachine.json
 */
async function reapplyTheStateOfAVirtualMachine(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "ResourceGroup";
  const vmName = "VMName";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachines.beginReapplyAndWait(
    resourceGroupName,
    vmName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await reapplyTheStateOfAVirtualMachine();
}

main().catch(console.error);
