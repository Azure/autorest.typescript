// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureAgriFoodPlatformDataPlaneServiceClient from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import "dotenv/config";

/**
 * This sample demonstrates how to Deletes a specified attachment resource under a particular farmer.
 *
 * @summary Deletes a specified attachment resource under a particular farmer.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/Attachments_Delete.json
 */
async function attachmentsDelete(): Promise<void> {
  const endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    endpoint,
    credential,
  );
  const farmerId = "FARMER123";
  const attachmentId = "ATTACHMENT123";
  const result = await client
    .path(
      "/farmers/{farmerId}/attachments/{attachmentId}",
      farmerId,
      attachmentId,
    )
    .delete();
  console.log(result);
}

async function main(): Promise<void> {
  await attachmentsDelete();
}

main().catch(console.error);
