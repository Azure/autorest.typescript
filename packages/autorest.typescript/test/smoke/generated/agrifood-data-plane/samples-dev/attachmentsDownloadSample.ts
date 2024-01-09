// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureAgriFoodPlatformDataPlaneServiceClient from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Downloads and returns attachment as response for the given input filePath.
 *
 * @summary Downloads and returns attachment as response for the given input filePath.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/Attachments_Download.json
 */
async function attachmentsDownload() {
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
      "/farmers/{farmerId}/attachments/{attachmentId}/file",
      farmerId,
      attachmentId,
    )
    .get();
  console.log(result);
}

async function main() {
  attachmentsDownload();
}

main().catch(console.error);
