// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates the role instances in the specified update domain.
 *
 * @summary Updates the role instances in the specified update domain.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-03-01/examples/UpdateCloudServiceUpdateDomain.json
 */
async function updateCloudServiceToSpecifiedDomain(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "ConstosoRG";
  const cloudServiceName = "{cs-name}";
  const updateDomain = 1;
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result =
    await client.cloudServicesUpdateDomain.beginWalkUpdateDomainAndWait(
      resourceGroupName,
      cloudServiceName,
      updateDomain,
    );
  console.log(result);
}

async function main(): Promise<void> {
  await updateCloudServiceToSpecifiedDomain();
}

main().catch(console.error);
