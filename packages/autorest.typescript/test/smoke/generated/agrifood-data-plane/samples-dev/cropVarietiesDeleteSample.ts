// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureAgriFoodPlatformDataPlaneServiceClient from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Deletes a specified crop variety resource under a particular crop.
 *
 * @summary Deletes a specified crop variety resource under a particular crop.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/CropVarieties_Delete.json
 */
async function cropVarietiesDelete() {
  const endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    endpoint,
    credential,
  );
  const cropId = "CORN123";
  const cropVarietyId = "SEED123";
  const result = await client
    .path(
      "/crops/{cropId}/crop-varieties/{cropVarietyId}",
      cropId,
      cropVarietyId,
    )
    .delete();
  console.log(result);
}

async function main() {
  cropVarietiesDelete();
}

main().catch(console.error);
