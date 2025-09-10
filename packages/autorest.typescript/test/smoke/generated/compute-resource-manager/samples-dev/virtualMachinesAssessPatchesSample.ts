// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Assess patches on the VM.
 *
 * @summary Assess patches on the VM.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/compute/VirtualMachineAssessPatches.json
 */
async function assessPatchStateOfAVirtualMachine(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["RESOURCE_GROUP"] || "myResourceGroupName";
  const vmName = "myVMName";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachines.beginAssessPatchesAndWait(
    resourceGroupName,
    vmName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await assessPatchStateOfAVirtualMachine();
}

main().catch(console.error);
