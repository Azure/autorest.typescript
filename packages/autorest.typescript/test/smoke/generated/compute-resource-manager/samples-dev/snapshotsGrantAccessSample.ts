/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  GrantAccessData,
  ComputeManagementClient,
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Grants access to a snapshot.
 *
 * @summary Grants access to a snapshot.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/BeginGetAccessSnapshot.json
 */
async function getASasOnASnapshot(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const snapshotName = "mySnapshot";
  const grantAccessData: GrantAccessData = {
    access: "Read",
    durationInSeconds: 300,
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.snapshots.beginGrantAccessAndWait(
    resourceGroupName,
    snapshotName,
    grantAccessData,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getASasOnASnapshot();
}

main().catch(console.error);
