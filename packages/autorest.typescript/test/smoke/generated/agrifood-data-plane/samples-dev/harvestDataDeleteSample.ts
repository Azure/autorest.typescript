// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureAgriFoodPlatformDataPlaneServiceClient from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Deletes a specified harvest data resource under a particular farmer.
 *
 * @summary Deletes a specified harvest data resource under a particular farmer.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/HarvestData_Delete.json
 */
async function harvestDataDelete() {
  const endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    endpoint,
    credential,
  );
  const farmerId = "FARMER123";
  const harvestDataId = "HARVESTOP123";
  const result = await client
    .path(
      "/farmers/{farmerId}/harvest-data/{harvestDataId}",
      farmerId,
      harvestDataId,
    )
    .delete();
  console.log(result);
}

async function main() {
  harvestDataDelete();
}

main().catch(console.error);
