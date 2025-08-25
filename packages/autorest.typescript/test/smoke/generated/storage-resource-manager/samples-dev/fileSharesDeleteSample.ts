// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { StorageManagementClient } from "@msinternal/storage-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Deletes specified share under its account.
 *
 * @summary Deletes specified share under its account.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2021-06-01/examples/FileSharesDelete.json
 */
async function deleteShares(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "res4079";
  const accountName = "sto4506";
  const shareName = "share9689";
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.fileShares.delete(
    resourceGroupName,
    accountName,
    shareName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await deleteShares();
}

main().catch(console.error);
