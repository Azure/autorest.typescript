// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureAgriFoodPlatformDataPlaneServiceClient from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Deletes a specified field resource under a particular farmer.
 *
 * @summary Deletes a specified field resource under a particular farmer.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/Fields_Delete.json
 */
async function fieldsDelete() {
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
    .delete();
  console.log(result);
}

async function main() {
  fieldsDelete();
}

main().catch(console.error);
