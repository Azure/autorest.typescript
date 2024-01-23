// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureAgriFoodPlatformDataPlaneServiceClient from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets a specified field resource under a particular farmer.
 *
 * @summary Gets a specified field resource under a particular farmer.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/Fields_Get.json
 */
async function fieldsGet() {
  const endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    endpoint,
    credential,
  );
  const farmerId = "FARMER123";
  const fieldId = "FIELD123";
  const result = await client
    .path("/farmers/{farmerId}/fields/{fieldId}", farmerId, fieldId)
    .get();
  console.log(result);
}

async function main() {
  fieldsGet();
}

main().catch(console.error);
