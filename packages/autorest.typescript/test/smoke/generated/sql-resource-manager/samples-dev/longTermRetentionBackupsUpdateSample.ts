/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  UpdateLongTermRetentionBackupParameters,
  SqlManagementClient,
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates an existing long term retention backup.
 *
 * @summary Updates an existing long term retention backup.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-05-01-preview/examples/LongTermRetentionBackupUpdate.json
 */
async function updateTheLongTermRetentionBackup(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const locationName = "japaneast";
  const longTermRetentionServerName = "testserver";
  const longTermRetentionDatabaseName = "testDatabase";
  const backupName = "55555555-6666-7777-8888-999999999999;131637960820000000";
  const parameters: UpdateLongTermRetentionBackupParameters = {
    requestedBackupStorageRedundancy: "Geo",
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.longTermRetentionBackups.beginUpdateAndWait(
    locationName,
    longTermRetentionServerName,
    longTermRetentionDatabaseName,
    backupName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updateTheLongTermRetentionBackup();
}

main().catch(console.error);
