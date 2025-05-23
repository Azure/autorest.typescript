/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a list of all managed instances in an instance pool.
 *
 * @summary Gets a list of all managed instances in an instance pool.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-05-01-preview/examples/ManagedInstanceListByInstancePool.json
 */
async function listManagedInstancesByInstancePool(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "20D7082A-0FC7-4468-82BD-542694D5042B";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "Test1";
  const instancePoolName = "pool1";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.managedInstances.listByInstancePool(
    resourceGroupName,
    instancePoolName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Gets a list of all managed instances in an instance pool.
 *
 * @summary Gets a list of all managed instances in an instance pool.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-05-01-preview/examples/ManagedInstanceListByInstancePoolWithExpandEqualsAdministrators.json
 */
async function listManagedInstancesByInstancePoolWithExpandAdministratorsOrActivedirectory(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "20D7082A-0FC7-4468-82BD-542694D5042B";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "Test1";
  const instancePoolName = "pool1";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.managedInstances.listByInstancePool(
    resourceGroupName,
    instancePoolName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await listManagedInstancesByInstancePool();
  await listManagedInstancesByInstancePoolWithExpandAdministratorsOrActivedirectory();
}

main().catch(console.error);
