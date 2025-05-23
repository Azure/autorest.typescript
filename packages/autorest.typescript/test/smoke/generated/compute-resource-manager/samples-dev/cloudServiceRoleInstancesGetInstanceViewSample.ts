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
 * This sample demonstrates how to Retrieves information about the run-time state of a role instance in a cloud service.
 *
 * @summary Retrieves information about the run-time state of a role instance in a cloud service.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-03-01/examples/GetInstanceViewOfCloudServiceRoleInstance.json
 */
async function getInstanceViewOfCloudServiceRoleInstance(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const roleInstanceName = "{roleInstance-name}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "ConstosoRG";
  const cloudServiceName = "{cs-name}";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.cloudServiceRoleInstances.getInstanceView(
    roleInstanceName,
    resourceGroupName,
    cloudServiceName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getInstanceViewOfCloudServiceRoleInstance();
}

main().catch(console.error);
