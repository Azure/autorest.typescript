// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  VirtualMachineScaleSetVMsRetrieveBootDiagnosticsDataOptionalParams,
  ComputeManagementClient,
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to The operation to retrieve SAS URIs of boot diagnostic logs for a virtual machine in a VM scale set.
 *
 * @summary The operation to retrieve SAS URIs of boot diagnostic logs for a virtual machine in a VM scale set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/compute/RetrieveBootDiagnosticsDataVMScaleSetVM.json
 */
async function retrieveBootDiagnosticsDataOfAVirtualMachine(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "ResourceGroup";
  const vmScaleSetName = "myvmScaleSet";
  const instanceId = "0";
  const sasUriExpirationTimeInMinutes = 60;
  const options: VirtualMachineScaleSetVMsRetrieveBootDiagnosticsDataOptionalParams =
    { sasUriExpirationTimeInMinutes };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result =
    await client.virtualMachineScaleSetVMs.retrieveBootDiagnosticsData(
      resourceGroupName,
      vmScaleSetName,
      instanceId,
      options,
    );
  console.log(result);
}

async function main(): Promise<void> {
  await retrieveBootDiagnosticsDataOfAVirtualMachine();
}

main().catch(console.error);
