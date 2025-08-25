// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  VirtualMachineRunCommandUpdate,
  ComputeManagementClient,
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to The operation to update the VMSS VM run command.
 *
 * @summary The operation to update the VMSS VM run command.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/runCommands/UpdateVirtualMachineScaleSetVMRunCommands.json
 */
async function updateVirtualMachineScaleSetVMRunCommand(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const vmScaleSetName = "myvmScaleSet";
  const instanceId = "0";
  const runCommandName = "myRunCommand";
  const runCommand: VirtualMachineRunCommandUpdate = {
    source: { script: "Write-Host Script Source Updated!" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result =
    await client.virtualMachineScaleSetVMRunCommands.beginUpdateAndWait(
      resourceGroupName,
      vmScaleSetName,
      instanceId,
      runCommandName,
      runCommand,
    );
  console.log(result);
}

async function main(): Promise<void> {
  await updateVirtualMachineScaleSetVMRunCommand();
}

main().catch(console.error);
