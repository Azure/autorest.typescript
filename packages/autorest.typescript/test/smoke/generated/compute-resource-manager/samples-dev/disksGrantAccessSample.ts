// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  GrantAccessData,
  ComputeManagementClient,
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Grants access to a disk.
 *
 * @summary Grants access to a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/BeginGetAccessManagedDisk.json
 */
async function getASasOnAManagedDisk(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const grantAccessData: GrantAccessData = {
    access: "Read",
    durationInSeconds: 300,
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginGrantAccessAndWait(
    resourceGroupName,
    diskName,
    grantAccessData,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getASasOnAManagedDisk();
}

main().catch(console.error);
