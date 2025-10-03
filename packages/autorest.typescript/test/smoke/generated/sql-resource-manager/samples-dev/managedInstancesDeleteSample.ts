// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Deletes a managed instance.
 *
 * @summary Deletes a managed instance.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-05-01-preview/examples/ManagedInstanceDelete.json
 */
async function deleteManagedInstance(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "20D7082A-0FC7-4468-82BD-542694D5042B";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "testrg";
  const managedInstanceName = "testinstance";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.managedInstances.beginDeleteAndWait(
    resourceGroupName,
    managedInstanceName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await deleteManagedInstance();
}

main().catch(console.error);
