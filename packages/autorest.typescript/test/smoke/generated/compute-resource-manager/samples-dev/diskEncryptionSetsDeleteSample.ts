/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Deletes a disk encryption set.
 *
 * @summary Deletes a disk encryption set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/DeleteADiskEncryptionSet.json
 */
async function deleteADiskEncryptionSet(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const diskEncryptionSetName = "myDiskEncryptionSet";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.diskEncryptionSets.beginDeleteAndWait(
    resourceGroupName,
    diskEncryptionSetName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await deleteADiskEncryptionSet();
}

main().catch(console.error);
