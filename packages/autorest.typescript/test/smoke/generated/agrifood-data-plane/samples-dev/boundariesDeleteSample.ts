// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureAgriFoodPlatformDataPlaneServiceClient from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import "dotenv/config";

/**
 * This sample demonstrates how to Deletes a specified boundary resource under a particular farmer.
 *
 * @summary Deletes a specified boundary resource under a particular farmer.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/Boundaries_Delete.json
 */
async function boundariesDelete(): Promise<void> {
  const endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    endpoint,
    credential,
  );
  const farmerId = "FARMER123";
  const boundaryId = "BOUNDARY123";
  const result = await client
    .path("/farmers/{farmerId}/boundaries/{boundaryId}", farmerId, boundaryId)
    .delete();
  console.log(result);
}

async function main(): Promise<void> {
  await boundariesDelete();
}

main().catch(console.error);
