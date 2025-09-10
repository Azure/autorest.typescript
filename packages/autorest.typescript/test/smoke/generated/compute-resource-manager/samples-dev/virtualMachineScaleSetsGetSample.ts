// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Display information about a virtual machine scale set.
 *
 * @summary Display information about a virtual machine scale set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/compute/GetVirtualMachineScaleSetAutoPlacedOnDedicatedHostGroup.json
 */
async function getAVirtualMachineScaleSetPlacedOnADedicatedHostGroupThroughAutomaticPlacement(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const vmScaleSetName = "myVirtualMachineScaleSet";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSets.get(
    resourceGroupName,
    vmScaleSetName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Display information about a virtual machine scale set.
 *
 * @summary Display information about a virtual machine scale set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/compute/GetVirtualMachineScaleSetWithUserData.json
 */
async function getAVirtualMachineScaleSetWithUserData(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const vmScaleSetName = "myVirtualMachineScaleSet";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSets.get(
    resourceGroupName,
    vmScaleSetName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getAVirtualMachineScaleSetPlacedOnADedicatedHostGroupThroughAutomaticPlacement();
  await getAVirtualMachineScaleSetWithUserData();
}

main().catch(console.error);
