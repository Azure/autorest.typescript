// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureAgriFoodPlatformDataPlaneServiceClient from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get a farm operation data ingestion job.
 *
 * @summary Get a farm operation data ingestion job.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/FarmOperations_GetDataIngestionJobDetails.json
 */
async function farmOperationsGetDataIngestionJobDetails() {
  const endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    endpoint,
    credential,
  );
  const jobId = "JOB123";
  const result = await client
    .path("/farm-operations/ingest-data/{jobId}", jobId)
    .get();
  console.log(result);
}

async function main() {
  farmOperationsGetDataIngestionJobDetails();
}

main().catch(console.error);
