// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  VirtualMachineScaleSetVMsDeleteOptionalParams,
  ComputeManagementClient,
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Deletes a virtual machine from a VM scale set.
 *
 * @summary Deletes a virtual machine from a VM scale set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/compute/ForceDeleteVirtualMachineScaleSetVM.json
 */
async function forceDeleteAVirtualMachineFromAVMScaleSet(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const vmScaleSetName = "myvmScaleSet";
  const instanceId = "0";
  const forceDeletion = true;
  const options: VirtualMachineScaleSetVMsDeleteOptionalParams = {
    forceDeletion,
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSetVMs.beginDeleteAndWait(
    resourceGroupName,
    vmScaleSetName,
    instanceId,
    options,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await forceDeleteAVirtualMachineFromAVMScaleSet();
}

main().catch(console.error);
