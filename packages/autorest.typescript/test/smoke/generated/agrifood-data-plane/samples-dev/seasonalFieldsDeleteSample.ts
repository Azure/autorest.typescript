// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureAgriFoodPlatformDataPlaneServiceClient from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Deletes a specified seasonal-field resource under a particular farmer.
 *
 * @summary Deletes a specified seasonal-field resource under a particular farmer.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/SeasonalFields_Delete.json
 */
async function seasonalFieldsDelete() {
  const endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    endpoint,
    credential,
  );
  const farmerId = "FARMER123";
  const seasonalFieldId = "SEASONALFIELD123";
  const result = await client
    .path(
      "/farmers/{farmerId}/seasonal-fields/{seasonalFieldId}",
      farmerId,
      seasonalFieldId,
    )
    .delete();
  console.log(result);
}

async function main() {
  seasonalFieldsDelete();
}

main().catch(console.error);
