// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  RestorePoint,
  ComputeManagementClient,
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to The operation to create the restore point. Updating properties of an existing restore point is not allowed
 *
 * @summary The operation to create the restore point. Updating properties of an existing restore point is not allowed
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/compute/CreateARestorePoint.json
 */
async function createARestorePoint(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const restorePointCollectionName = "rpcName";
  const restorePointName = "rpName";
  const parameters: RestorePoint = {
    excludeDisks: [
      {
        id: "/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/disks/disk123",
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.restorePoints.beginCreateAndWait(
    resourceGroupName,
    restorePointCollectionName,
    restorePointName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createARestorePoint();
}

main().catch(console.error);
