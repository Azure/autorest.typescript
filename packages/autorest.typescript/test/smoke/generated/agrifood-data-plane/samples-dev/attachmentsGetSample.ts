// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureAgriFoodPlatformDataPlaneServiceClient from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets a specified attachment resource under a particular farmer.
 *
 * @summary Gets a specified attachment resource under a particular farmer.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/Attachments_Get.json
 */
async function attachmentsGet() {
  const endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    endpoint,
    credential
  );
  const farmerId = "FARMER123";
  const attachmentId = "ATTACHMENT123";
  const result = await client
    .path(
      "/farmers/{farmerId}/attachments/{attachmentId}",
      farmerId,
      attachmentId
    )
    .get();
  console.log(result);
}

async function main() {
  attachmentsGet();
}

main().catch(console.error);
