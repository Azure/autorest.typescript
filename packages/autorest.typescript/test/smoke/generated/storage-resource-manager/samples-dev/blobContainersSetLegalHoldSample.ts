/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  LegalHold,
  StorageManagementClient,
} from "@msinternal/storage-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Sets legal hold tags. Setting the same tag results in an idempotent operation. SetLegalHold follows an append pattern and does not clear out the existing tags that are not specified in the request.
 *
 * @summary Sets legal hold tags. Setting the same tag results in an idempotent operation. SetLegalHold follows an append pattern and does not clear out the existing tags that are not specified in the request.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2021-06-01/examples/BlobContainersSetLegalHold.json
 */
async function setLegalHoldContainers(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "res4303";
  const accountName = "sto7280";
  const containerName = "container8723";
  const legalHold: LegalHold = { tags: ["tag1", "tag2", "tag3"] };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.blobContainers.setLegalHold(
    resourceGroupName,
    accountName,
    containerName,
    legalHold,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Sets legal hold tags. Setting the same tag results in an idempotent operation. SetLegalHold follows an append pattern and does not clear out the existing tags that are not specified in the request.
 *
 * @summary Sets legal hold tags. Setting the same tag results in an idempotent operation. SetLegalHold follows an append pattern and does not clear out the existing tags that are not specified in the request.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2021-06-01/examples/BlobContainersSetLegalHoldAllowProtectedAppendWritesAll.json
 */
async function setLegalHoldContainersWithAllowProtectedAppendWritesAll(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "res4303";
  const accountName = "sto7280";
  const containerName = "container8723";
  const legalHold: LegalHold = {
    allowProtectedAppendWritesAll: true,
    tags: ["tag1", "tag2", "tag3"],
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.blobContainers.setLegalHold(
    resourceGroupName,
    accountName,
    containerName,
    legalHold,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await setLegalHoldContainers();
  await setLegalHoldContainersWithAllowProtectedAppendWritesAll();
}

main().catch(console.error);
