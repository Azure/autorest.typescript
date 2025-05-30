/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  StorageAccountCheckNameAvailabilityParameters,
  StorageManagementClient,
} from "@msinternal/storage-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Checks that the storage account name is valid and is not already in use.
 *
 * @summary Checks that the storage account name is valid and is not already in use.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2021-06-01/examples/StorageAccountCheckNameAvailability.json
 */
async function storageAccountCheckNameAvailability(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const accountName: StorageAccountCheckNameAvailabilityParameters = {
    name: "sto3363",
    type: "Microsoft.Storage/storageAccounts",
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result =
    await client.storageAccounts.checkNameAvailability(accountName);
  console.log(result);
}

async function main(): Promise<void> {
  await storageAccountCheckNameAvailability();
}

main().catch(console.error);
