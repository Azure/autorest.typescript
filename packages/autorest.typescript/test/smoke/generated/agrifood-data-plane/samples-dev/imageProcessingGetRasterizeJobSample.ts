// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureAgriFoodPlatformDataPlaneServiceClient from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import "dotenv/config";

/**
 * This sample demonstrates how to Get ImageProcessing Rasterize job's details.
 *
 * @summary Get ImageProcessing Rasterize job's details.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/ImageProcessing_GetRasterizeJob.json
 */
async function imageProcessingGetRasterizeJob(): Promise<void> {
  const endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    endpoint,
    credential,
  );
  const jobId = "JOB123";
  const result = await client
    .path("/image-processing/rasterize/{jobId}", jobId)
    .get();
  console.log(result);
}

async function main(): Promise<void> {
  await imageProcessingGetRasterizeJob();
}

main().catch(console.error);
