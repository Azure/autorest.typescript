// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createClient from "@msinternal/agrifood-data-plane";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get ImageProcessing Rasterize job's details.
 *
 * @summary Get ImageProcessing Rasterize job's details.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/ImageProcessing_GetRasterizeJob.json
 */
async function imageProcessingGetRasterizeJob() {
  const Endpoint = "{Endpoint}";
  const credential = new DefaultAzureCredential();
  const client = createClient(Endpoint, credential);
  const jobId = "JOB123";
  const result = await client
    .path("/image-processing/rasterize/{jobId}", jobId)
    .get();
  console.log(result);
}

imageProcessingGetRasterizeJob().catch(console.error);
