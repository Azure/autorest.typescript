// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureAgriFoodPlatformDataPlaneServiceClient from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a specified crop resource.
 *
 * @summary Gets a specified crop resource.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/Crops_Get.json
 */
async function cropsGet(): Promise<void> {
  const endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    endpoint,
    credential,
  );
  const cropId = "CORN123";
  const result = await client.path("/crops/{cropId}", cropId).get();
  console.log(result);
}

async function main(): Promise<void> {
  await cropsGet();
}

main().catch(console.error);
