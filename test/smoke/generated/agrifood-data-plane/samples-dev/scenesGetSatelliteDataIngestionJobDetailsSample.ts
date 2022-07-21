// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAzureAgriFoodPlatformDataPlaneServiceClient from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get a satellite data ingestion job.
 *
 * @summary Get a satellite data ingestion job.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/Scenes_GetSatelliteDataIngestionJobDetails.json
 */
async function scenesGetSatelliteDataIngestionJobDetails() {
  const Endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    Endpoint,
    credential
  );
  const jobId = "JOB123";
  const result = await client
    .path("/scenes/satellite/ingest-data/{jobId}", jobId)
    .get();
  console.log(result);
}

scenesGetSatelliteDataIngestionJobDetails().catch(console.error);
