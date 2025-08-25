// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  VirtualMachineScaleSetsDeleteOptionalParams,
  ComputeManagementClient,
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Deletes a VM scale set.
 *
 * @summary Deletes a VM scale set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/compute/ForceDeleteVirtualMachineScaleSets.json
 */
async function forceDeleteAVMScaleSet(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const vmScaleSetName = "myvmScaleSet";
  const forceDeletion = true;
  const options: VirtualMachineScaleSetsDeleteOptionalParams = {
    forceDeletion,
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSets.beginDeleteAndWait(
    resourceGroupName,
    vmScaleSetName,
    options,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await forceDeleteAVMScaleSet();
}

main().catch(console.error);
