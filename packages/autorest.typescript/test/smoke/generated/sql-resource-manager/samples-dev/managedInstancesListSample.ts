// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a list of all managed instances in the subscription.
 *
 * @summary Gets a list of all managed instances in the subscription.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-05-01-preview/examples/ManagedInstanceList.json
 */
async function listManagedInstances(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "20D7082A-0FC7-4468-82BD-542694D5042B";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.managedInstances.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Gets a list of all managed instances in the subscription.
 *
 * @summary Gets a list of all managed instances in the subscription.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-05-01-preview/examples/ManagedInstanceListWithExpandEqualsAdministrators.json
 */
async function listManagedInstancesWithExpandAdministratorsOrActivedirectory(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "20D7082A-0FC7-4468-82BD-542694D5042B";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.managedInstances.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await listManagedInstances();
  await listManagedInstancesWithExpandAdministratorsOrActivedirectory();
}

main().catch(console.error);
